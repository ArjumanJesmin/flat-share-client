import Image from "next/image";
import logo from "@/assets/logo.svg";

import Link from "next/link";
import LoginForm from "@/components/Form/LoginForm";

const LoginPage = () => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl mt-12 mx-auto">
      <div className="max-w-md md:max-w-lg lg:max-w-xl shadow-lg w-full border p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl bg-white">
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="logo" width={40} height={40} />
        </div>
        <h2 className="text-center text-xl sm:text-2xl md:text-2xl font-medium my-4">
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
