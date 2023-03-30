import React from "react";

import Layout from "@/components/layout";
import Head from "next/head";

import TeamData from "../data/team.json";
import ProfileCard from "@/components/profilecard";
import { Grid } from "@nextui-org/react";

export default function Team() {
  return (
    <Layout>
      <Head>
        <title>{"ShapeShift - Team"}</title>
      </Head>
      <main className="mb-8">
        <Grid.Container gap={2} justify="center">
          {TeamData.map((data, index) => {
            return (
              <Grid xs={12} sm={4} key={index}>
                <ProfileCard
                  name={data.name}
                  role={data.role}
                  image={data.image}
                  description={data.description}
                  portfolio={data.portfolio}
                />
              </Grid>
            );
          })}
        </Grid.Container>
      </main>
    </Layout>
  );
}
