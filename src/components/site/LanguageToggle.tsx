import { languages, useLanguage } from "../../i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className={
        "inline-flex shrink-0 rounded-full border border-border bg-surface p-0.5 " + className
      }
    >
      {languages.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            lang={l.code}
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            title={l.name}
            className={
              "rounded-full px-3 py-1 text-xs font-semibold transition-colors " +
              (active
                ? "bg-secondary text-secondary-foreground"
                : "text-muted-foreground hover:text-foreground")
            }
          >
            {t(`lang.${l.code}`)}
          </button>
        );
      })}
    </div>
  );
}
