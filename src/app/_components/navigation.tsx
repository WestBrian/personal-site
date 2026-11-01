"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  return (
    <>
      {[
        { href: "/", label: "About", active: pathname === "/" },
        {
          href: "/blog",
          label: "Blog",
          active: pathname === "/blog" || pathname.startsWith("/blog/"),
        },
      ].map(({ href, label, active }) => (
        <Link
          key={href}
          href={href}
          aria-current={active ? "page" : undefined}
          className="relative py-[9px] aria-[current=page]:text-ink aria-[current=page]:after:absolute aria-[current=page]:after:bottom-0 aria-[current=page]:after:left-[calc(50%-2px)] aria-[current=page]:after:h-1 aria-[current=page]:after:w-1 aria-[current=page]:after:rounded-full aria-[current=page]:after:bg-ink"
        >
          {label}
        </Link>
      ))}
    </>
  );
}
