import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import ContentImpact from "./components/sections/ContentImpact";
import Projects from "./components/sections/Projects";
import WhySaja from "./components/sections/WhySaja";
import Skills from "./components/sections/Skills";
import AIShowcase from "./components/sections/AIShowcase";
import Certifications from "./components/sections/Certifications";
import Services from "./components/sections/Services";
import SocialPresence from "./components/sections/SocialPresence";
import Contact from "./components/sections/Contact";
import AIAssistant from "./components/sections/AIAssistant";
import { portfolioData } from "./data/portfolioData";

function App() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = portfolioData.seo.title[lang];
    document.querySelector('meta[name="description"]')?.setAttribute("content", portfolioData.seo.description[lang]);
  }, [lang]);

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <img
          src={portfolioData.personal.portrait}
          alt=""
          className="h-full w-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(24,24,27,0.92) 0%, rgba(29,36,53,0.9) 45%, rgba(24,61,70,0.9) 100%)",
          }}
        />
      </div>

      <Navbar lang={lang} onToggleLang={setLang} />
      <main className="pt-16 md:pt-20">
        <Hero lang={lang} />
        <About lang={lang} />
        <Certifications lang={lang} />
        <ContentImpact lang={lang} />
        <Projects lang={lang} />
        <WhySaja lang={lang} />
        <Skills lang={lang} />
        <AIShowcase lang={lang} />
        <Services lang={lang} />
        <SocialPresence lang={lang} />
        <Contact lang={lang} />
      </main>
      <AIAssistant lang={lang} />
    </>
  );
}

export default App;
