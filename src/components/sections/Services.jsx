import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { portfolioData } from "../../data/portfolioData";

function Services({ lang }) {
  const { services } = portfolioData;

  return (
    <section id="services" className="border-t border-border-subtle py-20 md:py-28">
      <Reveal>
      <Container>
        <SectionHeader title={services.title[lang]} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.items.map((service) => (
            <div
              key={service.title.en}
              className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-card/60 p-6 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
            >
              <h3 className="text-lg font-semibold text-text">{service.title[lang]}</h3>
              <p className="text-sm text-muted">{service.description[lang]}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="text-base font-semibold text-primary transition-colors hover:text-text"
          >
            {services.cta[lang]}
          </a>
        </div>
      </Container>
      </Reveal>
    </section>
  );
}

export default Services;
