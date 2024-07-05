"use client";
import Image from "next/image";
import flatImage from "@/assets/flat.jpg";
import Link from "next/link";

const CoverSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
      <Image
        alt="Mountains"
        src={flatImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="text-5xl font-bold mb-6">
          Find Your Perfect Flat-mate Today!
        </h1>
        <Link href="/flatPost" legacyBehavior>
          <p className="inline-block px-8 py-4 text-xl font-medium text-pink-500 bg-white rounded-full transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
            Share Your Flat
          </p>
        </Link>
      </div>
    </section>
  );
};

export default CoverSection;
