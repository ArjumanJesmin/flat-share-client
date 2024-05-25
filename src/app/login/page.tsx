import Image from "next/image";
import logo from "@/assets/logo.svg";

import Link from "next/link";
import LoginForm from "@/components/Form/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-24 bg-gray-100">
      <div className="max-w-lg shadow-lg w-full border p-10 rounded-xl bg-white">
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>
        <h2 className="text-center text-2xl font-medium my-4">Login</h2>
        <LoginForm />
        <p className="font-normal text-sm text-center mt-4">
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
