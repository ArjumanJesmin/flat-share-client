import Link from "next/link";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const FooterGrid = () => {
  return (
    <div className="grid grid-cols-5 gap-4 bg-secondary-main border-t-2 border-primary-main text-white p-4">
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
        <div className="flex mt-3 gap-4">
          <a
            className="text-white rounded-full p-3 bg-secondary-light hover:bg-white hover:text-[#454028]"
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare size={20} />
          </a>
          <a
            className="text-white rounded-full p-3 bg-secondary-light hover:bg-white hover:text-[#454028]"
            href="https://www.twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a
            className="text-white rounded-full p-3 bg-secondary-light hover:bg-white hover:text-[#454028]"
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
          <a
            className="text-white rounded-full p-3 bg-secondary-light hover:bg-white hover:text-[#454028]"
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
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
      <div className="col-span-5 text-center mt-4 bg-secondary-light p-8">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterGrid;
