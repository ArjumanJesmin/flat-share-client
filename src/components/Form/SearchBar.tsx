import { useState, FormEvent } from "react";

interface Props {
  onSearch: (criteria: Record<string, any>) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState("location");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let searchCriteria: Record<string, any> = { page: 1 };

    if (activeTab === "location") {
      searchCriteria.location = location;
    } else if (activeTab === "priceRange") {
      searchCriteria.priceRange = priceRange;
    } else if (activeTab === "bedrooms") {
      searchCriteria.bedrooms = bedrooms;
    }

    onSearch(searchCriteria);
  };

  return (
    <div>
      <div className="flex justify-center mt-8">
        <button
          className={`px-4 py-2 ${
            activeTab === "location"
              ? "bg-primary-main text-white"
              : "bg-gray-200 text-black"
          } rounded-lg`}
          onClick={() => setActiveTab("location")}
        >
          Location
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "priceRange"
              ? "bg-primary-main text-white"
              : "bg-gray-200 text-black"
          } rounded-lg ml-2`}
          onClick={() => setActiveTab("priceRange")}
        >
          Price Range
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "bedrooms"
              ? "bg-primary-main text-white"
              : "bg-gray-200 text-black"
          } rounded-lg ml-2`}
          onClick={() => setActiveTab("bedrooms")}
        >
          Bedrooms
        </button>
      </div>
      <form onSubmit={handleSubmit} className="mt-4 w-full mx-auto">
        <div className="flex">
          {activeTab === "location" && (
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-main"
              placeholder="Search by location"
            />
          )}
          {activeTab === "priceRange" && (
            <input
              type="text"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-main"
              placeholder="Search by price range"
            />
          )}
          {activeTab === "bedrooms" && (
            <input
              type="number"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-main"
              placeholder="Search by number of bedrooms"
            />
          )}
          <button
            type="submit"
            className="px-6 py-2 bg-primary-main text-white rounded-lg ml-2 hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
