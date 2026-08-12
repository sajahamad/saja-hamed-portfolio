import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import Button from "../ui/Button";
import { portfolioData } from "../../data/portfolioData";

function CredentialImage({ certification, lang }) {
  const [imageError, setImageError] = useState(false);
  const { imagePlaceholder } = portfolioData.ui;

  if (!certification.image || imageError) {
    return (
      <div className="mt-4 flex h-56 items-center justify-center rounded-xl border border-dashed border-white/10 bg-background/60 text-sm text-muted">
        {imagePlaceholder[lang]}
      </div>
    );
  }

  return (
    <img
      src={certification.image}
      alt={certification.name}
      className="mt-4 w-full rounded-xl object-contain"
      onError={() => setImageError(true)}
    />
  );
}

function CredentialModal({ certification, lang, onClose }) {
  const shouldReduceMotion = useReducedMotion();
  const titleId = useId();
  const closeButtonRef = useRef(null);
  const { credentialUi } = portfolioData.ui;

  useEffect(() => {
    if (!certification) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [certification, onClose]);

  return (
    <AnimatePresence>
      {certification && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 bg-card/90 p-6 backdrop-blur-md sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id={titleId} className="text-xl font-semibold text-text">
                  {certification.name}
                </h2>
                {certification.issuer && (
                  <p className="mt-1 text-sm text-primary">{certification.issuer}</p>
                )}
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label={credentialUi.closeLabel[lang]}
                className="shrink-0 rounded-md p-2 text-muted transition-colors hover:text-text"
              >
                <HiX size={20} />
              </button>
            </div>

            <CredentialImage key={certification.name} certification={certification} lang={lang} />

            {certification.description[lang] && (
              <p className="mt-4 text-text">{certification.description[lang]}</p>
            )}

            {certification.credentialUrl && (
              <div className="mt-6 border-t border-white/5 pt-5">
                <Button as="a" href={certification.credentialUrl} target="_blank" rel="noreferrer" variant="primary">
                  <FiExternalLink size={16} /> {credentialUi.viewCredential[lang]}
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CredentialModal;
