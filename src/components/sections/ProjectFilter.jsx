function ProjectFilter({ filters, activeFilter, onSelect, lang }) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Project filters">
      {filters.map((filter) => {
        const isActive = filter.value === activeFilter;
        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onSelect(filter.value)}
            aria-pressed={isActive}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-primary text-on-primary"
                : "border border-border text-muted hover:text-text"
            }`}
          >
            {filter.label[lang]}
          </button>
        );
      })}
    </div>
  );
}

export default ProjectFilter;
