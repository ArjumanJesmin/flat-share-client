import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const AboutUs: React.FC = () => {
  return (
    <div className="mt-12 bg-white p-8 rounded-lg shadow-2xl max-w-4xl mx-auto mb-8">
      <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p>
          Our mission is to make finding the perfect flat-mate easy and
          stress-free. We provide a platform that connects individuals looking
          for shared living spaces, ensuring compatibility and comfort for
          everyone involved.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Meet the Team</h3>
        <p>
          We are a team of dedicated professionals committed to helping you find
          the perfect living arrangement. Our team consists of:
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>
            <strong>John Doe</strong> - Founder & CEO
          </li>
          <li>
            <strong>Jane Smith</strong> - Chief Operating Officer
          </li>
          <li>
            <strong>Emily Johnson</strong> - Lead Developer
          </li>
          <li>
            <strong>Michael Brown</strong> - Marketing Director
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p>
          If you have any questions or need assistance, feel free to reach out
          to us:
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MdOutlineMail size={20} />
            Email:
            <span className="text-blue-500">info@flatshare.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            Phone: <span className="text-blue-500">+1 (234) 567-890</span>
          </div>
        </div>

        <p className="mt-4">Follow us on social media:</p>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-teal-500  p-3 rounded-full"
          >
            <FaFacebookSquare size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-teal-500  p-3 rounded-full"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-teal-500  p-3 rounded-full"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
