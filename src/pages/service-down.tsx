import Layout from "@/components/layout";
import { Code, Spacer } from "@nextui-org/react";
import React from "react";

import { Router, withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";

const ServiceDown = ({ router }: WithRouterProps) => {
  return (
    <Layout>
      <div className=" text-center">
        <h1>{"Service Down"}</h1>
        <h3>
          {
            "Sorry, the service is down for maintenance. Please try again later."
          }
        </h3>
      </div>
      <Spacer y={5} />
      <div className="w-4/5 text-center mx-auto">
        <p>
          {
            "Fourth wall breaking note: This is an actual problem with the ChatGPT API bot. The bot might be offline or is experiencing downtime. Either way, it is not responding in a way we want. 😢"
          }
        </p>

        <Spacer y={2} />
        <p>{`The following task id was attached to the request:`}</p>
        <code>{router.query.taskHandleId}</code>
        <Spacer y={1} />
        <p>
          {
            "Underneath, the received message is shown. This is the message that caused the service to go down:"
          }
        </p>
        <Code>{router.query.receivedMessage}</Code>
      </div>
    </Layout>
  );
};

export default withRouter(ServiceDown);
