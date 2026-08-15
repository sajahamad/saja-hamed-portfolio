import { FiUser, FiCpu, FiCode, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { portfolioData } from "../../data/portfolioData";

const STEP_ICONS = {
  userInput: FiUser,
  aiLogic: FiCpu,
  appLogic: FiCode,
  result: FiCheckCircle,
};

const STEP_COLORS = {
  userInput: "text-muted",
  aiLogic: "text-ai",
  appLogic: "text-primary",
  result: "text-primary",
};

function AIShowcase({ lang }) {
  const { aiIntegration } = portfolioData;

  return (
    <section id="ai-integration" className="border-t border-border-subtle py-20 md:py-28">
      <Reveal>
      <Container>
        <SectionHeader title={aiIntegration.title[lang]} subtitle={aiIntegration.subtitle[lang]} />

        <div className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-3">
          {aiIntegration.workflow.map((step, index) => {
            const Icon = STEP_ICONS[step.key] || FiCpu;
            const isLast = index === aiIntegration.workflow.length - 1;
            const isAiStep = step.key === "aiLogic";

            return (
              <div key={step.key} className="flex flex-col items-center gap-3 sm:flex-row">
                <div
                  className={`flex w-40 flex-col items-center gap-3 rounded-2xl border bg-card/60 p-6 text-center backdrop-blur-md ${
                    isAiStep ? "border-ai/30" : "border-border-subtle"
                  }`}
                >
                  <Icon size={28} className={STEP_COLORS[step.key] || "text-text"} aria-hidden="true" />
                  <span className="text-sm font-semibold text-text">{step.label[lang]}</span>
                </div>

                {!isLast && (
                  <FiArrowRight
                    size={20}
                    className="rotate-90 text-muted sm:rotate-0 sm:rtl:rotate-180"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted">{aiIntegration.disclaimer[lang]}</p>
      </Container>
      </Reveal>
    </section>
  );
}

export default AIShowcase;
