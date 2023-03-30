import { Button, Card, Text } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Feature = ({ text }: { text: String }) => {
  return (
    <li className="flex items-center space-x-3">
      <span className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400">
        ✔
      </span>
      <span>{text}</span>
    </li>
  );
};

type PricingCardProps = {
  title?: String;
  description?: String;
  isMostPopular?: Boolean;
  price?: Number;
  features?: String[];
};

export default function PricingCard({
  title,
  description,
  isMostPopular,
  price,
  features,
}: PricingCardProps) {
  const router = useRouter();

  return (
    <Card>
      <Card.Body className={isMostPopular ? "bg-primary-50" : ""}>
        <div className={"text-center h-full"}>
          {isMostPopular && (
            <p className="absolute top-4 left-4 text-gray-600 sm:text-xs">
              🥇 Most chosen
            </p>
          )}
          <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
          <p className="font-light text-gray-600 sm:text-lg dark:text-gray-500">
            {description}
          </p>
          {price !== -1 ? (
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">
                {"€" + price}
              </span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
          ) : (
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">{"Custom"}</span>
            </div>
          )}

          <ul role="list" className="m-auto mb-8 w-2/3 space-y-4 text-left">
            {features?.map((feature, index) => {
              return <Feature key={index} text={feature} />;
            })}
          </ul>
        </div>
      </Card.Body>
      <Card.Footer
        className={
          isMostPopular ? "bg-primary-50 justify-center" : "justify-center"
        }
      >
        <Button rounded bordered onClick={() => router.push("/try")}>
          Get Started
        </Button>
      </Card.Footer>
    </Card>
  );
}
