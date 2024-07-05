import Image from "next/image";
import logo from "@/assets/logo.svg";

import Link from "next/link";
import LoginForm from "@/components/Form/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-6 md:p-12 lg:p-24 bg-gray-100">
      <div className="max-w-md md:max-w-lg lg:max-w-xl shadow-lg w-full border p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl bg-white">
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-medium my-4">
          Login
        </h2>
        <LoginForm />
        <p className="font-normal text-xs sm:text-sm md:text-base text-center mt-4">
          First you{" "}
          <Link className="text-blue-500" href="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
