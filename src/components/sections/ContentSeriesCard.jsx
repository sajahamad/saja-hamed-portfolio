import { useState } from "react";
import Button from "../ui/Button";
import { portfolioData } from "../../data/portfolioData";

function ContentSeriesCard({ series, lang }) {
  const { titleAr, titleEn, description, topics, badge, image, reels } = series;
  const { contentSeriesUi } = portfolioData.ui;
  const { imagePlaceholder } = portfolioData.ui;
  const [imageError, setImageError] = useState(false);
  const titleParts = lang === "ar" ? [titleAr, titleEn] : [titleEn, titleAr];

  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/5 bg-card/60 p-6 backdrop-blur-md transition-all duration-200 hover:-translate-y-1">
      <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        {badge[lang]}
      </span>

      <div>
        <h3 className="text-xl font-semibold text-text">
          {titleParts.filter(Boolean).join(" — ")}
        </h3>
        <p className="mt-2 text-sm text-muted">{description[lang]}</p>
      </div>

      {imageError ? (
        <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-white/10 bg-background/60 text-xs text-muted">
          {imagePlaceholder[lang]}
        </div>
      ) : (
        <img
          src={image}
          alt={titleParts.filter(Boolean).join(" — ")}
          className="h-64 w-full rounded-xl border border-white/10 bg-background/40 object-contain"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      )}

      {topics.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <li key={topic.en} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
              {topic[lang]}
            </li>
          ))}
        </ul>
      )}

      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          {contentSeriesUi.watchClips[lang]}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {reels.map((reelUrl, index) => (
            <a
              key={reelUrl}
              href={reelUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-text transition-colors hover:border-primary hover:text-primary"
            >
              {index + 1}
            </a>
          ))}
        </div>
      </div>

      <Button as="a" href={contentSeriesUi.profileUrl} target="_blank" rel="noreferrer" variant="outline" className="w-fit">
        {contentSeriesUi.watchMore[lang]}
      </Button>
    </div>
  );
}

export default ContentSeriesCard;
