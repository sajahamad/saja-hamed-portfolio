import { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Button from "../ui/Button";
import { portfolioData } from "../../data/portfolioData";

const CASE_STUDY_FIELD_KEYS = ["problem", "myRole", "solution", "architecture"];

function CaseStudyModal({ project, lang, onClose }) {
  const shouldReduceMotion = useReducedMotion();
  const titleId = useId();
  const closeButtonRef = useRef(null);
  const { caseStudyFields } = portfolioData.ui;

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const caseStudy = project?.caseStudy ?? {};
  const hasCaseStudyDetails =
    CASE_STUDY_FIELD_KEYS.some((key) => caseStudy[key]?.[lang]) || caseStudy.keyFeatures?.[lang]?.length > 0;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card/90 p-6 backdrop-blur-md sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                {project.featured && (
                  <span className="mb-2 inline-block rounded-full bg-ai/10 px-3 py-1 text-xs font-semibold text-ai">
                    {portfolioData.ui.featuredCaseStudy[lang]}
                  </span>
                )}
                <h2 id={titleId} className="text-2xl font-semibold text-text">
                  {project.name}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label={portfolioData.ui.closeCaseStudy[lang]}
                className="shrink-0 rounded-md p-2 text-muted transition-colors hover:text-text"
              >
                <HiX size={20} />
              </button>
            </div>

            <p className="mt-3 text-muted">{project.description[lang]}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-5">
              {CASE_STUDY_FIELD_KEYS.map((key) => {
                const value = caseStudy[key]?.[lang];
                if (!value) return null;
                return (
                  <div key={key}>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                      {caseStudyFields[key][lang]}
                    </h3>
                    <p className="mt-1 text-text">{value}</p>
                  </div>
                );
              })}

              {caseStudy.keyFeatures?.[lang]?.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                    {caseStudyFields.keyFeatures[lang]}
                  </h3>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-text">
                    {caseStudy.keyFeatures[lang].map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {!hasCaseStudyDetails && (
                <p className="text-sm text-muted">{caseStudyFields.comingSoon[lang]}</p>
              )}
            </div>

            {(project.liveDemo || project.github) && (
              <div className="mt-6 flex flex-wrap gap-3 border-t border-border-subtle pt-5">
                {project.liveDemo && (
                  <Button as="a" href={project.liveDemo} target="_blank" rel="noreferrer" variant="primary">
                    <FiExternalLink size={16} /> {caseStudyFields.liveDemo[lang]}
                  </Button>
                )}
                {project.github && (
                  <Button as="a" href={project.github} target="_blank" rel="noreferrer" variant="outline">
                    <FiGithub size={16} /> {caseStudyFields.github[lang]}
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CaseStudyModal;
