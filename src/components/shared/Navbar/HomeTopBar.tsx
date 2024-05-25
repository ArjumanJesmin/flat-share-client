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

    <li>
      <Link
        className="cursor-pointer border-r font-bold mr-3"
        href="/ourProjects"
      >
        Our Projects
      </Link>
    </li>
    <li>
      <Link className="cursor-pointer border-r font-bold mr-3" href="/donation">
        Donation / Get Involved
      </Link>
    </li>
    <li>
      <Link
        className="cursor-pointer border-r font-bold mr-3"
        href="/contactUs"
      >
        Contact Us
      </Link>
    </li>
  </>
);
