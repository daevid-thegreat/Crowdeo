import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,} from "@nextui-org/react";
import Image from "next/image";

export default function Nav() {
  return (
    <Navbar class={"bg-white"}>
      <NavbarBrand>
        <Image src={'/logo.png'} alt={'logo'} width={120} height={60} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
