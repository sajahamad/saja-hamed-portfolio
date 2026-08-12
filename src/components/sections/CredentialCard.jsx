import { useState } from "react";
import { portfolioData } from "../../data/portfolioData";

function CredentialCard({ certification, lang, onOpen }) {
  const { name, issuer, description, image } = certification;
  const { imagePlaceholder } = portfolioData.ui;
  const [imageError, setImageError] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/5 bg-card/60 p-6 text-left backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
    >
      {image && !imageError ? (
        <img
          src={image}
          alt={name}
          className="h-44 w-full rounded-xl border border-white/10 bg-background/40 object-contain"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex h-44 items-center justify-center rounded-xl border border-dashed border-white/10 bg-background/60 text-xs text-muted">
          {imagePlaceholder[lang]}
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold text-text">{name}</h3>
        {issuer && <p className="mt-1 text-sm text-primary">{issuer}</p>}
      </div>

      {description[lang] && <p className="text-sm text-muted">{description[lang]}</p>}
    </button>
  );
}

export default CredentialCard;
