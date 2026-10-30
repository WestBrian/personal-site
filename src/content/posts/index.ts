import type { Post } from "./types";

export const posts: Post[] = [];

posts.sort((a, b) => b.date.localeCompare(a.date));

export function findPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
