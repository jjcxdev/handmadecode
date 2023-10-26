import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        aurora: ["Aurora", "system-ui"],
        deco: ["Deco", "system-ui"],
        glock: ["Glock", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;
