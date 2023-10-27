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
    },
  },
  plugins: [],
} satisfies Config;
