"use client";

import { loginUser } from "@/components/service/actions/userLogin";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { storeUserInfo } from "../service/actions/auth.service";
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await loginUser(data);
      console.log(res);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
      } else {
        setError(res.message);
        console.log(res);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      {error && (
        <div>
          <p className="bg-red-500 p-1 border-spacing-1 text-white mt-4">
            {error}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="border-b border-gray-300 w-full focus:outline-none"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            className="border-b border-gray-300 w-full focus:outline-none"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </div>
        <div className="flex justify-center items-center">
          <button className="btn bg-cyan-500 text-white w-full" type="submit">
            Login Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
