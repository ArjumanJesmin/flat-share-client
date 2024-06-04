import Link from "next/link";
import facebook from "@/assets/about/facebook.svg";
import twitter from "@/assets/about/twitter.svg";
import instagram from "@/assets/about/instagram.svg";
import linkedIn from "@/assets/about/linkedIn.svg";
import Image from "next/image";

const FooterGrid = () => {
  return (
    <div className="grid grid-cols-5 gap-4 bg-gradient-to-r from-[#454028] to-custom-light text-white p-4">
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
        <p>
          Email:{" "}
          <a className="hover:underline" href="mailto:example@example.com">
            example@example.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a className="hover:underline" href="tel:+1234567890">
            +1 234 567 890
          </a>
        </p>
        <div className="flex mt-3 gap-6 text-white">
          <a
            className="hover:underline"
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            style={{ marginRight: "10px" }}
          >
            <Image src={facebook} alt="facebook" width={15} height={15} />
          </a>
          <a
            className="hover:underline"
            href="https://www.twitter.com/yourprofile"
            target="_blank"
            style={{ marginRight: "10px" }}
          >
            <Image src={twitter} alt="facebook" width={15} height={15} />
          </a>
          <a
            className="hover:underline"
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            style={{ marginRight: "10px" }}
          >
            <Image src={instagram} alt="facebook" width={15} height={15} />
          </a>
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
          >
            <Image src={linkedIn} alt="facebook" width={15} height={15} />
          </a>
        </div>
      </div>
      <div>
        <p>
          <Link className="cursor-pointer hover:underline" href="/terms-of-use">
            Terms of Use
          </Link>
        </p>
        <p>
          <Link
            className="cursor-pointer hover:underline"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
      <div className="col-span-5 text-center mt-4">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterGrid;
