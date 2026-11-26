"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
    >
      Print / Save as PDF
    </button>
  );
}
