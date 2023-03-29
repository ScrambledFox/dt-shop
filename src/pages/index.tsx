import Head from "next/head";
import { Inter } from "next/font/google";

import Layout, { siteTitle } from "@/components/layout";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <div className="flex flex-row mt-24 mb-28">
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="text-4xl text-sky-900">
              {"we understand that managing online presence is difficult"}
            </h2>
            <span className="border-t-2 border-sky-800" />
            <h1 className="text-6xl text-sky-700">{"We'll handle that"}</h1>
            <p className="mt-4">
              {
                "Your online presence is crucial for professional success. Whether you're a business owner, entrepreneur, or job seeker, having a strong digital profile can make all the difference. That's where we come in. Our team of experts is here to help you improve your digital profile, so you can showcase your skills, expertise, and achievements in the best possible way. With our tailored digital profile improvement services, we aim to empower you to achieve your career goals and stand out in the digital crowd."
              }
            </p>
            <div
              id="buttons"
              className="flex flex-row gap-4 mt-4 justify-center"
            >
              <Button href="#" light rounded>
                Learn more
              </Button>
              <Button href="#" bordered rounded>
                Try for free
              </Button>
            </div>
          </div>
          <Image
            className="flex-1"
            width={200}
            height={200}
            src={"/media/front.png"}
            alt="Woman looking over the beach with her dog."
          />
        </div>
      </main>
    </Layout>
  );
}
