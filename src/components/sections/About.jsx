import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import ExperienceCard from "./ExperienceCard";
import { portfolioData } from "../../data/portfolioData";

function About({ lang }) {
  const { about, experience } = portfolioData;

  return (
    <section id="about" className="border-t border-white/5 bg-card/30 py-20 md:py-28">
      <Reveal>
      <Container>
        <SectionHeader title={about.title[lang]} />

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {about.focusAreas.map((area) => (
            <span
              key={area.en}
              className="rounded-full border border-white/10 bg-background px-3 py-1 text-xs font-medium text-muted"
            >
              {area[lang]}
            </span>
          ))}
        </div>

        <div id="experience" className="mt-16 grid scroll-mt-24 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experience.map((item) => (
            <ExperienceCard key={item.role.en} experience={item} lang={lang} />
          ))}
        </div>
      </Container>
      </Reveal>
    </section>
  );
}

export default About;
