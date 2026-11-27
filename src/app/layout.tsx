import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { themeBootScript } from "@/components/theme";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  axes: ["opsz"],
});

const SITE_URL = "https://vilmosmisota.co.uk";
const TITLE = "Vilmos Misota";
const DESCRIPTION =
  "Software developer in Edinburgh who builds across the stack with taste and creativity, and the builder of Zeelio.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: { icon: { url: "/icon.svg", type: "image/svg+xml" } },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og-portrait.jpg", width: 1200, height: 1200 }],
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f4f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0f12" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The boot script sets data-theme before hydration, so the attribute legitimately differs.
    <html lang="en-GB" className={`${inter.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
