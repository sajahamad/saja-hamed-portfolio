import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { portfolioData } from "../../data/portfolioData";

function WhySaja({ lang }) {
  const { whySaja } = portfolioData;
  const paragraphs = whySaja.narrative[lang] || whySaja.narrative.en;

  return (
    <section id="why-saja" className="border-t border-white/5 py-20 md:py-28">
      <Reveal>
      <Container>
        <SectionHeader title={whySaja.title[lang]} />

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/5 bg-card/60 p-6 backdrop-blur-md sm:p-10">
          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted sm:text-lg">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
      </Reveal>
    </section>
  );
}

export default WhySaja;
