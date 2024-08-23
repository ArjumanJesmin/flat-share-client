import Image from "next/image";
import bgShape from "@/assets/bg-shape-06.jpg";
import { FaRegStar } from "react-icons/fa6";
import Link from "next/link";
import { IoMdQuote } from "react-icons/io";

const TestimonialsHomePage = () => {
  return (
    <div>
      <section className="relative mb-30 h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            alt="Background Image"
            src={bgShape}
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
        <div className="grid grid-cols-2 absolute">
          <div className="m-16 px-8 items-start text-left">
            <p className="my-4 text-slate-600">About company</p>
            <h1 className="text-4xl font-bold mb-6 text-secondary-main">
              What they are talking about us?
            </h1>

            <p className="text-slate-600 mb-4">
              Our user is success in finding their dream homes reflects the ease
              and reliability of our platform. Discover how we have made their
              search effortless and rewarding.
            </p>
            <Link href="/testimonials" legacyBehavior>
              <button className="inline-block px-6 py-4 text-xl font-medium text-white bg-primary-main transition duration-300 ease-in-out hover:bg-secondary-light hover:text-white cursor-pointer">
                All Testimonials
              </button>
            </Link>
          </div>

          <div className="m-16 px-8 items-start text-left">
            <div className="card bg-secondary-main w-full shadow-xl text-white relative border-b-8 border-primary-main">
              <div className="card-body">
                <h2 className="card-title flex gap-2 text-amber-500">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </h2>
                <p className="p-8">
                  This is due to their excellent service, competitive pricing
                  and customer support. Its throughly refresing to get such a
                  personal touch. Duis aute lorem ipsum is simply free text.
                </p>
              </div>
              <div className="absolute top-0 right-0 rounded-l-full p-4 bg-primary-main">
                <IoMdQuote size={50} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsHomePage;
