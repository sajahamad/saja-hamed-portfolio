import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";

const LABEL = {
  toDark: { en: "Switch to dark mode", ar: "التبديل إلى الوضع الداكن" },
  toLight: { en: "Switch to light mode", ar: "التبديل إلى الوضع الفاتح" },
};

function ThemeToggle({ lang = "en", className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? LABEL.toLight[lang] || LABEL.toLight.en : LABEL.toDark[lang] || LABEL.toDark.en;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary ${className}`}
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}

export default ThemeToggle;
