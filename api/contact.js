// Vercel Serverless Function: /api/contact
// Server-side validation + rate limiting for the contact form, then forwards
// the message to EmailJS via its REST API (server-to-server, using the
// account's private key so the request cannot be spoofed from the browser).

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 5000;

// Simple in-memory sliding-window rate limiter, keyed by client IP.
// Note: state is per serverless instance and resets on cold start, so this
// is a basic deterrent against quick bursts, not a hard guarantee.
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (requestLog.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

function sanitizeField(value) {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many requests. Please try again later." });
  }

  const body = req.body || {};
  const name = sanitizeField(body.name);
  const email = sanitizeField(body.email);
  const message = sanitizeField(body.message);
  const projectType = sanitizeField(body.projectType);
  const scope = sanitizeField(body.scope);

  const fieldErrors = {};
  if (!name) fieldErrors.name = "Name is required.";
  if (!email) {
    fieldErrors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "Email is not a valid email address.";
  }
  if (!message) fieldErrors.message = "Message is required.";

  if (Object.keys(fieldErrors).length > 0) {
    return res.status(400).json({ error: "Validation failed", fields: fieldErrors });
  }

  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } = process.env;
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_PRIVATE_KEY) {
    return res.status(503).json({ error: "Email service is not configured." });
  }

  try {
    const emailjsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        accessToken: EMAILJS_PRIVATE_KEY,
        template_params: { name, email, projectType, scope, message },
      }),
    });

    if (!emailjsResponse.ok) {
      const detail = await emailjsResponse.text();
      console.error("EmailJS send failed:", emailjsResponse.status, detail);
      return res.status(502).json({ error: "Failed to send email." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Unexpected server error." });
  }
}
