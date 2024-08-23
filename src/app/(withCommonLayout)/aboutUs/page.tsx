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
        <div className="relative z-10 flex flex-col items-start text-left text-secondary-main px-8 py-20">
          <h1 className="text-4xl font-bold mb-6">
            Find Your Dream <br /> Home with Ease!
          </h1>
          <p className="my-4 text-slate-600">
            Explore a platform designed to make your home search simple and{" "}
            <br />
            enjoyable. With a focus on user-friendly design and effortless{" "}
            <br />
            navigation, our site helps you connect with the right spaces and{" "}
            <br />
            people, making your move as smooth as possible.
          </p>
        </div>
      </section>

      <section className="container grid md:grid-cols-2 gap-6 my-8 justify-center items-center p-4">
        <div>
          <Image
            className="border-l-[40px] border-primary-main w-full lg:h-screen"
            alt="Background Image"
            src={image}
            quality={100}
            style={{
              objectFit: "cover",
              borderRadius: "0 50% 50% ",
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
