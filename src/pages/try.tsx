import React, { useCallback, useEffect, useState } from "react";

import Layout from "@/components/layout";
import Head from "next/head";
import Select, { ActionMeta, SingleValue } from "react-select";
import { Button, Card, Grid, Loading, Spacer } from "@nextui-org/react";

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
  const [clientHandle, setClientHandle] = useState<string>(uuidv4());
  const [answer, setAnswer] = useState<Answer | null>(null);

  const [goal, setGoal] = useState<Goal>("skill");
  const [detail, setDetail] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [strength, setStrength] = useState<Strength>(2);

  const [lastPrompt, setLastPrompt] = useState<string | null>(null);

  const router = useRouter();

  const reset = useCallback(() => {
    setAnswer(null);
    setLastPrompt(null);
  }, []);

  const sendPrompt = async (prompt: string) => {
    await setLastPrompt(prompt);
    console.log(prompt);
    OOCSI.send("callChatAPI", { input: prompt });
  };

  const rerouteToServiceDown = (
    data: OOCSIResponse | null,
    prompt: string | null
  ) => {
    console.log("Prompt", prompt);

    setTimeout(() => {
      router.push({
        pathname: "/service-down",
        query: {
          prompt: JSON.stringify(prompt),
          taskHandleId: clientHandle,
          receivedMessage: JSON.stringify(data),
        },
      });
    }, 5000);
  };

  const handleResponse = (data: OOCSIResponse) => {
    console.log(data, lastPrompt);

    const text = data.data.text;
    const receivedTaskId = getIdFromResponse(text);

    if (text === undefined) {
      rerouteToServiceDown(data, (" " + lastPrompt).slice(1));
    }

    // Not our response
    if (receivedTaskId !== clientHandle) return;

    // Yes, we got our response
    setLastPrompt(null);

    setAnswer({
      data: data.data.text.split("\n"),
    });

    console.log("Received answer: " + JSON.stringify(data));
  };

  useEffect(() => {
    if (OOCSI.isConnected()) return;

    OOCSI.connect("wss://oocsi.id.tue.nl/ws", clientHandle);
    OOCSI.subscribe("returnChatAPI", (data: OOCSIResponse) => {
      handleResponse(data);
    });
  });

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

  const handleDetailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDetail(e.currentTarget.value);
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
      value: string;
      label: string;
    }>,
    actionMeta: ActionMeta<{
      value: string;
      label: string;
    }>
  ) => {
    if (newValue === null) return;
    const str = parseInt(newValue.value);
    setStrength(str as Strength);
  };

  return (
    <Layout>
      <Head>
        <title>{"ShapeShift - Try"}</title>
      </Head>
      <main>
        {lastPrompt === null && answer === null && (
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
                    onChange={handleDetailChange}
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
                    onChange={handlePlatformChange}
                  />
                </div>

                <div className="flex flex-row mt-4">
                  <label className="flex-1" htmlFor="strength">
                    {"How much do you want to enhance yourself?"}
                  </label>
                  <Select
                    className="flex-1"
                    options={ServiceData.strength}
                    onChange={handleStrengthChange}
                  />
                </div>

                <Spacer y={2} />

                <div>
                  <Button
                    rounded
                    className="m-auto -z-0"
                    onClick={() => {
                      sendPrompt(
                        generatePrompt(
                          goal,
                          detail,
                          platform,
                          strength,
                          clientHandle
                        )
                      );
                    }}
                  >
                    Become the real you 🚀
                  </Button>
                </div>

                <div></div>
              </form>
            </div>
          </>
        )}

        {lastPrompt !== null && answer === null && (
          <>
            <Spacer y={10} />
            <div className="w-full animate-fade-in justify-center text-center">
              <Loading size="xl">{"Transforming your life..."}</Loading>
            </div>
            <div className=" justify-center text-center">
              {lastPrompt !== null && <p>{lastPrompt}</p>}
            </div>
          </>
        )}

        {answer && (
          <>
            <div className="animate-fade-in flex flex-col">
              <div className="text-center mb-8">
                <h1>{"Here are your results!"}</h1>
                <p>{""}</p>
              </div>
              <div>
                <Grid.Container gap={2} className={"justify-center"}>
                  {answer.data?.map((text: string, index: number) => {
                    if (text === "" || index === 0) return;

                    return (
                      <Grid key={index} xs={4} sm={4}>
                        <Card className="hover:scale-105 transition-transform duration-250">
                          {/* <Card.Header>{"Post 1"}</Card.Header> */}
                          <Card.Body>
                            <p className="text-xl italic font-semibold text-center">
                              {text}
                            </p>
                          </Card.Body>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid.Container>
              </div>
              <Spacer y={2} />
              <div className="w-2/3 justify-center self-center text-center">
                <h2 className="">{"Get more out of your experience!"}</h2>
                <p>
                  {
                    "Like the content that you see? ShapeShift© will automatically post similar content to create the digital profile you want and lets you become the real you. Take a look at our pricing below and start using ShapeShift Transformation™ now!"
                  }
                </p>
              </div>
              <Spacer y={2} />
              <div className="flex-auto self-center flex flex-row gap-4">
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
