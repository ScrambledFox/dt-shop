import { createTheme, NextUIProvider, Spacer } from "@nextui-org/react";
import { SSRProvider } from "@react-aria/ssr";

import Head from "next/head";
import { Component, ReactNode } from "react";
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
        <div className="min-h-screen w-screen">
          <Spacer y={8} />
          <main className="h-2/3 w-2/3 flex-1 mx-auto">{children}</main>
        </div>
        <Footer />
      </div>
    </NextUIProvider>
  );
}
