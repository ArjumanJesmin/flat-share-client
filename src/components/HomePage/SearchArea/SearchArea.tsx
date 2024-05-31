"use client";

import { useState } from "react";
import FlatList from "./FlatList";
import { useGetFlatQuery } from "@/redux/features/flat";
import SearchBar from "@/components/Form/SearchBar";

const SearchArea: React.FC = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    location: "",
    priceRange: "",
    bedrooms: "",
    page: 1,
    limit: 4,
  });

  const { data, isLoading, isError } = useGetFlatQuery(searchCriteria);

  const handleSearch = (criteria: Record<string, any>) => {
    setSearchCriteria({ ...searchCriteria, ...criteria });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading flats</div>;
  }
  const totalFlats = data?.meta?.total ?? 0;

  return (
    <div className="flex  flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-5xl font-bold my-6">
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
