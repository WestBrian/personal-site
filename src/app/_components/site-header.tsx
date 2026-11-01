import Link from "next/link";
import { Navigation } from "./navigation";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="flex h-[120px] items-center justify-between tablet:h-[100px] phone:h-[93px]">
      <Link
        href="/"
        aria-label="Brian West, home"
        className="flex items-center gap-[11px] text-[14px] font-[550] tracking-[-.3px] phone:gap-[9px] phone:text-[13px]"
      >
        <span
          aria-hidden="true"
          className="grid h-[29px] w-[29px] place-items-center rounded-[9px] border border-line text-[12px] font-semibold tracking-[-1px] phone:h-[26px] phone:w-[26px] phone:rounded-[8px] phone:text-[11px]"
        >
          bw
        </span>
        Brian West
      </Link>
      <nav
        aria-label="Main navigation"
        className="flex items-center gap-[30px] text-[13px] text-muted phone:gap-[21px] phone:text-[12px]"
      >
        <Navigation />
        <ThemeToggle />
      </nav>
    </header>
  );
}
