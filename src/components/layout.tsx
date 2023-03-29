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
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-sky-50 to-violet-100">
        <Head>
          <link rel="icon" href="/favicon.ico" />
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
    </SSRProvider>
  );
}

// width: 60vw;
// margin: 0 auto;
