import React, { useState } from "react";
import {
  useDeleteFlatMutation,
  useUpdateMyFlatMutation,
} from "@/redux/features/flat";
import { Flat } from "@/components/type/flatTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons/faSync";
import { toast } from "sonner";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TableRow = ({ flats }: any) => {
  const [updateFlat, { isLoading, isSuccess, isError }] =
    useUpdateMyFlatMutation();
  const [
    deleteFlat,
    {
      isLoading: isDeleting,
      isSuccess: deleteSuccess,
      isError: deleteError,
      reset,
    },
  ] = useDeleteFlatMutation();

  const [deletedFlats, setDeletedFlats] = useState<string[]>([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFlat, setSelectedFlat] = useState<Flat | null>(null);
  const [formData, setFormData] = useState({
    location: "",
    description: "",
    rentAmount: "",
    bedrooms: "",
    amenities: "",
  });

  const handleUpdateClick = (flat: any) => {
    setSelectedFlat(flat);
    setFormData({
      location: flat.location,
      description: flat.description,
      rentAmount: flat.rentAmount.toString(),
      bedrooms: flat.bedrooms.toString(),
      amenities: flat.amenities,
    });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFlat(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFlat) {
      try {
        await updateFlat({
          id: selectedFlat.id,
          ...formData,
          rentAmount: parseFloat(formData.rentAmount),
          bedrooms: parseInt(formData.bedrooms),
        }).unwrap();
        handleCloseModal();
      } catch (error) {
        console.error(
          `Failed to update flat with id ${selectedFlat.id}:`,
          error
        );
      }
    }
  };
  const handleDeleteClick = async (flatId: string) => {
    try {
      await deleteFlat(flatId).unwrap();
      setDeletedFlats((prev) => [...prev, flatId]);
      toast.success("Flat deleted successfully");
    } catch (error) {
      console.error(`Failed to delete flat with id ${flatId}:`, error);
    }
  };

  return (
    <>
      {flats?.data?.map((singleData: any, index: number) => (
        <tr key={singleData.id}>
          <th>{index + 1}</th>
          <td>{singleData.location}</td>
          <td>{singleData.description}</td>
          <td>{singleData.rentAmount}</td>
          <td>{singleData.bedrooms}</td>
          <td>{singleData.amenities}</td>
          <td>{new Date(singleData.createdAt).toLocaleString()}</td>
          <td>{new Date(singleData.updatedAt).toLocaleString()}</td>
          <button
            className="text-green-500 text-2xl items-center justify-center xy-4"
            onClick={() => handleUpdateClick(singleData)}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading loading-bars loading-lg"></span>
            ) : (
              <FaEdit />
            )}
          </button>
          <td>
            <button
              className="text-red-500 text-2xl items-center justify-center"
              onClick={() => handleDeleteClick(singleData?.id)}
              disabled={isDeleting}
            >
              {isLoading ? (
                <span className="loading loading-bars loading-lg"></span>
              ) : (
                <MdDeleteForever />
              )}
            </button>
          </td>
        </tr>
      ))}
      {isSuccess && (
        <p className="text-green-500">Data updated successfully!</p>
      )}
      {isError && (
        <p className="text-red-500">Failed to update data. Please try again.</p>
      )}

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <button
              className="text-gray-500 hover:text-gray-800 float-right"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location:
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Rent Amount:
                  <input
                    type="number"
                    name="rentAmount"
                    value={formData.rentAmount}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bedrooms:
                  <input
                    type="number"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Amenities:
                  <input
                    type="text"
                    name="amenities"
                    value={formData.amenities}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex justify-center items-center"
                >
                  {isLoading ? (
                    <FontAwesomeIcon icon={faSync} spin />
                  ) : (
                    <span>Update</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TableRow;
