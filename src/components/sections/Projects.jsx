import { useMemo, useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import CaseStudyModal from "./CaseStudyModal";
import { portfolioData } from "../../data/portfolioData";

function Projects({ lang }) {
  const { projects, projectFilters, ui } = portfolioData;
  const [activeFilter, setActiveFilter] = useState(projectFilters[0].value);
  const [openProjectId, setOpenProjectId] = useState(null);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter, projects]);

  const openProject = projects.find((project) => project.id === openProjectId) ?? null;

  return (
    <section id="work" className="border-t border-white/5 bg-card/30 py-20 md:py-28">
      <Reveal>
      <Container>
        <SectionHeader
          title={ui.sectionTitles.projects[lang]}
          subtitle={ui.projectsSubtitle[lang]}
        />

        <ProjectFilter
          filters={projectFilters}
          activeFilter={activeFilter}
          onSelect={setActiveFilter}
          lang={lang}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              lang={lang}
              onOpen={() => setOpenProjectId(project.id)}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-lg font-medium text-text">{ui.projectsCtaText[lang]}</p>
          <Button as="a" href="#contact" variant="primary">
            {ui.startProjectButton[lang]}
          </Button>
        </div>
      </Container>
      </Reveal>

      <CaseStudyModal project={openProject} lang={lang} onClose={() => setOpenProjectId(null)} />
    </section>
  );
}

export default Projects;
