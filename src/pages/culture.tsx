import React from "react";

import Layout from "@/components/layout";
import Head from "next/head";

export default function Culture() {
  return (
    <Layout>
      <Head>
        <title>{"ShapeShift - Culture"}</title>
      </Head>
      <main>
        <h1 className="text-5xl">{"Culture"}</h1>
      </main>
    </Layout>
  );
}
