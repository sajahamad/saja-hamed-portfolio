import { FiExternalLink, FiGithub } from "react-icons/fi";
import Button from "../ui/Button";
import { portfolioData } from "../../data/portfolioData";

function ProjectCard({ project, lang, onOpen }) {
  const { name, description, nextStep, stack, featured, image, caseStudy, liveDemo, github } = project;
  const { ui } = portfolioData;
  const hasCaseStudy = Object.values(caseStudy).some((field) => field[lang]?.length > 0);

  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-border-subtle bg-card/60 p-6 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-primary">
      {image && (
        <img
          src={image}
          alt={name}
          className="-mx-6 -mt-6 h-40 w-[calc(100%+3rem)] max-w-none object-cover"
        />
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-text">{name}</h3>
        {featured && (
          <span className="shrink-0 rounded-full bg-ai/10 px-3 py-1 text-xs font-semibold text-ai">
            {ui.featuredProject[lang]}
          </span>
        )}
      </div>

      <p className="text-sm text-muted">{description[lang]}</p>

      {nextStep && <p className="text-sm font-medium text-text">{nextStep[lang]}</p>}

      <ul className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li key={tech} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
            {tech}
          </li>
        ))}
      </ul>

      {(liveDemo || github || hasCaseStudy) && (
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          {liveDemo && (
            <Button as="a" href={liveDemo} target="_blank" rel="noreferrer" variant="primary">
              <FiExternalLink size={16} /> {ui.caseStudyFields.liveDemo[lang]}
            </Button>
          )}
          {github && (
            <Button as="a" href={github} target="_blank" rel="noreferrer" variant="outline">
              <FiGithub size={16} /> {ui.caseStudyFields.github[lang]}
            </Button>
          )}
          {hasCaseStudy && (
            <button type="button" onClick={onOpen} className="text-sm font-medium text-primary">
              {ui.viewCaseStudy[lang]}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
