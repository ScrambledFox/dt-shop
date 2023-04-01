import React from "react";

import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";

export default function Culture() {
  return (
    <Layout>
      <Head>
        <title>{"ShapeShift - Culture"}</title>
      </Head>
      <main>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl ml-4">{"Our Culture"}</h1>
          <p>
            {
              "At ShapeShift©, we care about your future. That's why we focus our minds to be able to create a better future for you. We foster a company culture that is innovative, collaborative, and customer-centric. We believe that by leveraging cutting-edge technology and the power of data, we can transform the way businesses operate and deliver real value to our clients."
            }
          </p>
          <p>
            {
              "Our team is composed of talented individuals who are passionate about their work and dedicated to driving meaningful change. We encourage an open and inclusive environment where everyone's ideas are valued and respected, and collaboration is key to achieving our goals. We also prioritize a healthy work-life balance, offering flexible scheduling and remote work options to ensure our team members can maintain their well-being while delivering high-quality work."
            }
          </p>
          <p>
            {
              "Most importantly, we place our clients at the center of everything we do. We strive to understand their unique needs and challenges, and work closely with them to develop customized solutions that address their specific business requirements. By combining our expertise with our clients' domain knowledge, we can create digital twin data transformations that drive tangible results and help them achieve their goals."
            }
          </p>
        </div>
        <Image
          src={"/logo/logo-black.png"}
          alt="logo"
          width={500}
          height={500}
          className={"mx-auto"}
        />
      </main>
    </Layout>
  );
}
