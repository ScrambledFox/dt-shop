import React, { Key } from "react";

import Image from "next/image";
import { Dropdown, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();

  /**
   * Navigate to a page.
   * @param key link to navigate to
   */
  const dropdownNavigate = (key: Key) => {
    router.push(`/${key}`);
  };

  return (
    <div className="absolute z-50 w-screen h-32 flex gap-48 items-center justify-center">
      <div className="flex flex-shrink flex-grow-1">
        <Link
          className="flex gap-4 text-slate-900 transition duration-300 ease-in-out transform hover:scale-105"
          href={"/"}
        >
          <h1>{"ShapeShift"}</h1>
          <Image src={"/logo/logo.svg"} width={64} height={64} alt={"Logo"} />
        </Link>
      </div>
      <div className="flex flex-shrink flex-grow-4">
        <Dropdown>
          <Dropdown.Button light>{"Products"}</Dropdown.Button>
          <Dropdown.Menu aria-label="products" onAction={dropdownNavigate}>
            <Dropdown.Item key="transformation">
              {"Digital Twin Transformation"}
            </Dropdown.Item>
            <Dropdown.Item key="api">{"Shapeshift API"}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button auto rounded light onClick={() => router.push("/pricing")}>
          {"Pricing"}
        </Button>
        <Dropdown>
          <Dropdown.Button light>{"Why us?"}</Dropdown.Button>
          <Dropdown.Menu aria-label="why-us" onAction={dropdownNavigate}>
            <Dropdown.Item key="team">{"Our team"}</Dropdown.Item>
            <Dropdown.Item key="culture">{"Our culture"}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button auto rounded light onClick={() => router.push("/contact")}>
          {"Contact us"}
        </Button>
      </div>
      <div className="flex flex-grow-1">
        <Button light bordered rounded onClick={() => router.push("/try")}>
          {"Try for Free"}
        </Button>
      </div>
    </div>
  );
}
