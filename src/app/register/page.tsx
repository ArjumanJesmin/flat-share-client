import RegisterForm from "@/components/Form/RegisterForm";
import Image from "next/image";
import logo from "@/assets/logo.svg";

import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl mt-12 mx-auto">
      <div className="max-w-md md:max-w-lg lg:max-w-xl shadow-lg w-full border p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl bg-white">
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-medium my-4">
          Sign Up
        </h2>
        <RegisterForm />
        <p className="font-normal text-xs sm:text-sm md:text-base text-center mt-4">
          You have already signed up!{" "}
          <Link className="text-blue-500" href="/login">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
