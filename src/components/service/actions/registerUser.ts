"use server";

import { toast } from "sonner";
import { storeUserInfo } from "./auth.service";
import { loginUser } from "./userLogin";

type TRegister = {
  username: string;
  email: string;
  password: string;
};

export const registerUser = async ({
  username,
  email,
  password,
}: TRegister) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
      cache: "no-store",
    }
  );
  const userInfo = await res.json();

  // if (userInfo?.data?.id) {
  //   toast.success("Register Successfully");
  //   const result = await loginUser({
  //     password,
  //     email,
  //   });

  //   if (result?.data?.accessToken) {
  //     storeUserInfo({ accessToken: result?.data?.accessToken }),
  //       {
  //         redirect: "/dashboard",
  //       };
  //   }
  // }

  return userInfo;
};
