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
    <div className="h-32 flex gap-48 items-center justify-center">
      <div className="flex flex-shrink flex-grow-1">
        <Link href={"/"}>
          <Image
            src={"/logo/logo.svg"}
            className="transition duration-250 ease-in-out transform hover:scale-110"
            width={48}
            height={48}
            alt={"Logo"}
          />
        </Link>
      </div>
      <div className="flex flex-shrink flex-grow-4">
        <Dropdown>
          <Dropdown.Button light>{"Products"}</Dropdown.Button>
          <Dropdown.Menu aria-label="products">
            <Dropdown.Item key="cleaning">
              {"Digital Twin Transformation"}
            </Dropdown.Item>
            <Dropdown.Item key="generation">{"Shapeshift API"}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button auto light onClick={() => router.push("/pricing")}>
          {"Pricing"}
        </Button>
        <Dropdown>
          <Dropdown.Button light>{"Why us?"}</Dropdown.Button>
          <Dropdown.Menu aria-label="why-us" onAction={dropdownNavigate}>
            <Dropdown.Item key="team">{"Our team"}</Dropdown.Item>
            <Dropdown.Item key="culture">{"Our culture"}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button auto light onClick={() => router.push("/contact")}>
          {"Contact us"}
        </Button>
      </div>
      <div className="flex flex-grow-1">
        <Button light bordered rounded>
          {"Try for Free"}
        </Button>
      </div>
    </div>
  );
}
