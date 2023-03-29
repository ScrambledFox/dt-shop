import Layout from "@/components/layout";
import PricingCard from "@/components/pricingcard";
import { Grid } from "@nextui-org/react";
import Head from "next/head";

import PricingData from "../data/pricing.json";

type CardProps = {
  children: JSX.Element | JSX.Element[];
};

const Card = ({ children }: CardProps) => {
  return (
    <Grid xs={8} md={4}>
      {children}
    </Grid>
  );
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
            <Card key={index}>
              <PricingCard
                title={data.title}
                description={data.description}
                price={data.price}
                isMostPopular={data.isMostPopular}
                features={data.features}
              />
            </Card>
          ))}
        </Grid.Container>
      </main>
    </Layout>
  );
}
