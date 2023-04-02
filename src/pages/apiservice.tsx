import Layout from "@/components/layout";
import React from "react";

export default function APIService() {
  return (
    <Layout>
      <div className="text-center">
        <h1>{"You're an early bird!"}</h1>
        <p>{"This product hasn't launched yet!"}</p>
        <p>
          {
            "The API services will launch soon, check back on this page to keep yourself updated!"
          }
        </p>
      </div>
    </Layout>
  );
}
