"use client";

import { useState } from "react";
import FlatList from "./FlatList";
import { useGetFlatQuery } from "@/redux/features/flat";
import SearchBar from "@/components/Form/SearchBar";
import Image from "next/image";
import cardBg from "@/assets/card_bg.png";

const SearchArea: React.FC = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    location: "",
    priceRange: "",
    bedrooms: "",
    page: 1,
    limit: 4,
  });

  const { data, isError } = useGetFlatQuery(searchCriteria);

  const handleSearch = (criteria: Record<string, any>) => {
    setSearchCriteria({ ...searchCriteria, ...criteria });
  };

  if (isError) {
    return <div>Error loading flats</div>;
  }
  const totalFlats = data?.meta?.total ?? 0;

  return (
    <div className="flex relative flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="absolute inset-0">
        <Image
          alt="Background Image"
          src={cardBg}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold my-6 text-secondary-main">
          Find Your Perfect Flat-mate Today!
        </h1>
      </div>
      <SearchBar onSearch={handleSearch} />
      {data && (
        <FlatList
          flats={data.flats}
          total={totalFlats}
          page={searchCriteria.page}
          limit={searchCriteria.limit}
          onPageChange={(newPage) =>
            setSearchCriteria({ ...searchCriteria, page: newPage })
          }
        />
      )}
    </div>
  );
};

export default SearchArea;
