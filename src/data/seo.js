import { Bio, projects } from "./constants";

/**
 * Site-wide SEO copy and structured-data helpers for the CRA SPA.
 * Meta tags that social crawlers need live in public/index.html;
 * keep titles/descriptions here in sync when updating that file.
 */

export const SITE_URL = Bio.siteUrl.replace(/\/$/, "");

export const defaultTitle =
  "John Oluwatosin Ekunola — Frontend Developer";

export const defaultDescription =
  "Portfolio of John Oluwatosin Ekunola (John Ekunola), a Frontend Developer building modern, responsive web apps with React, Next.js, TypeScript, and Tailwind CSS.";

export const ogImagePath = "/og-image.jpg";

/** Absolute OG image URL for Open Graph / Twitter. */
export const ogImageUrl = `${SITE_URL}${ogImagePath}`;

/**
 * Person + WebSite JSON-LD for Google (and Rich Results Test).
 * sameAs uses only social URLs already present in Bio.
 */
export function buildPersonWebsiteJsonLd() {
  const sameAs = [Bio.github, Bio.linkedin].filter(Boolean);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${Bio.fullName} — Portfolio`,
      alternateName: `${Bio.alternateName} Portfolio`,
      url: SITE_URL,
      description: defaultDescription,
      inLanguage: "en",
      publisher: {
        "@type": "Person",
        name: Bio.fullName,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: Bio.fullName,
      alternateName: Bio.alternateName,
      jobTitle: Bio.jobTitle,
      url: SITE_URL,
      image: `${SITE_URL}/john.jpg`,
      email: "ekunolajohn@gmail.com",
      description: Bio.description,
      sameAs,
      knowsAbout: [
        "Frontend Development",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "UI Engineering",
      ],
    },
  ];
}

/**
 * SoftwareSourceCode entries for projects that have enough real detail
 * (title, description, and at least one of github / webapp).
 */
export function buildProjectJsonLd() {
  return projects
    .filter(
      (project) =>
        project?.title &&
        project?.description &&
        (project.github || project.webapp)
    )
    .map((project) => {
      const entry = {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.description,
        author: {
          "@type": "Person",
          name: Bio.fullName,
          alternateName: Bio.alternateName,
          url: SITE_URL,
        },
        programmingLanguage: project.tags,
      };

      if (project.github) {
        entry.codeRepository = project.github;
      }
      if (project.webapp) {
        entry.url = project.webapp;
      }
      if (project.image) {
        entry.image = project.image;
      }

      return entry;
    });
}

export function buildAllJsonLd() {
  return [...buildPersonWebsiteJsonLd(), ...buildProjectJsonLd()];
}
