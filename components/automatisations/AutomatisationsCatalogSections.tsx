import { AutomationCard } from "@/components/catalog/AutomationCard";
import { CATALOG_CATEGORY_ANSWER } from "@/lib/automatisations-catalog-pricing";
import { CATEGORIES, categoryToAnchor, getByCategory } from "@/lib/automations-catalog";

export function AutomatisationsCatalogSections() {
  const renderedIds = new Set<string>();

  return (
    <div>
      {CATEGORIES.map((category) => {
        const items = getByCategory(category).filter((automation) => {
          if (renderedIds.has(automation.id)) return false;
          renderedIds.add(automation.id);
          return true;
        });
        if (items.length === 0) return null;
        return (
          <section
            key={category}
            id={categoryToAnchor(category)}
            className="mx-auto max-w-content scroll-mt-28 pb-16"
          >
            <div className="mb-6 flex items-center gap-4">
              <h2 className="font-heading text-lg font-bold text-text">{category}</h2>
              <div className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs text-faint">
                {items.length} automatisation{items.length > 1 ? "s" : ""}
              </span>
            </div>
            {CATALOG_CATEGORY_ANSWER[category] ? (
              <p className="mb-6 max-w-readable text-sm leading-relaxed text-text">
                {CATALOG_CATEGORY_ANSWER[category]}
              </p>
            ) : null}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {items.map((automation) => (
                <div key={automation.id} className="animate-on-scroll">
                  <AutomationCard {...automation} />
                </div>
              ))}
              {items.length % 2 !== 0 ? <div aria-hidden="true" className="hidden md:block" /> : null}
            </div>
          </section>
        );
      })}
    </div>
  );
}
