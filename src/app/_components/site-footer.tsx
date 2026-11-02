import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-[95px] flex max-w-[744px] items-center justify-between border-t border-line pb-[38px] pt-[27px] text-[11px] text-muted wide:mt-[115px] tablet:mt-[75px] tablet:max-w-[620px] phone:mt-[65px] phone:items-start phone:gap-[25px] phone:pb-[30px] phone:pt-[24px] phone:text-[10px]">
      <span className="text-soft phone:max-w-[135px] phone:leading-[1.8]">
        © 2026 Brian West
        <span className="before:mx-1.5 before:content-['·'] phone:mt-1 phone:block phone:before:content-none">
          Made for the web.
        </span>
      </span>
      <div className="flex gap-[23px] phone:flex-wrap phone:justify-end phone:gap-[16px]">
        <Link href="/" className="hover:text-ink">
          About
        </Link>
        <Link href="/blog" className="hover:text-ink">
          Blog
        </Link>
      </div>
    </footer>
  );
}
