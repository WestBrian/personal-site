"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "dark" ? "dark" : "light",
    );
  }, []);

  function toggleTheme() {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("bw-theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === null
          ? "Switch color theme"
          : `Switch to ${theme === "dark" ? "light" : "dark"} theme`
      }
      title="Switch theme"
      className="ml-[3px] grid h-[30px] w-[30px] place-items-center rounded-full border-0 bg-transparent hover:bg-button phone:-ml-[7px] phone:w-[25px]"
    >
      <Icon>
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </Icon>
    </button>
  );
}
