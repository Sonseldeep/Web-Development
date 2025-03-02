import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img className="h-20" src="/logo.png" />
        </Link>
        <Button variant="outline">Login</Button>
        {/* 
        <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header> */}
      </nav>
    </>
  );
};

export default Header;
