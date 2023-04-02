import React from "react";

import Layout from "../components/layout";
import Head from "next/head";
import { Spacer } from "@nextui-org/react";

export type Article = {
  title: string;
  author: string;
  date: string;
  body: [];
};

export default function Article({ article }: { article: Article }) {
  return (
    <Layout>
      <Head>
        <title>{"ShapeShift - Article"}</title>
      </Head>
      <main>
        <h1>{article.title}</h1>
        <div>
          {article.body.map((part: any, index: number) => {
            return (
              <p className="mt-4" key={index}>
                {part.content}
              </p>
            );
          })}
        </div>
        <Spacer y={4} />
      </main>
    </Layout>
  );
}
