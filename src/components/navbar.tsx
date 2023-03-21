import Image from "next/image";

import { Dropdown, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className="h-32 w-screen flex gap-48 items-center justify-center">
      <div className="flex flex-shrink flex-grow-1">
        <Link href={"/"}>
          <Image src={"/favicon.ico"} width={48} height={48} alt={"Logo"} />
        </Link>
      </div>
      <div className="flex flex-shrink flex-grow-4">
        <Dropdown>
          <Dropdown.Button light>Products</Dropdown.Button>
          <Dropdown.Menu aria-label="products">
            <Dropdown.Item key="cleaning">Data Cleaning</Dropdown.Item>
            <Dropdown.Item key="generation">Experience Creation</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Button light>Solutions</Dropdown.Button>
          <Dropdown.Menu aria-label="solutions">
            <Dropdown.Item key="cleaning">Data Cleaning</Dropdown.Item>
            <Dropdown.Item key="generation">Experience Creation</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button auto light onClick={() => router.push("/pricing")}>
          Pricing
        </Button>
        <Dropdown>
          <Dropdown.Button light>Why us?</Dropdown.Button>
          <Dropdown.Menu aria-label="why-us">
            <Dropdown.Item key="cleaning">Data Cleaning</Dropdown.Item>
            <Dropdown.Item key="generation">Experience Creation</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button auto light>
          Contact Us
        </Button>
      </div>
      <div className="flex flex-grow-1">
        <Button light bordered rounded>
          Try for Free
        </Button>
      </div>
    </div>
  );
}
