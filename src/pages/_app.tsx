import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SSRProvider } from "react-aria";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
