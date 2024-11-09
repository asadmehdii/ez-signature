import React, { FC } from "react";
import Button from "../button";
import Link from "next/link";
import Image from "next/image";
import Assests from "@/app/assests/images";

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <h1 className="logo">EzSignature</h1>
      </Link>
      <ul>
        <Link href={"../../pages/fetures"}>
          <li>Feature</li>
        </Link>
        <Link href={"../../pages/pricing"}>
          <li>Pricing</li>
        </Link>
        <Link href={"#"}>
          <li>Help Center</li>
        </Link>
        <Link href={"#"}>
          <li>Developer</li>
        </Link>
      </ul>
      <div className="btnDiv">
        <Button
          borderRadius={10}
          width={90}
          height={40}
          fontSize={18}
          fontWeight="600"
          borderWidth={2}
          backgroundColor="#ffffff"
        >
          <Link href={"../../pages/auth/login"}>Login</Link>
        </Button>
        <Button
          borderRadius={10}
          width={90}
          height={40}
          fontSize={18}
          fontWeight="600"
          backgroundColor="var(--secondary-color)"
        >
          <Link href={"../../pages/auth/signup"}>Sign up</Link>
        </Button>
      </div>
      {/* show hamburger icon on small screen */}
      <Image
        className="hamIcon"
        src={Assests.HamburgerIcon}
        alt="icon_here"
        priority
      />
    </nav>
  );
};

export default Navbar;
