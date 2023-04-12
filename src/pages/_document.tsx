import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

export default function MyDocument() {
  const getInitialProps = async (ctx: any) => {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  };

  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
