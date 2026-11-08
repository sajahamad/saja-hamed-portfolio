import { useEffect, useId, useRef, useState } from "react";
import { FiChevronDown, FiDownload, FiFileText } from "react-icons/fi";
import Button from "./Button";
import { portfolioData } from "../../data/portfolioData";

const FORMATS = ["pdf", "docx"];

// "Download CV" button that lets the visitor pick PDF or Word.
// inline: render both formats as buttons (used where a popover would be clipped, e.g. the mobile menu).
function CVDownload({ lang, align = "center", inline = false, onSelect, className = "" }) {
  const { personal, ui } = portfolioData;
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setIsOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = () => {
    setIsOpen(false);
    onSelect?.();
  };

  if (inline) {
    return (
      <div className={`flex gap-2 ${className}`}>
        {FORMATS.map((format) => (
          <Button
            key={format}
            as="a"
            href={personal.cv[format]}
            download
            variant="outline"
            onClick={handleSelect}
            className="flex-1"
          >
            <FiDownload size={16} /> {ui.cvFormats[format][lang]}
          </Button>
        ))}
      </div>
    );
  }

  const menuPosition = {
    center: "left-1/2 -translate-x-1/2",
    end: "end-0",
  }[align];

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <Button
        type="button"
        variant="outline"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <FiDownload size={16} /> {ui.downloadCV[lang]}
        <FiChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          aria-label={ui.chooseCvFormat[lang]}
          className={`absolute top-full z-20 mt-2 w-48 rounded-xl border border-border bg-card/95 p-1.5 shadow-lg backdrop-blur-md ${menuPosition}`}
        >
          {FORMATS.map((format) => (
            <a
              key={format}
              role="menuitem"
              href={personal.cv[format]}
              download
              onClick={handleSelect}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-text transition-colors hover:bg-background hover:text-primary"
            >
              <FiFileText size={16} className="text-primary" aria-hidden="true" />
              {ui.cvFormats[format][lang]}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default CVDownload;
