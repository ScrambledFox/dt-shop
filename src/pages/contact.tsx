import React from "react";

import Layout from "@/components/layout";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Loading } from "@nextui-org/react";
import Head from "next/head";

import { AiOutlineRedo } from "react-icons/ai";

export default function Contact() {
  const [state, handleSubmit] = useForm("xnqygnbz");
  const [didSubmit, setDidSubmit] = React.useState(false);

  const doSubmit = (e: React.FormEvent) => {
    handleSubmit(e);
    setDidSubmit(true);
  };

  const doReset = () => {
    setDidSubmit(false);
  };

  return (
    <Layout>
      <Head>
        <title>{"ShapeShift - Contact"}</title>
      </Head>
      <main className="flex flex-row ">
        <div className="flex-1">
          <h1 className="text-5xl">{"Contact us!"}</h1>
          <p className="mt-4">
            {
              "Don't hesitate to contact us with any questions or inquiries you have. We'll get back to you as soon as possible (max. 2 business days)."
            }
          </p>
          <form onSubmit={doSubmit} className="mt-6 mb-6 flex flex-col gap-4">
            <label className="text-2xl mr-4" htmlFor="name">
              Name
            </label>
            <input
              className="rounded-xl p-2 focus:p-3 transition-all duration-300"
              type="text"
              id="name"
              name="name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label className="text-2xl mr-4" htmlFor="email">
              Email Address
            </label>
            <input
              className="rounded-xl p-2 focus:p-3 transition-all duration-300"
              type="email"
              id="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label className="text-2xl mr-4" htmlFor="message">
              Message
            </label>
            <textarea className="rounded-xl p-2" id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <ValidationError
              className="text-red-500 font-semibold"
              errors={state.errors}
            />
            {!didSubmit ? (
              <Button type="submit" disabled={state.submitting}>
                {"Send"}
              </Button>
            ) : state.submitting ? (
              <Button auto disabled rounded bordered>
                <Loading color={"currentColor"} size="sm" />
              </Button>
            ) : state.succeeded ? (
              <Button
                auto
                rounded
                bordered
                onClick={doReset}
                icon={<AiOutlineRedo />}
              >
                {"Submit another message"}
              </Button>
            ) : (
              <div>
                <Button
                  auto
                  rounded
                  bordered
                  onClick={doReset}
                  icon={<AiOutlineRedo />}
                >
                  {"Try again"}
                </Button>
              </div>
            )}
          </form>
        </div>
        <div className="flex-1 text-center self-center">
          <span className="text-9xl">📮💌</span>
        </div>
      </main>
    </Layout>
  );
}
