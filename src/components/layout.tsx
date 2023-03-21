import { SSRProvider } from "@react-aria/ssr";

import Head from "next/head";
import Footer from "./footer";
import NavBar from "./navbar";

export const siteTitle = "ShapeShift - Control your Future";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps) {
  return (
    <SSRProvider>
      <div className="w-screen h-screen bg-gradient-texture">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content={siteTitle} />
          <meta
            name="description"
            content="Change yourself with the help of Shapeshift"
          />
        </Head>

        <NavBar />
        <main className="w-2/3 mx-auto">{children}</main>
        <Footer />
      </div>
    </SSRProvider>
  );
}

// width: 60vw;
// margin: 0 auto;
