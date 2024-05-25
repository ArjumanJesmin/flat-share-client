"use client";

import logo from "@/assets/logo.svg";
import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";
import { drawerItems } from "@/components/utils/drawerItems";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/components/service/actions/auth.service";
import { UserRole } from "@/components/contants/role";

const DashboardDrawer = ({ children }: { children: React.ReactNode }) => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo && userInfo.role) {
      setUserRole(userInfo.role as UserRole);
    } else {
      console.error("User info is undefined or role is missing");
    }
  }, []);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-outline btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-12  min-h-full w-full bg-[#FFFAE6] text-[#002379]">
          {/* Sidebar content here */}
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="items-center mx-auto my-4"
          />
          {/* sidebar */}
          <div className="">
            {drawerItems(userRole as UserRole).map((item, index) => (
              <Sidebar key={index} item={item} />
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardDrawer;
