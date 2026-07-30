import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-2 py-3 sm:py-4 lg:flex-row lg:gap-y-6 xl:py-8">
          {/* logo */}
          <Link href="/">
            <div className="flex items-center gap-2 text-lg font-bold tracking-tight sm:gap-3 sm:text-2xl"><span>[RB]</span><span className="text-[10px] font-normal tracking-[.22em] sm:text-xs sm:tracking-[.25em]">RODRIGO BALESTRIM</span></div>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
