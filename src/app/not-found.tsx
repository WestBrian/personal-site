import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[744px] py-[108px] phone:py-[73px]">
      <h1 className="mb-6 text-[44px] font-medium tracking-[-2px]">
        Page not found.
      </h1>
      <p className="mb-6 text-[16px] leading-[1.8] text-muted">
        This page does not exist. Head back to the blog to find your way.
      </p>
      <Link
        href="/blog"
        className="underline underline-offset-4 hover:text-accent"
      >
        Back to all writing
      </Link>
    </div>
  );
}
