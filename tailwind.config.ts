import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      blur: {
        sm: "2px",
        md: "4px",
        lg: "8px",
      },
      fontFamily: {
        aurora: [
          "aurora",
          '"Press Start 2P"',
          "system-ui",
          ...fontFamily.serif,
        ],
        deco: ["deco", "sans-serif", ...fontFamily.sans],
        glock: ["glock", "serif", ...fontFamily.serif],
        "press-start": ['"Press Start 2P"', "cursive"],
        silk: ["Silkscreen", "sans-serif", ...fontFamily.sans],
      },
      fontSize: {
        "2xs": "0.5rem",
        "3xs": "0.4rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
