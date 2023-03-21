import Image from "next/image";

import { Dropdown, Button } from "@nextui-org/react";

export default function NavBar() {
  return (
    <div className="h-32 w-screen flex gap-10 items-center justify-center">
      <div className="flex flex-shrink flex-grow-1">
        <Image src={"/favicon.ico"} width={48} height={48} alt={"Logo"} />
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
        <Button light>Pricing</Button>
        <Dropdown>
          <Dropdown.Button light>Why us?</Dropdown.Button>
          <Dropdown.Menu aria-label="why-us">
            <Dropdown.Item key="cleaning">Data Cleaning</Dropdown.Item>
            <Dropdown.Item key="generation">Experience Creation</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button light>Contact Us</Button>
      </div>
      <div className="flex flex-grow-1">
        <Button light bordered>
          Try for Free
        </Button>
      </div>
    </div>
  );
}
