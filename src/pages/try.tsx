import React, { useCallback, useEffect } from "react";

import Layout from "@/components/layout";
import Head from "next/head";
import Select, { ActionMeta, SingleValue } from "react-select";
import { Button, Card, Loading, Spacer } from "@nextui-org/react";

import OOCSI from "oocsi";
import { v4 as uuidv4 } from "uuid";

import ServiceData from "../data/service.json";
import { getIdFromResponse } from "@/utils/response";
import { useRouter } from "next/router";
import { generatePrompt, Goal, Strength } from "@/utils/prompt";

type ResponseType = "posts" | "steps";

type Answer = {
  type?: ResponseType;
  data?: string[];
};

type OOCSIResponse = {
  timestamp: number;
  sender: string;
  recipient: string;
  data: { text: string };
};

export default function Try() {
  const [clientHandle, setClientHandle] = React.useState<string>(uuidv4());
  const [answer, setAnswer] = React.useState<Answer | null>(null);
  const [prompting, setPrompting] = React.useState<boolean>(false);

  const [goal, setGoal] = React.useState<Goal>("skill");
  const [detail, setDetail] = React.useState<string>("");
  const [platform, setPlatform] = React.useState<string>("");
  const [strength, setStrength] = React.useState<Strength>(2);

  const router = useRouter();

  const reset = () => {
    setAnswer(null);
    setPrompting(false);
  };

  const sendPrompt = (prompt: string) => {
    OOCSI.send("callChatAPI", { input: prompt });
    setPrompting(true);
    console.log("Sent prompt: " + prompt);
  };

  const handleResponse = useCallback(
    (data: OOCSIResponse) => {
      console.log(data);

      const text = data.data.text;
      const id = getIdFromResponse(text);

      // Not our response
      console.log(id, clientHandle);
      if (id !== clientHandle) return;

      // Yes, we got our response
      setPrompting(false);
      setAnswer({
        data: data.data.text.split("\n"),
      });

      console.log("Received answer: " + JSON.stringify(data));
      console.log(answer);
    },
    [answer, clientHandle]
  );

  useEffect(() => {
    if (OOCSI.isConnected()) return;

    OOCSI.connect("wss://oocsi.id.tue.nl/ws", clientHandle);

    console.log(clientHandle);

    OOCSI.subscribe("returnChatAPI", (data: OOCSIResponse) => {
      handleResponse(data);
    });
  }, [answer, clientHandle, handleResponse]);

  const handleGoalChange = (
    newValue: SingleValue<{
      value: string;
      label: string;
    }>,
    actionMeta: ActionMeta<{
      value: string;
      label: string;
    }>
  ) => {
    setGoal(newValue?.value as Goal);
  };

  const handleDetailChange = (newValue: string) => {
    setDetail(newValue);
  };

  const handlePlatformChange = (
    newValue: SingleValue<{
      value: string;
      label: string;
    }>,
    actionMeta: ActionMeta<{
      value: string;
      label: string;
    }>
  ) => {
    setPlatform(newValue?.value as string);
  };

  const handleStrengthChange = (
    newValue: SingleValue<{
      value: number;
      label: string;
    }>,
    actionMeta: ActionMeta<{
      value: string;
      label: string;
    }>
  ) => {
    setStrength(newValue?.value as Strength);
  };

  return (
    <Layout>
      <Head>
        <title>{"ShapeShift - Try"}</title>
      </Head>
      <main>
        {!prompting && answer === null && (
          <>
            <div className="justify-center text-center">
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
                    onChange={handleGoalChange}
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
                  <Select className="flex-1" options={ServiceData.platforms} />
                </div>

                <div className="flex flex-row mt-4">
                  <label className="flex-1" htmlFor="strength">
                    {"How much do you want to enhance yourself?"}
                  </label>
                  <Select className="flex-1" options={ServiceData.strength} />
                </div>

                <Spacer y={2} />

                <div>
                  <Button
                    rounded
                    className="m-auto -z-0"
                    onClick={() =>
                      sendPrompt(
                        generatePrompt(
                          goal,
                          detail,
                          platform,
                          strength,
                          clientHandle
                        )
                      )
                    }
                  >
                    Become the real you 🚀
                  </Button>
                </div>

                <div></div>
              </form>
            </div>
          </>
        )}

        {prompting && answer === null && (
          <>
            <Spacer y={10} />
            <div className="w-full animate-fade-in justify-center text-center">
              <Loading size="xl">Transforming your life...</Loading>
            </div>
          </>
        )}

        {answer && (
          <>
            <div className="animate-fade-in flex flex-col">
              <div className=" text-center">
                <h1>{"Here are your results!"}</h1>
                <p>{""}</p>
              </div>
              <div>
                {answer.data?.map((text: string, index: number) => {
                  if (text === "" || index === 0) return;

                  return (
                    <Card key={index}>
                      <Card.Header>{"Post 1"}</Card.Header>
                      <Card.Body>{text}</Card.Body>
                    </Card>
                  );
                })}
              </div>
              <Spacer y={2} />
              <div className="flex-auto self-center">
                <Button light rounded bordered onPress={reset}>
                  {"Try again"}
                </Button>
                <Button rounded onPress={() => router.push("/pricing")}>
                  {"See our pricing"}
                </Button>
              </div>
              <Spacer y={2} />
            </div>
          </>
        )}
      </main>
    </Layout>
  );
}
