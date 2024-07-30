"use client";

import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="sticky top-[0] xl:relative w-full py-6 xl:py-6 text-white bg-light border-b-[1px] border-black/30 z-[100]">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <p className="absolute ml-[7rem] text-primary/50 top-5">[dev]</p>
          <h1 className="text-4xl font-semibold">
            Zsans <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button variant="outline">Contact</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
