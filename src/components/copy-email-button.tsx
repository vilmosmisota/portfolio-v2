"use client";

import { useEffect, useRef, useState } from "react";

const CONFIRMATION_MS = 1800;

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard access can be denied (permissions, insecure context); the mail client reaches the same address.
      window.location.href = `mailto:${email}`;
      return;
    }
    setCopied(true);
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopied(false), CONFIRMATION_MS);
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-label="Copy email address"
      className="inline-flex h-10 items-center rounded-full bg-ink px-5 text-sm font-medium text-canvas transition-transform duration-150 ease-out active:scale-[0.97]"
    >
      {/* Both labels share one grid cell so the pill never changes width. */}
      <span aria-hidden className="grid">
        <Label visible={!copied}>Copy email</Label>
        <Label visible={copied}>Copied</Label>
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </button>
  );
}

function Label({ visible, children }: { visible: boolean; children: React.ReactNode }) {
  return (
    <span
      className={`col-start-1 row-start-1 text-center transition-[opacity,filter,transform] duration-200 ease-out motion-reduce:transform-none ${
        visible ? "opacity-100 blur-none" : "translate-y-1 opacity-0 blur-[2px]"
      }`}
    >
      {children}
    </span>
  );
}
