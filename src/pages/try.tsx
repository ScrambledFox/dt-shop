import React from "react";

import Layout from "@/components/layout";
import Head from "next/head";
import Select from "react-select";
import { Button, Spacer } from "@nextui-org/react";

import ServiceData from "../data/service.json";

export default function Try() {
  return (
    <Layout>
      <Head>
        <title>{"ShapeShift - Try"}</title>
      </Head>
      <main>
        <div className=" justify-center text-center">
          <h1>{"Try out the ShapeShift service!"}</h1>
          <p>
            {
              "To let you try out all of features the 'ShapeShift Transformation Service™' has to offer, you will need to experience it."
            }
          </p>
        </div>
        <Spacer y={2} />
        <div>
          <form>
            {/* <label className="text-2xl mr-4" htmlFor="name">
              Name
            </label>
            <input
              className="rounded-xl p-2 focus:p-3 transition-all duration-300"
              type="text"
              id="name"
              name="name"
            /> */}

            <div className="flex flex-row mt-4">
              <label className="flex-1" htmlFor="goal">
                {"How do you want to enhance yourself?"}
              </label>
              <Select
                className="flex-1"
                options={ServiceData.goals}
                classNames={{}}
              />
            </div>

            <div className="flex flex-row mt-4">
              <label className="flex-1" htmlFor="skill">
                {"What skill do you want to enhance?"}
              </label>
              <input
                className="ml-4 flex-1 rounded-xl p-2 border-2 border-opacity-0 border-sky-600 focus:border-opacity-100 transition-all duration-100 ease-in-out"
                type={"text"}
              />
            </div>

            <div className="flex flex-row mt-4">
              <label className="flex-1" htmlFor="skill">
                {
                  "For what social media platform do you want to create content?"
                }
              </label>
              <Select
                className="flex-1"
                options={ServiceData.platforms}
                classNames={{}}
              />
            </div>

            <Spacer y={2} />

            <div>
              <Button rounded className="m-auto -z-0">
                Generate 🚀
              </Button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}
