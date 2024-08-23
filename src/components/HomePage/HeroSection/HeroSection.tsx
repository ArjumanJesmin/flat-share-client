"use client";

import { useState } from "react";
import Image from "next/image";
import {
  useGetFlatDataQuery,
  useGetSingleFlatQuery,
} from "@/redux/features/flat";
import dynamic from "next/dynamic";
import { Flat } from "@/components/type/flatTypes";
import Link from "next/link";

const HeroSection = () => {
  const { data, isError, isLoading, isSuccess } = useGetFlatDataQuery({});
  const [selectedFlatId, setSelectedFlatId] = useState(null);

  const {
    data: singleFlat,
    isLoading: singleFlatLoading,
    isError: singleFlatError,
  } = useGetSingleFlatQuery(selectedFlatId, { skip: !selectedFlatId });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (flatId: any) => {
    setSelectedFlatId(flatId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFlatId(null);
  };

  if (isLoading) {
    return <span className="loading loading-bars loading-md"></span>;
  }

  if (isError) {
    return (
      <div>
        First
        <Link className="font-bold text-center" href="/login">
          Login
        </Link>
      </div>
    );
  }

  // Lazy load the TableRow component
  const FlatModal = dynamic(() => import("../FlatModal/FlatModal"), {
    ssr: false,
  });

  return (
    <div>
      <div className="grid grid-cols-3 m-16 gap-5">
        {data?.data?.slice(0, 6).map((flat: Flat) => {
          return (
            <div
              key={flat.id}
              className="card card-compact w-96 shadow-xl m-3"
              onClick={() => handleOpenModal(flat?.id)}
            >
              <div className="relative">
                <Image
                  src={flat?.flatPhotos[0]?.imageUrl}
                  width={400}
                  height={400}
                  alt="Flat Image"
                  className="object-cover rounded-tl-none rounded-tr-none"
                />
                <div className="absolute inset-0 bg-secondary-light opacity-0 hover:opacity-60 transition-opacity rounded-b-3xl">
                  <div className="card-body justify-center items-start my-7 text-white">
                    <h2 className="card-title">{flat?.location}</h2>
                    <p className="description opacity-100 hover:opacity-70 transition-opacity">
                      {flat.description}
                    </p>
                    <p className="rent opacity-100 hover:opacity-70 transition-opacity">
                      Rent: ${flat?.rentAmount}
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-primary-main text-white w-full">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && !singleFlatLoading && !singleFlatError && (
        <FlatModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          flat={singleFlat}
        />
      )}
    </div>
  );
};

export default HeroSection;
