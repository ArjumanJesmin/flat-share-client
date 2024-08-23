import Image from "next/image";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaLinkedin,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import flatImage from "@/assets/slider-1.jpg";
import image from "@/assets/flat.jpg";
import TitleWithSubtitle from "@/components/utils/TitleWithSubtitle";

const AboutUs: React.FC = () => {
  return (
    <main>
      <section className="relative mb-30 h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            alt="Background Image"
            src={flatImage}
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute inset-0 bg-secondary-light1 opacity-30"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-start text-left text-secondary-main p-6">
          <TitleWithSubtitle
            title="This is About Us"
            subtitle="Every body know about us section"
          />
        </div>
      </section>

      <section className="container grid grid-cols-2 gap-16 my-8 justify-center items-center">
        <div>
          <Image
            className="border-l-[24px] border-primary-main "
            alt="Background Image"
            src={image}
            quality={100}
            style={{
              objectFit: "cover",
              borderRadius: "90% 70% 30% 0%",
            }}
          />
        </div>

        {/* write side data */}
        <div>
          <TitleWithSubtitle
            title="This is About Us"
            subtitle="Every body know about us section"
          />
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to make finding the perfect flat-mate easy and
              stress-free. We provide a platform that connects individuals
              looking for shared living spaces, ensuring compatibility and
              comfort for everyone involved.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              If you have any questions or need assistance, feel free to reach
              out to us:
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MdOutlineMail size={20} />
                Email:
                <span>info@flatshare.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                Phone: <span>+1 (234) 567-890</span>
              </div>
            </div>
            <div>
              <p>
                Phone:{" "}
                <a className="hover:underline" href="tel:+1234567890">
                  +1 234 567 890
                </a>
              </p>
              <div className="flex mt-3 gap-4">
                <a
                  className="text-white rounded-full p-3 bg-primary-main hover:bg-secondary-light1"
                  href="https://www.facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare size={15} />
                </a>
                <a
                  className="text-white rounded-full p-3 bg-primary-main hover:bg-secondary-light1"
                  href="https://www.twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={15} />
                </a>
                <a
                  className="text-white rounded-full p-3 bg-primary-main hover:bg-secondary-light1"
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={15} />
                </a>
                <a
                  className="text-white rounded-full p-3 bg-primary-main hover:bg-secondary-light1"
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
