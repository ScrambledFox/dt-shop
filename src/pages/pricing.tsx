import Layout from "@/components/layout";
import PricingCard from "@/components/pricingcard";
import { Grid } from "@nextui-org/react";
import Head from "next/head";

import PricingData from "../data/pricing.json";

type CardProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Pricing() {
  return (
    <Layout>
      <Head>
        <title>{"ShapeShift - Pricing"}</title>
      </Head>
      <main className="h-full">
        <Grid.Container gap={2} justify="center">
          {PricingData.map((data, index) => (
            <Grid xs={12} sm={4} key={index}>
              <PricingCard
                title={data.title}
                description={data.description}
                price={data.price}
                isMostPopular={data.isMostPopular}
                features={data.features}
              />
            </Grid>
          ))}
        </Grid.Container>
      </main>
    </Layout>
  );
}
