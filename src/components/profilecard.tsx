import React from "react";

import { Button, Card, Col } from "@nextui-org/react";

type ProfileCardProps = {
  name: string;
  role: string;
  image: string;
  description: string;
  portfolio: string;
};

export default function ProfileCard({
  name,
  role,
  image,
  description,
  portfolio,
}: ProfileCardProps) {
  const visitPortfolio = () => {
    window.open(portfolio, "_blank");
  };

  return (
    <Card>
      <Card.Header className="z-10 top-2 bg-slate-600">
        <Col>
          <h2 className="text-slate-400 font-bold">{role}</h2>
          <h1 className="text-slate-100 font-bold text-3xl">{name}</h1>
        </Col>
      </Card.Header>
      <Card.Image
        src={`/team/${image}`}
        // src="https://picsum.photos/200/300"
        width="100%"
        height={340}
        objectFit="cover"
        alt="Profile card background"
      />
      <Card.Body>
        <p className="text-justify font-normal">{description}</p>
      </Card.Body>
      <Card.Footer className="w-full">
        <a
          className=" border-black text-black p-2 pl-4 pr-4 border-2 rounded-full mx-auto"
          href={portfolio}
          target="_blank"
        >
          {"Visit Portfolio"}
        </a>
      </Card.Footer>
    </Card>
  );
}
