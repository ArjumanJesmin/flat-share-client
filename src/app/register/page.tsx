import RegisterForm from "@/components/Form/RegisterForm";
import Image from "next/image";
import logo from "@/assets/logo.svg";

import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-8 bg-gray-100">
      <div className="max-w-lg shadow-lg w-full border p-8 rounded-xl bg-white">
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>
        <h2 className="text-center text-2xl font-medium my-4">Sign Up</h2>
        <RegisterForm />
        <p className="font-normal text-sm text-center mt-4">
          You have already signUp!
          <Link className="text-blue-500" href="/login">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
