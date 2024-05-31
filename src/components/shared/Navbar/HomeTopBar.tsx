import Link from "next/link";
export const HomeTopBar = () => (
  <>
    <li>
      <Link className="cursor-pointer border-r font-bold mr-3" href="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="cursor-pointer border-r font-bold mr-3" href="/aboutUs">
        About Us
      </Link>
    </li>
  </>
);
