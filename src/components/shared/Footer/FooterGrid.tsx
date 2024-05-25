import Link from "next/link";

const FooterGrid = () => {
  return (
    <div className="grid grid-cols-5 gap-4 bg-[#454028] text-white p-4">
      <div>
        <Link className="cursor-pointer hover:underline" href="/">
          Home
        </Link>
      </div>
      <div>
        <p>
          <Link className="cursor-pointer hover:underline" href="/aboutUs">
            About Us
          </Link>
        </p>
        <p>
          <Link className="cursor-pointer hover:underline" href="/howAreWe">
            Who are we?
          </Link>
        </p>
        <p>
          <Link
            className="cursor-pointer hover:underline"
            href="/purposeAndValue"
          >
            Purpose and Value
          </Link>
        </p>
        <p>
          <Link className="cursor-pointer hover:underline" href="/leadership">
            Leadership
          </Link>
        </p>
        <p>
          <Link className="cursor-pointer hover:underline" href="/faq">
            FAQ
          </Link>
        </p>
      </div>
      <div>
        <Link className="cursor-pointer hover:underline" href="/ourProjects">
          Our Projects
        </Link>
      </div>
      <div>
        <p className="cursor-pointer hover:underline">
          Donation / Get Involved
        </p>
      </div>
      <div>
        <p className="cursor-pointer hover:underline">Contact Us</p>
      </div>
    </div>
  );
};

export default FooterGrid;
