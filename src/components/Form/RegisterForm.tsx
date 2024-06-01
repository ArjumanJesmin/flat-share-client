"use client";

import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { loginUser } from "../service/actions/userLogin";
import { storeUserInfo } from "../service/actions/auth.service";
import { useRouter } from "next/navigation";
import { registerUser } from "../service/actions/registerUser";

type Inputs = {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { password, passwordConfirmation, ...userData } = data;

    if (password && passwordConfirmation) {
      try {
        const res = await registerUser({ ...userData, password });

        if (res?.data?.id) {
          toast.success("Register Successfully");
          const result = await loginUser({
            password: data.password,
            email: data.email,
          });

          if (result?.data?.accessToken) {
            storeUserInfo({ accessToken: result?.data?.accessToken }),
              {
                redirect: "/dashboard",
              };
          }
        }
      } catch (error: any) {
        console.log(error);
        toast.error(error.message);
      }
    } else {
      setError(true);
    }

    console.log(data);
  };
  const password = watch("password");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="username" className="block text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            className="border-b border-gray-300 w-full focus:outline-none"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <span className="text-red-500">{errors.username.message}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="border-b border-gray-300 w-full focus:outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            className="border-b border-gray-300 w-full focus:outline-none"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="passwordConfirmation"
            className="block text-gray-700 mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            className="border-b border-gray-300 w-full focus:outline-none"
            {...register("passwordConfirmation", {
              required: "Password confirmation is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.passwordConfirmation && (
            <span className="text-red-500">
              {errors.passwordConfirmation.message}
            </span>
          )}
        </div>

        <div className="flex justify-center items-center">
          <button className="btn bg-cyan-500 text-white w-full" type="submit">
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
