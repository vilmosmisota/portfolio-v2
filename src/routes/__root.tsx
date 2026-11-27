import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { themeBootScript } from "@/components/theme";
import stylesUrl from "@/styles.css?url";

const SITE_URL = "https://vilmosmisota.co.uk";
const TITLE = "Vilmos Misota";
const DESCRIPTION =
  "Software developer in Edinburgh who brings taste and curiosity to the work, and the builder of Zeelio.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: `${SITE_URL}/og-portrait.jpg` },
      { name: "twitter:card", content: "summary" },
      { name: "theme-color", content: "#f5f4f0", media: "(prefers-color-scheme: light)" },
      { name: "theme-color", content: "#0c0f12", media: "(prefers-color-scheme: dark)" },
    ],
    links: [
      { rel: "stylesheet", href: stylesUrl },
      { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
      { rel: "canonical", href: SITE_URL },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    // The boot script sets data-theme before hydration, so the attribute legitimately differs.
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
