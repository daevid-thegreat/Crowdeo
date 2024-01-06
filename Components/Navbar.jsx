import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,} from "@nextui-org/react";
import Image from "next/image";

export default function Nav() {
  return (
    <Navbar class={"bg-white px-24 py-4 flex justify-around"}>
      <NavbarBrand>
        <Image src={'/logo.png'} alt={'logo'} width={120} height={60} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#">
            About
          </Link>
        </NavbarItem>
        {/*<NavbarItem isActive>*/}
        {/*  <Link href="#" >*/}
        {/*    Companies*/}
        {/*  </Link>*/}
        {/*</NavbarItem>*/}

          <NavbarItem>
          <Link href="#" >
            Companies
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden py-2 px-6 rounded-lg lg:flex bg-blue-600 ">
          <Link className={"text-white"} href="#">Login</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
