"use client";

import { useGetFlatShareQuery } from "@/redux/features/flatShare";

const MyShareFlatRequest = () => {
  const { data, error, isLoading } = useGetFlatShareQuery("");

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error loading flat requests.</div>;
  }

  const flatShares = data?.data || [];

  return (
    <div className="grid grid-cols-2 gap-4">
      {flatShares.map((flatData: any, index: any) => {
        const {
          contactInfo,
          additionalInfo,
          status,
          flat: { location, description, rentAmount, bedrooms, amenities },
        } = flatData;

        return (
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Flat Share Request</h2>
              <p>
                <strong>Contact Info:</strong> {contactInfo}
              </p>
              <p>
                <strong>Additional Info:</strong> {additionalInfo}
              </p>
              <p>
                <strong>Status:</strong> {status}
              </p>
              <h3 className="mt-4">Flat Details</h3>
              <p>
                <strong>Location:</strong> {location}
              </p>
              <p>
                <strong>Description:</strong> {description}
              </p>
              <p>
                <strong>Rent Amount:</strong> ${rentAmount}
              </p>
              <p>
                <strong>Bedrooms:</strong> {bedrooms}
              </p>
              <p>
                <strong>Amenities:</strong>{" "}
                {Array.isArray(amenities) ? amenities.join(", ") : amenities}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyShareFlatRequest;
