import type { ReactNode } from "react";

export const LABEL_CLASS = "font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint";

const CONTROL_BASE =
  "w-full rounded-lg border bg-page px-3.5 py-3 text-[15px] text-ink outline-none transition placeholder:text-faint focus:bg-white focus:ring-0";

export function controlClass(hasError: boolean, extra = ""): string {
  const state = hasError ? "border-danger focus:border-danger" : "border-line focus:border-brand";
  return `${CONTROL_BASE} ${state} ${extra}`.trim();
}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  full?: boolean;
  children: ReactNode;
};

export function Field({ id, label, error, full, children }: FieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-[12.5px] text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
