"use client";

import { HomeTopBar } from "./HomeTopBar";
import logo from "@/assets/logo.svg";
import Image from "next/image";

import dynamic from "next/dynamic";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/HomePage/AuthButton/AuthButton"),
    { ssr: false }
  );

  return (
    <div className="navbar bg-[#CAF4FF] ">
      <div className="navbar-start">
        {/* Dropdown for mobile view */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <HomeTopBar />
          </ul>
        </div>
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>

      {/* Navbar items for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-6 mx-4">
          <HomeTopBar />
        </ul>
      </div>

      {/* User profile dropdown */}
      <div className="navbar-end">
        <AuthButton />
      </div>
    </div>
  );
};

export default Navbar;
