"use client";

import { useEffect, useState } from "react";
import { HomeTopBar } from "./HomeTopBar";

import { GiVineFlower } from "react-icons/gi";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getUserInfo } from "@/components/service/actions/auth.service";
import { LuLogIn } from "react-icons/lu";

// Define the type for userInfo
interface UserInfo {
  email?: string;
}

const AuthButton = dynamic(
  () => import("@/components/HomePage/AuthButton/AuthButton"),
  { ssr: false }
);

const Navbar = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    // Fetch user info on the client side
    const fetchUserInfo = async () => {
      const info = await getUserInfo();
      setUserInfo(info);
    };
    fetchUserInfo();
  }, []);

  return (
    <div className="navbar bg-[#2b3e50]">
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
        <GiVineFlower size={40} className="text-white" />
      </div>

      {/* Navbar items for large screens */}
      <div className="navbar-center hidden lg:flex text-white">
        <ul className="menu menu-horizontal px-6 mx-4">
          <HomeTopBar />
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            {userInfo?.email ? (
              <div className="pr-5 cursor-pointer font-bold text-xl text-white hover:text-sky-500">
                {userInfo.email}
              </div>
            ) : (
              <LuLogIn size={30} className="text-white" />
            )}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <AuthButton />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
