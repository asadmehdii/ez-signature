import React, { FC } from "react";
import Button from "../button";
import Link from "next/link";
import Image from "next/image";
import Assests from "@/app/assests/images";
import { Box } from "@mui/material";

type NavbarProps = {
  showBtn?: boolean
}

const Navbar: FC<NavbarProps> = ({showBtn = true}) => {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <h1 className="logo">EzSignature</h1>
      </Link>
      <Box component="div" className="linkBtn">
        <Link href={"../../pages/fetures"}>Feature</Link>
        <Link href={"../../pages/pricing"}>Pricing</Link>
        <Link href={"../../pages/help"}>Help Center</Link>
        <Link href={"#"}>Developer</Link>
      </Box>
      <div className="btnDiv">
       {showBtn && 
       <>
       <Link href={"../../pages/auth/login"}>
        <Button
          borderRadius={10}
          width={149}
          height={63}
          fontSize={18}
          fontWeight="600"
          borderWidth={2}
          backgroundColor="#ffffff"
        >
          Login
        </Button>
        </Link>
        <Link href={"../../pages/auth/signup"}>
        <Button
          borderRadius={10}
          width={149}
          height={63}
          fontSize={18}
          fontWeight="600"
          backgroundColor="var(--secondary-color)"
        >
          Sign up
        </Button>
        </Link>
        </>
        }
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
