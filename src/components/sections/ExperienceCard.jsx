function ExperienceCard({ experience, lang }) {
  const { role, company, period, responsibilities, certificateImage } = experience;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-card/60 p-6 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-primary/40">
      <div>
        <h3 className="text-lg font-semibold text-text">{role[lang]}</h3>
        {company && <p className="text-sm text-primary">{company}</p>}
        {period[lang] && <p className="mt-1 text-xs text-muted">{period[lang]}</p>}
      </div>
      <ul className="flex flex-col gap-2 text-sm text-muted">
        {responsibilities.map((item) => (
          <li key={item.en} className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span>{item[lang]}</span>
          </li>
        ))}
      </ul>

      {certificateImage && (
        <img
          src={certificateImage}
          alt={role[lang]}
          className="mt-auto h-40 w-full rounded-xl border border-border bg-background/40 object-contain"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      )}
    </div>
  );
}

export default ExperienceCard;
