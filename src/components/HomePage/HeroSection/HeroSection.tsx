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
    <>
      <div className="grid grid-cols-3 m-8 gap-4">
        {isSuccess &&
          data?.data?.slice(0, 3).map((flat: Flat) => {
            return (
              <div
                key={flat.id}
                className="card card-compact w-96 bg-base-100 shadow-xl m-3"
                onClick={() => handleOpenModal(flat.id)}
              >
                <Image
                  src={flat?.flatPhotos[0]?.imageUrl}
                  alt="Flat Image"
                  width={500}
                  height={300}
                  className="object-cover"
                />
                <div className="card-body">
                  <h2 className="card-title">{flat.location}</h2>
                  <p>{flat.description}</p>
                  <p>Rent: ${flat.rentAmount}</p>
                  <p>Bedrooms: {flat.bedrooms}</p>
                  <p>Amenities: {flat?.amenities}</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-cyan-500 text-white w-full">
                      Details
                    </button>
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
      {singleFlatLoading && <div>Loading flat details...</div>}
      {singleFlatError && <div>Error loading flat details.</div>}
    </>
  );
};

export default HeroSection;
