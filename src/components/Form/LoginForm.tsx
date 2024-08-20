"use client";

import { loginUser } from "@/components/service/actions/userLogin";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { storeUserInfo } from "../service/actions/auth.service";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      const res = await loginUser(data);

      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
      } else {
        setError(res.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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

        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="border-b border-gray-300 w-full focus:outline-none"
            {...register("password", { required: "Password is required" })}
          />
          <div
            className="absolute right-3 top-9 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div className="flex justify-center items-center">
          <button
            className={`btn bg-primary-main text-white w-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <FaSpinner className="animate-spin mr-2" />
                Logging in...
              </div>
            ) : (
              "Login Now"
            )}
          </button>
        </div>

        {/* Button to open the modal */}
        <button
          className="btn mt-4 w-full btn-outline btn-info text-white"
          type="button"
          onClick={toggleModal}
        >
          Demo User Data
        </button>
      </form>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
            <h3 className="font-bold text-lg">Admin Data</h3>
            <p className="py-4">
              Email: <span className="font-medium">jaba@gmail.com</span>
              <br />
              Password: <span className="font-medium">123456</span>
            </p>
            <h3 className="font-bold text-lg">User Data</h3>
            <p className="py-4">
              Email: <span className="font-medium">abc@gmail.com</span>
              <br />
              Password: <span className="font-medium">123456</span>
            </p>
            <div className="modal-action">
              {/* Close button */}
              <button
                className="btn btn-outline btn-info text-white"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
