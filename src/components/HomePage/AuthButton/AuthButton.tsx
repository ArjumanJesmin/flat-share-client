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
        <>
          <li>
            <Link className="cursor-pointer font-bold" href="/dashboard">
              Profile
            </Link>
          </li>
          <li onClick={handleLogOut} className="cursor-pointer font-bold">
            Logout
          </li>
        </>
      ) : (
        <li>
          <Link className="cursor-pointer text-center font-bold" href="/login">
            Login
          </Link>
          <Link
            className="cursor-pointer text-center font-bold"
            href="/register"
          >
            Register
          </Link>
        </li>
      )}
    </>
  );
};

export default AuthButton;
