"use client";
import React, {useEffect} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button,} from "@nextui-org/react";
import Image from "next/image";
import {Web3} from "web3";

export default function Nav() {
    const [isConnected, setIsConnected] = React.useState(false);
    const [userAccount, setUserAccount] = React.useState(null);

      useEffect(() => {
    const savedUserAccount = localStorage.getItem("userAccount");
    if (savedUserAccount) {
      setUserAccount(savedUserAccount);
      setIsConnected(true);
    }
  }, []);
    const detectCurrentProvider = async () => {
        try {
        if (window.ethereum) {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          return window.ethereum;
        } else if (window.web3) {
          const provider = window.web3.currentProvider;
          return provider;
        } else {
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
          return null;
        }
        } catch (error) {
        console.error('Error detecting Ethereum provider:', error);
        return null;
        }
};

   const onConnect = async () => {
      try {
        const currentProvider = await detectCurrentProvider();
        if (currentProvider) {
          const web3Instance = new Web3(currentProvider);
          const accounts = await web3Instance.eth.getAccounts();
          if (accounts.length > 0) {
            const userAccount = accounts[0];
            setUserAccount(userAccount);
            setIsConnected(true);
            localStorage.setItem("userAccount", userAccount);
          } else {
            console.log('No Ethereum accounts found.');
          }
        }
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
};

    const onDisconnect = () => {
        setIsConnected(false);
        localStorage.removeItem("userAccount");
    };
  return (
    <Navbar className={"bg-white px-10 py-4 flex justify-around"}>
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
          <Link href="/companies" >
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
        <NavbarItem className="ml-10">
               <Button onClick={isConnected ? onDisconnect : onConnect}>
      {isConnected ? `Disconnect ${userAccount}` : 'Connect Wallet'}
    </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
