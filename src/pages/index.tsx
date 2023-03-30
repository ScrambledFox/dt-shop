import Head from "next/head";

import Layout, { siteTitle } from "@/components/layout";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className="h-full w-full">
        <div className="h-full w-full flex flex-row gap-8 mt-auto mb-auto">
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="text-4xl text-slate-800">
              {"we understand that managing online presence is difficult"}
            </h2>
            <span className="border-t-2 border-slate-700 mt-2" />
            <h1 className="text-6xl font-semibold text-slate-900 mt-2">
              {"We'll handle that"}
            </h1>
            <p className="mt-4 text-justify">
              {
                "Your online presence is crucial for professional success. Whether you're a business owner, entrepreneur, or job seeker, having a strong digital profile can make all the difference. That's where we come in. Our team of experts is here to help you improve your digital profile, so you can showcase your skills, expertise, and achievements in the best possible way. With our tailored digital profile improvement services, we aim to empower you to achieve your career goals and stand out in the digital crowd."
              }
            </p>
            <div
              id="buttons"
              className="flex flex-row gap-4 mt-4 justify-center"
            >
              <Button href="#" light bordered rounded auto>
                {"Learn more"}
              </Button>
              <Button
                color={"primary"}
                rounded
                onClick={() => router.push("/try")}
              >
                {"Get started"}
              </Button>
            </div>
          </div>
          <Image
            className=" flex-1 select-none"
            width={500}
            height={500}
            src={"/front-cropped.png"}
            alt="Woman looking over the beach with her dog."
          />
        </div>
      </main>
    </Layout>
  );
}
