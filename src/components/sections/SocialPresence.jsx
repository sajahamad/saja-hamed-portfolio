import { SiInstagram, SiTiktok, SiGithub } from "react-icons/si";
import { FiLinkedin, FiAward } from "react-icons/fi";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { portfolioData } from "../../data/portfolioData";

const ICONS = {
  Instagram: SiInstagram,
  TikTok: SiTiktok,
  LinkedIn: FiLinkedin,
  GitHub: SiGithub,
  BrightGaza: FiAward,
};

const DISPLAY_NAMES = {
  BrightGaza: "Bright Gaza",
};

function SocialPresence({ lang }) {
  const { socialPresence, socialLinks, ui } = portfolioData;

  return (
    <section id="social" className="border-t border-white/5 bg-card/30 py-20 md:py-28">
      <Reveal>
      <Container>
        <SectionHeader title={socialPresence.title[lang]} subtitle={socialPresence.supportingText[lang]} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {socialPresence.platforms.map((platform) => {
            const Icon = ICONS[platform] || FiAward;
            const link = socialLinks.find((item) => item.name === platform);
            const hasUrl = Boolean(link && link.url);
            const displayName = DISPLAY_NAMES[platform] || platform;

            const content = (
              <>
                <Icon size={28} className="text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-text">{displayName}</span>
                <span className="text-xs text-muted">
                  {hasUrl ? ui.socialPresenceUi.viewProfile[lang] : ui.socialPresenceUi.comingSoon[lang]}
                </span>
              </>
            );

            return hasUrl ? (
              <a
                key={platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/5 bg-card/60 p-6 text-center backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
              >
                {content}
              </a>
            ) : (
              <div
                key={platform}
                aria-disabled="true"
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/5 bg-card/60 p-6 text-center opacity-60 backdrop-blur-md"
              >
                {content}
              </div>
            );
          })}
        </div>
      </Container>
      </Reveal>
    </section>
  );
}

export default SocialPresence;
