import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
} from "react-icons/si";
import {
  FiCpu,
  FiMessageSquare,
  FiLink,
  FiLayout,
  FiFilm,
  FiEdit3,
  FiSmartphone,
  FiCode,
  FiMonitor,
  FiPenTool,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

const ICONS = {
  "Front-End Development": FiMonitor,
  React: SiReact,
  "JavaScript ES6+": SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  "Claude Code": FiCpu,
  "Anthropic AI Frameworks": FiCpu,
  "Prompt Engineering": FiMessageSquare,
  "API Integration": FiLink,
  "Building Websites with AI": HiSparkles,
  "Landing Pages": FiLayout,
  "Content Creation": FiPenTool,
  "Media Editing": FiFilm,
  "Digital Content Strategy": FiEdit3,
  Git: SiGit,
  GitHub: SiGithub,
  "Responsive Web Design": FiSmartphone,
};

function SkillCard({ name, description }) {
  const Icon = ICONS[name] || FiCode;

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-card/60 p-5 text-center backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-primary/40">
      <Icon size={28} className="text-ai" aria-hidden="true" />
      <span className="text-sm font-medium text-text">{name}</span>
      {description && <span className="text-xs text-muted">{description}</span>}
    </div>
  );
}

export default SkillCard;
