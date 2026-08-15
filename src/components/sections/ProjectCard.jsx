import { portfolioData } from "../../data/portfolioData";

function ProjectCard({ project, lang, onOpen }) {
  const { name, description, stack, featured } = project;
  const { ui } = portfolioData;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-card/60 p-6 text-left backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-primary"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-text">{name}</h3>
        {featured && (
          <span className="shrink-0 rounded-full bg-ai/10 px-3 py-1 text-xs font-semibold text-ai">
            {ui.featuredCaseStudy[lang]}
          </span>
        )}
      </div>

      <p className="text-sm text-muted">{description[lang]}</p>

      <ul className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li key={tech} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
            {tech}
          </li>
        ))}
      </ul>

      <span className="mt-auto text-sm font-medium text-primary">{ui.viewCaseStudy[lang]}</span>
    </button>
  );
}

export default ProjectCard;
