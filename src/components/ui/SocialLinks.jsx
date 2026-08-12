import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiAward } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

const ICONS = {
  Email: FiMail,
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Instagram: FiInstagram,
  BrightGaza: FiAward,
};

function SocialLinks({ className = "" }) {
  const links = portfolioData.socialLinks.filter((link) => link.url && ICONS[link.name]);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ name, url }) => {
        const Icon = ICONS[name];
        const isExternal = url.startsWith("http");
        return (
          <a
            key={name}
            href={url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            aria-label={name}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-primary hover:text-primary"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
