import Head from "next/head";
import Footer from "./footer";
import NavBar from "./navbar";

export const siteTitle = "DigiChange Shop";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-screen h-screen bg-gradient-texture">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={siteTitle} />
        <meta
          name="description"
          content="Change yourself with the help of DigiChange"
        />
      </Head>

      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
