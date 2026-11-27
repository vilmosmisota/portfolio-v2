import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
        // Linked files (the CV) are served as-is from public/; crawling them rewrites their bytes.
        filter: ({ path }) => !/\.[a-z0-9]+$/i.test(path),
      },
    }),
    // TanStack Start must run before the React plugin.
    viteReact(),
  ],
});
