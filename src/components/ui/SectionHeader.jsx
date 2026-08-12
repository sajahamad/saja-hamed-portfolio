function SectionHeader({ title, subtitle, className = "" }) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <h2 className="text-3xl font-bold text-text sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
