import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import "@fontsource/press-start-2p";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
