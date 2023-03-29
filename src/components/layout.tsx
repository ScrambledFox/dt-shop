import { createTheme, NextUIProvider } from "@nextui-org/react";
import { SSRProvider } from "@react-aria/ssr";

import Head from "next/head";
import Footer from "./footer";
import NavBar from "./navbar";

export const siteTitle = "ShapeShift - Control your Future";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#000",

      link: "#CBC9BD",
    },
    fonts: {
      heading: "Inter",
    },
  },
});

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps) {
  return (
    <SSRProvider>
      <NextUIProvider theme={theme}>
        <div className="flex flex-col min-h-screen bg-slate-100">
          <Head>
            <link rel="icon" href="/logo/logo.svg" />
            <meta name="title" content={siteTitle} />
            <meta
              name="description"
              content="Change yourself with the help of Shapeshift"
            />
          </Head>

          <NavBar />
          <main className="flex-1 w-2/3 mx-auto">{children}</main>
          <Footer />
        </div>
      </NextUIProvider>
    </SSRProvider>
  );
}
