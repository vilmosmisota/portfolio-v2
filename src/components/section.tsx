export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="pt-0.5 text-xs font-semibold tracking-[0.11em] text-muted uppercase">{children}</h2>
  );
}

export function Section({
  id,
  label,
  children,
}: {
  id?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mt-20 grid scroll-mt-8 gap-4 border-t border-rule pt-6 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
    >
      <SectionLabel>{label}</SectionLabel>
      <div>{children}</div>
    </section>
  );
}
