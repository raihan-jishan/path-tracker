"use client";
import NavItem from "@/components/ui/NavItem";
import { navLinks } from "@/constants";
import useClick from "@/hooks/useClick";
import { Activity, ArrowUpNarrowWide, Menu } from "lucide-react";
import Link from "next/link";
import Button from "../ui/button";

const Navbar = () => {
  const { click, handleClick, handleClose } = useClick();
  return (
    <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 start-0    backdrop-blur m-2 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white max-lg:text-[1.3rem]">
            PathTracker
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4 max-lg:gap-0">
          <Button 
          path={'/getstart'}
          label="Get for free" icon={<Activity />}  roundedFull heroPadding />

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleClick}
          >
            {click ? <ArrowUpNarrowWide /> : <Menu />}
          </button>
        </div>
        <div
          className={
            click
              ? "items-center justify-between   w-full md:flex md:w-auto md:order-1"
              : "items-center justify-between hidden   w-full md:flex md:w-auto md:order-1"
          }
        >
          <ul className=" dark:max-lg:bg-black max-lg:rounded-xl  flex flex-col p-4 md:p-2 rounded-full mt-4 font-medium border      md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:bg-gray-800  text-center">
            {navLinks.map((item, index) => {
              return (
                <NavItem key={index} label={item.label} path={item.route} />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
