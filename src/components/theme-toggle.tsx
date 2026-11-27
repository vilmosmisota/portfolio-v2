"use client";

import { toggleTheme } from "./theme";

/*
 * Both icons are always rendered and CSS picks one from `data-theme`, so the server render
 * never has to guess the visitor's theme and there is nothing to hydrate.
 */
export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch between light and dark theme"
      className="group relative grid size-9 place-items-center rounded-full text-ink-soft transition-[color,transform,background-color] duration-150 ease-out hover:bg-accent-tint hover:text-ink active:scale-[0.94]"
    >
      <SunIcon className="col-start-1 row-start-1 transition-[opacity,transform,filter] duration-200 ease-out dark:scale-50 dark:-rotate-45 dark:opacity-0 dark:blur-[2px] motion-reduce:transform-none" />
      <MoonIcon className="col-start-1 row-start-1 scale-50 rotate-45 opacity-0 blur-[2px] transition-[opacity,transform,filter] duration-200 ease-out dark:scale-100 dark:rotate-0 dark:opacity-100 dark:blur-none motion-reduce:transform-none" />
    </button>
  );
}

function SunIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden data-theme-icon className={className}>
      <circle cx="10" cy="10" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 2.5v1.5M10 16v1.5M2.5 10H4M16 10h1.5M4.7 4.7l1.06 1.06M14.24 14.24l1.06 1.06M4.7 15.3l1.06-1.06M14.24 5.76l1.06-1.06"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden data-theme-icon className={className}>
      <path
        d="M16.25 11.9A6.5 6.5 0 0 1 8.1 3.75a6.5 6.5 0 1 0 8.15 8.15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
