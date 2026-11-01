import Link from "next/link";
import type { Post } from "@/content/posts/types";
import { Arrow } from "./icons";

export function PostRow({
  post,
  variant = "compact",
}: {
  post: Post;
  variant?: "compact" | "full";
}) {
  const full = variant === "full";
  const Heading = full ? "h2" : "h3";
  const date = new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group grid grid-cols-[1fr_auto] items-center gap-[25px] border-t border-line phone:items-start phone:gap-5 ${full ? "py-8 phone:py-[27px]" : "py-[26px] phone:py-[23px]"}`}
    >
      <div>
        <Heading
          className={`font-medium tracking-[-.25px] group-hover:text-accent ${full ? "mb-3 text-[18px] leading-[1.5] phone:text-[17px] phone:leading-[1.6]" : "mb-[9px] text-[15px] leading-[1.5] phone:text-[14px] phone:leading-[1.6]"}`}
        >
          {post.title}
        </Heading>
        <p
          className={`text-muted ${full ? "max-w-[480px] text-[14px] leading-[1.8] phone:text-[13px]" : "text-[12px] leading-[1.65] phone:text-[11px] phone:leading-[1.8]"}`}
        >
          {post.description}
        </p>
      </div>
      <div
        className={`flex items-center gap-4 whitespace-nowrap text-[11px] text-muted tablet:gap-[10px] phone:pt-[5px] ${full ? "self-start pt-[5px]" : ""}`}
      >
        <time dateTime={post.date} className="phone:hidden">
          {date}
        </time>
        <Arrow className="h-[14px] w-[14px] text-soft" />
      </div>
    </Link>
  );
}
