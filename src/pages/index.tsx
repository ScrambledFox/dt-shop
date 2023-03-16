import Head from "next/head";
import { Inter } from "next/font/google";

import Layout, { siteTitle } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <p className="underline">testing</p>
      </main>
    </Layout>
  );
}
