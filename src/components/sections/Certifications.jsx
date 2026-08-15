import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import CredentialCard from "./CredentialCard";
import CredentialModal from "./CredentialModal";
import { portfolioData } from "../../data/portfolioData";

function Certifications({ lang }) {
  const { certifications, ui } = portfolioData;
  const [openCertName, setOpenCertName] = useState(null);

  const openCert = certifications.find((cert) => cert.name === openCertName) ?? null;

  return (
    <section id="certifications" className="border-t border-border-subtle bg-card/30 py-20 md:py-28">
      <Reveal>
      <Container>
        <SectionHeader title={ui.sectionTitles.certifications[lang]} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CredentialCard
              key={cert.name}
              certification={cert}
              lang={lang}
              onOpen={() => setOpenCertName(cert.name)}
            />
          ))}
        </div>
      </Container>
      </Reveal>

      <CredentialModal certification={openCert} lang={lang} onClose={() => setOpenCertName(null)} />
    </section>
  );
}

export default Certifications;
