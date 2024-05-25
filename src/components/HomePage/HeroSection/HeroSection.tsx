"use client";

import { useGetFlatQuery } from "@/redux/features/flat";

const HeroSection = () => {
  const { data, isError, isLoading, isSuccess } = useGetFlatQuery("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div className="grid grid-cols-3 m-6">
      {isSuccess &&
        data?.data?.map((flat: any) => (
          <div
            key={flat.id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={
                  flat.flatPhoto ||
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                }
                alt={flat.description}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{flat.location}</h2>
              <p>{flat.description}</p>
              <p>Rent: ${flat.rentAmount}</p>
              <p>Bedrooms: {flat.bedrooms}</p>
              <p>Amenities: {flat.amenities}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default HeroSection;
