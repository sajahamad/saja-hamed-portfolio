import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import ContentSeriesCard from "./ContentSeriesCard";
import { portfolioData } from "../../data/portfolioData";

function ContentImpact({ lang }) {
  const { contentImpact, contentSeries } = portfolioData;

  return (
    <section id="impact" className="border-t border-white/5 py-20 md:py-28">
      <Reveal>
      <Container>
        <SectionHeader title={contentImpact.title[lang]} subtitle={contentImpact.supportingText[lang]} />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {contentImpact.pillars.map((pillar) => (
            <div
              key={pillar.name.en}
              className="overflow-hidden rounded-2xl border border-white/5 bg-card/60 text-center backdrop-blur-md transition-all duration-200 hover:-translate-y-1"
            >
              <img
                src={pillar.image}
                alt={pillar.name[lang]}
                className="h-48 w-full border-b border-white/10 bg-background/40 object-contain sm:h-56"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ai">{pillar.name[lang]}</h3>
                <p className="mt-2 text-sm text-muted">{pillar.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {contentSeries.map((series) => (
            <ContentSeriesCard key={series.id} series={series} lang={lang} />
          ))}
        </div>
      </Container>
      </Reveal>
    </section>
  );
}

export default ContentImpact;
