// "use server";
import setAccessToken from "./setAccessToken";

export async function loginUser(data: { email: string; password: string }) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      }
    );

    const userInfo = await res.json();

    if (userInfo?.data?.accessToken) {
      setAccessToken(userInfo?.data?.accessToken, {
        redirect: "/dashboard",
      });
    }

    return userInfo;
  } catch (error) {
    console.error("User is not login successfully:", error);
    throw error;
  }
}
