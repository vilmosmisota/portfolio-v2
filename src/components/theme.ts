export const THEME_STORAGE_KEY = "theme";

type Theme = "light" | "dark";

/*
 * Runs inline in <head> before first paint so a stored or system preference never flashes
 * the wrong palette. Kept as a string because it must execute before any bundle loads.
 */
export const themeBootScript = `(() => {
  let theme;
  try { theme = localStorage.getItem("${THEME_STORAGE_KEY}"); } catch {}
  if (theme !== "light" && theme !== "dark") {
    theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.dataset.theme = theme;
})();`;

export function toggleTheme() {
  const root = document.documentElement;
  const next: Theme = root.dataset.theme === "dark" ? "light" : "dark";

  root.setAttribute("data-theme-switching", "");
  root.dataset.theme = next;
  // Let the new palette paint without transitions before handing control back to CSS.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => root.removeAttribute("data-theme-switching"));
  });

  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Storage can be blocked (private mode, site data off); the theme still applies for this visit.
  }
}
