import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import SkillCard from "./SkillCard";
import { portfolioData } from "../../data/portfolioData";

const CATEGORY_KEYS = ["frontEnd", "aiTools", "designProduct"];

function Skills({ lang }) {
  const { skills, skillCategories, skillDescriptions, ui } = portfolioData;

  return (
    <section id="skills" className="border-t border-border-subtle bg-card/30 py-20 md:py-28">
      <Reveal>
      <Container>
        <SectionHeader title={ui.sectionTitles.skills[lang]} />

        <div className="mt-12 flex flex-col gap-10">
          {CATEGORY_KEYS.map((key) => (
            <div key={key}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {skillCategories[key][lang]}
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {skills[key].map((skill) => (
                  <SkillCard key={skill} name={skill} description={skillDescriptions[skill]?.[lang]} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
      </Reveal>
    </section>
  );
}

export default Skills;
