import { Flat } from "@/components/type/flatTypes";
import Image from "next/image";

interface FlatListProps {
  flats: any;
  total: number;
  page: number;
  limit: number;
  onPageChange: (newPage: number) => void;
}

const FlatList: React.FC<FlatListProps> = ({
  flats,
  total,
  page,
  limit,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <ul className="space-y-4 grid grid-cols-2 gap-4 lg:mx-16">
        {flats?.data?.map((flat: any) => (
          <li
            key={flat.id}
            className="p-6 bg-white rounded-lg mt-4 hover:shadow-lg transition-shadow duration-300 shadow border"
          >
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{flat.location}</h2>
                <p className="text-gray-600">{flat.description}</p>
                <p className="mt-2">
                  <span className="font-semibold">${flat.rentAmount}</span> per
                  month
                </p>
                <p>
                  <span className="font-semibold">{flat.bedrooms}</span>{" "}
                  bedrooms
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <Image
                  src={flat?.flatPhotos[0]?.imageUrl}
                  alt="Flat Image"
                  width={300}
                  height={200}
                  className="w-full md:w-48 h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span className="mx-2">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`join-item btn ${
              page === index + 1 ? "btn-active" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FlatList;
