import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        aurora: ["aurora", "system-ui"],
        deco: ["deco", "system-ui"],
        glock: ["glock", "system-ui"],
      },
      fontSize: {
        "2xs": "0.5rem",
        "3xs": "0.4rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
