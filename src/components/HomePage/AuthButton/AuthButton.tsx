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
        <div className="gap-4 flex justify-center">
          <button>
            <Link
              className="cursor-pointer border-r font-bold mr-3"
              href="/myProfile"
            >
              My Profile
            </Link>
          </button>

          <button onClick={handleLogOut} className="btn bg-red-500 text-white">
            <Link className="font-bold text-center" href="/logout">
              Logout
            </Link>
          </button>
        </div>
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
