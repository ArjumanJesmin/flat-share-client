import facebook from "@/assets/about/facebook.svg";
import twitter from "@/assets/about/twitter.svg";
import instagram from "@/assets/about/instagram.svg";
import phone from "@/assets/about/icon.svg";
import email from "@/assets/about/email.svg";
import Image from "next/image";
const AboutUs: React.FC = () => {
  return (
    <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
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
        <ul className="mt-4">
          <li className="flex items-center gap-2">
            <Image src={email} alt="email" width={30} height={30} /> Email:
            <a href="mailto:info@flatshare.com" className="text-blue-500">
              info@flatshare.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Image src={phone} alt="phone" width={30} height={30} /> Phone:{" "}
            <a href="tel:+1234567890" className="text-blue-500">
              +1 (234) 567-890
            </a>
          </li>
          <li>Follow us on social media:</li>
          <ul className="flex space-x-4 mt-2">
            <li>
              <a
                href="https://facebook.com"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={facebook} alt="facebook" width={30} height={30} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twitter} alt="twitter" width={30} height={30} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={instagram} alt="instagram" width={30} height={30} />
              </a>
            </li>
          </ul>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
