import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";
import Container from "../ui/Container";
import Button from "../ui/Button";

function Navbar({ lang, onToggleLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { nav, navCTA, personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <div className="flex items-center gap-2.5">
          <div className="group relative">
            <div
              tabIndex={0}
              className="h-8 w-8 overflow-hidden rounded-full border border-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:h-9 md:w-9"
            >
              <img
                src={personal.avatar}
                alt={personal.avatarTooltip[lang]}
                className="h-full w-full origin-[34%_36%] scale-[2] object-cover object-[34%_36%]"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
            <span
              role="tooltip"
              className="pointer-events-none absolute start-0 top-full z-10 mt-2 w-max max-w-[200px] rounded-lg border border-white/10 bg-card/95 px-3 py-1.5 text-xs font-medium text-text opacity-0 shadow-lg backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
            >
              {personal.avatarTooltip[lang]}
            </span>
          </div>
          <a href="#home" className="text-lg font-bold tracking-tight text-text">
            {personal.logo[lang]}
          </a>
        </div>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-muted transition-colors hover:text-text"
            >
              {item.label[lang]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitcher lang={lang} onToggleLang={onToggleLang} />
          <Button as="a" href="#contact" variant="primary">
            {navCTA[lang]}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-text lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden bg-background/95 backdrop-blur-md transition-[grid-template-rows] duration-300 lg:hidden ${
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className="rounded-md px-2 py-3 text-base font-medium text-muted transition-colors hover:bg-card hover:text-text"
              >
                {item.label[lang]}
              </a>
            ))}

            <div className="mt-3 flex items-center justify-between gap-4 border-t border-white/5 pt-4">
              <LangSwitcher lang={lang} onToggleLang={onToggleLang} />
              <Button
                as="a"
                href="#contact"
                variant="primary"
                onClick={closeMenu}
                className="flex-1 justify-center"
              >
                {navCTA[lang]}
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}

function LangSwitcher({ lang, onToggleLang }) {
  return (
    <div className="flex items-center gap-1 text-sm font-medium" role="group" aria-label="Language switcher">
      <button
        type="button"
        onClick={() => onToggleLang("ar")}
        className={lang === "ar" ? "text-text" : "text-muted hover:text-text"}
        aria-pressed={lang === "ar"}
      >
        AR
      </button>
      <span className="text-muted/40">|</span>
      <button
        type="button"
        onClick={() => onToggleLang("en")}
        className={lang === "en" ? "text-text" : "text-muted hover:text-text"}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}

export default Navbar;
