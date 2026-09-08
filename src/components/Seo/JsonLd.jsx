import { useEffect } from "react";
import { buildProjectJsonLd } from "../../data/seo";

const SCRIPT_ID = "portfolio-project-json-ld";

/**
 * Injects SoftwareSourceCode JSON-LD for projects.
 * Person + WebSite live statically in public/index.html for non-JS crawlers.
 */
function JsonLd() {
  useEffect(() => {
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      existing.remove();
    }

    const projects = buildProjectJsonLd();
    if (!projects.length) {
      return undefined;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "application/ld+json";
    script.text = JSON.stringify(projects);
    document.head.appendChild(script);

    return () => {
      const node = document.getElementById(SCRIPT_ID);
      if (node) {
        node.remove();
      }
    };
  }, []);

  return null;
}

export default JsonLd;
