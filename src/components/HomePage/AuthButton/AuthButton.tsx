import { getUserInfo } from "@/components/service/actions/auth.service";
import { logoutUser } from "@/components/service/actions/logoutUser";
import { useRouter } from "next/navigation";

import Link from "next/link";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };
  return (
    <>
      {userInfo?.email ? (
        <button onClick={handleLogOut} className="btn bg-red-500 text-white">
          <Link className="font-bold text-center" href="/logout">
            Logout
          </Link>
        </button>
      ) : (
        <button className="btn bg-cyan-500 text-white">
          <Link className="font-bold text-center" href="/login">
            Login
          </Link>
        </button>
      )}
    </>
  );
};

export default AuthButton;
