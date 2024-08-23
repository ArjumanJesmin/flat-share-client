"use client";
import Image from "next/image";
import flatImage from "@/assets/slider-3.jpg";
import Link from "next/link";
import { BsBuildingsFill } from "react-icons/bs";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { GiHealthPotion } from "react-icons/gi";

const CoverSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="grid grid-cols-2">
        {/* Background Image */}
        <div className="absolute inset-0">
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
          <div className="absolute inset-0 bg-secondary-light1 opacity-50"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-start text-left text-secondary-main p-6">
          <h1 className="text-5xl font-bold mb-6">
            Find Your Perfect Flat-mate Today!
          </h1>
          <p className="my-4">
            A sleek, minimalist flat design website focused on clean aesthetics
            and intuitive user experience.
          </p>
          <Link href="/flatPost" legacyBehavior>
            <button className="inline-block px-6 py-4 text-xl font-medium text-white bg-primary-main transition duration-300 ease-in-out hover:bg-secondary-light hover:text-white cursor-pointer">
              Flat Post
            </button>
          </Link>
        </div>
        {/* Icon and Another Image */}
        <div className=" flex items-center gap-6">
          <div className="relative">
            <BsBuildingsFill
              size={60}
              className="text-primary-main mr-4 rounded-full p-4 bg-white hover:bg-secondary-light mb-2"
            />
            <MdEnergySavingsLeaf
              size={60}
              className="text-primary-main mr-4 rounded-full p-4 bg-white hover:bg-secondary-light mb-2"
            />
            <GiHealthPotion
              size={60}
              className="text-primary-main mr-4 rounded-full p-4 bg-white hover:bg-secondary-light"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverSection;
