import type { ReactNode } from "react";

export function Icon({
  children,
  className = "h-[17px] w-[17px]",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function Arrow({
  back = false,
  className = "h-[17px] w-[17px]",
}: {
  back?: boolean;
  className?: string;
}) {
  return (
    <Icon className={className}>
      <path d={back ? "M19 12H5m5-5-5 5 5 5" : "M5 12h14m-5-5 5 5-5 5"} />
    </Icon>
  );
}
