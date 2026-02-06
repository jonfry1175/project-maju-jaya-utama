import type { LocaleResource, NamespaceResource } from "./i18n-en";

const modules = import.meta.glob("../locales/id/*.json", { eager: true });

const toNamespaceResource = (moduleValue: unknown): NamespaceResource => {
  if (moduleValue && typeof moduleValue === "object" && "default" in moduleValue) {
    const defaultValue = (moduleValue as { default: unknown }).default;
    if (defaultValue && typeof defaultValue === "object") {
      return defaultValue as NamespaceResource;
    }
  }

  if (moduleValue && typeof moduleValue === "object") {
    return moduleValue as NamespaceResource;
  }

  return {};
};

const resources: LocaleResource = {};

for (const [path, moduleValue] of Object.entries(modules)) {
  const filename = path.split("/").pop();
  if (!filename) continue;
  const namespace = filename.replace(".json", "");
  resources[namespace] = toNamespaceResource(moduleValue);
}

export const idTranslations: LocaleResource = resources;
