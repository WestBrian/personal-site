import type { ComponentType } from "react";

export type Post = Readonly<{
  slug: string;
  title: string;
  description: string;
  date: string;
  minutes: number;
  category: string;
  Content: ComponentType;
}>;
