import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      wide: "1500px",
      tablet: { max: "800px" },
      phone: { max: "550px" },
    },
    extend: {
      colors: {
        background: "var(--bg)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        soft: "var(--soft)",
        line: "var(--line)",
        accent: "var(--accent)",
        wash: "var(--wash)",
        button: "var(--button)",
        headline: "var(--headline)",
      },
      fontFamily: { sans: ["var(--font-inter)", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
