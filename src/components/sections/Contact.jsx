import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";
import { portfolioData } from "../../data/portfolioData";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FORM = {
  name: "",
  email: "",
  projectType: "",
  scope: "",
  message: "",
};

// Set these in .env.local (see .env.example) after creating a free EmailJS account.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const isEmailConfigured = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

function validate(formData, contactForm) {
  const errors = {};
  if (!formData.name.trim()) errors.name = contactForm.nameRequired;
  if (!formData.email.trim()) {
    errors.email = contactForm.emailRequired;
  } else if (!EMAIL_PATTERN.test(formData.email)) {
    errors.email = contactForm.emailInvalid;
  }
  if (!formData.message.trim()) errors.message = contactForm.messageRequired;
  return errors;
}

function Contact({ lang }) {
  const { contact, services, ui } = portfolioData;
  const { contactForm } = ui;
  const formRef = useRef(null);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | not-configured | error
  const [sentName, setSentName] = useState("");

  const projectTypeOptions = [
    ...services.items.map((item) => item.title[lang]),
    contactForm.otherOption[lang],
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(formData, contactForm);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!isEmailConfigured) {
      setStatus("not-configured");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setSentName(formData.name);
      setStatus("sent");
      setFormData(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="border-t border-white/5 bg-card/30 py-20 md:py-28">
      <Container>
        <SectionHeader title={contact.title[lang]} />
        <p className="mt-2 text-center text-sm font-medium text-primary">{contact.availability[lang]}</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="flex min-w-0 flex-col gap-5 rounded-2xl border border-white/5 bg-card/60 p-6 backdrop-blur-md sm:p-8"
          >
            <Field
              label={contactForm.nameLabel[lang]}
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name?.[lang]}
              autoComplete="name"
            />
            <Field
              label={contactForm.emailLabel[lang]}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email?.[lang]}
              autoComplete="email"
            />

            <div className="flex flex-col gap-1.5">
              <label htmlFor="projectType" className="text-sm font-medium text-text">
                {contactForm.projectTypeLabel[lang]}
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-background px-4 py-2.5 text-sm text-text focus-visible:border-primary"
              >
                <option value="">{contactForm.selectPlaceholder[lang]}</option>
                {projectTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <Field
              label={contactForm.scopeLabel[lang]}
              name="scope"
              value={formData.scope}
              onChange={handleChange}
              placeholder={contactForm.scopePlaceholder[lang]}
            />

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-text">
                {contactForm.messageLabel[lang]}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="rounded-xl border border-white/10 bg-background px-4 py-2.5 text-sm text-text focus-visible:border-primary"
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-red-400">
                  {errors.message[lang]}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              className="mt-2 w-fit disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === "sending"}
            >
              {status === "sending" ? contactForm.sendingButton[lang] : contactForm.sendButton[lang]}
            </Button>

            {status === "sent" && (
              <p role="status" className="text-sm text-ai">
                {contactForm.thanksPrefix[lang]}, {sentName}
                {contactForm.sentNote[lang]}
              </p>
            )}

            {status === "not-configured" && (
              <p role="status" className="text-sm text-ai">
                {contactForm.thanksPrefix[lang]}, {formData.name}
                {contactForm.notConnectedNote[lang]}{" "}
                <a href={`mailto:${contact.email}`} className="font-medium underline">
                  {contact.email}
                </a>{" "}
                {contactForm.getBackNote[lang]}
              </p>
            )}

            {status === "error" && (
              <p role="status" className="text-sm text-red-400">
                {contactForm.errorNote[lang]}{" "}
                <a href={`mailto:${contact.email}`} className="font-medium underline">
                  {contact.email}
                </a>
              </p>
            )}
          </form>

          <div className="flex min-w-0 flex-col gap-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {contactForm.preferEmail[lang]}
              </h3>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 inline-block break-all text-lg font-medium text-text transition-colors hover:text-primary"
              >
                {contact.email}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {contactForm.findElsewhere[lang]}
              </h3>
              <SocialLinks className="mt-3" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = "text", autoComplete, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-text">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="rounded-xl border border-white/10 bg-card px-4 py-2.5 text-sm text-text focus-visible:border-primary"
      />
      {error && (
        <p id={`${name}-error`} className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default Contact;
