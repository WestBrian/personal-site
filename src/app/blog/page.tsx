import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/posts";
import { Arrow, Icon } from "../_components/icons";
import { PostRow } from "../_components/post-row";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on frontend, the web, and the details in between.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-[744px] tablet:max-w-[620px]">
      <header className="pb-[60px] pt-[108px] wide:pt-[135px] tablet:pt-20 phone:pb-[45px] phone:pt-[73px]">
        <p className="mb-6 text-[12px] text-muted phone:text-[11px]">
          The blog
        </p>
        <h1 className="mb-[23px] text-[52px] font-medium leading-[1.15] tracking-[-2.7px] phone:text-[44px] phone:tracking-[-2.2px]">
          Thinking out loud.
        </h1>
        <p className="max-w-[470px] text-[17px] leading-[1.8] text-muted phone:text-[16px]">
          A place for notes on frontend, the web,
          <br />
          and the details in between.
        </p>
      </header>
      {posts.length > 0 ? (
        <>
          <div className="flex justify-between pb-[21px] text-[11px] text-soft phone:text-[10px]">
            <span>All writing</span>
            <span>{posts[0]?.date.slice(0, 4)}</span>
          </div>
          {posts.map((post) => (
            <PostRow key={post.slug} post={post} variant="full" />
          ))}
        </>
      ) : (
        <section className="border-t border-line py-[68px] phone:py-12">
          <Icon className="mb-6 h-7 w-7 text-soft">
            <rect x="5" y="3" width="15" height="18" rx="2" />
            <path d="M9 3v18M3 7h4M3 12h4M3 17h4m5-9h5m-5 4h4" />
          </Icon>
          <h2 className="mb-3 text-[23px] font-medium tracking-[-.7px] phone:text-[21px]">
            No posts yet.
          </h2>
          <p className="max-w-[360px] text-[15px] leading-[1.85] text-muted phone:text-[14px]">
            The first post is still to come. Thanks for stopping by.
          </p>
          <Link
            href="/"
            className="mt-7 inline-flex items-center gap-[9px] text-[12px] text-muted hover:text-ink"
          >
            A little about me <Arrow className="h-[13px] w-[13px]" />
          </Link>
        </section>
      )}
    </div>
  );
}
