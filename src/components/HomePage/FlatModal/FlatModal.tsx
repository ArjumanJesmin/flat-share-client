import Modal from "react-modal";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FlatModalProps } from "@/components/type/flatTypes";
import { getUserInfo } from "@/components/service/actions/auth.service";
import { useState } from "react";
import { useFlatSharePostMutation } from "@/redux/features/flatShare";
import { toast } from "sonner";

const FlatModal: React.FC<FlatModalProps> = ({
  isOpen,
  onRequestClose,
  flat,
}) => {
  const userInfo = getUserInfo();
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [flatSharePost] = useFlatSharePostMutation();

  if (!flat) return null;

  const { location, description, rentAmount, bedrooms, amenities, flatPhotos } =
    flat?.data;

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!termsAccepted) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    const requestData = {
      contactInfo: userInfo?.email,
      additionalInfo,
      flatId: flat.data.id,
      termsAccepted,
    };

    try {
      await flatSharePost(requestData);
      toast.success("Flat share request submitted successfully!");
      onRequestClose();
    } catch (error) {
      console.error("Error submitting flat share request:", error);
      toast.error("Error submitting flat share request!");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Flat Details"
    >
      <div className="relative p-4 w-1/3 mx-auto bg-white rounded-lg">
        <div
          className="absolute top-1 right-1 cursor-pointer text-xl text-gray-500"
          onClick={onRequestClose}
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        {flatPhotos.length > 0 ? (
          <Carousel showThumbs={false} infiniteLoop>
            {flatPhotos.map((photo: any) => (
              <div key={photo.id} className="carousel-image-container">
                <Image
                  src={photo.imageUrl}
                  alt="Flat Image"
                  width={500}
                  height={300}
                  objectFit="cover"
                  className="carousel-image"
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <Image
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Default Image"
            width={500}
            height={300}
            objectFit="cover"
            className="carousel-image"
          />
        )}
        <h2>Location: {location}</h2>
        <p>Description: {description}</p>
        <p>Rent: ${rentAmount}</p>
        <p>Bedrooms: {bedrooms}</p>
        <p>Amenities: {amenities}</p>
      </div>

      {/* handle Submit form*/}
      <form
        onSubmit={handleSubmit}
        className="mt-4 w-1/2 mx-auto border shadow-lg bg-slate-50 p-4 rounded-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-center font-semibold py-3">
            Your Contact Information
          </label>
          <input
            type="text"
            value={userInfo?.email}
            className="w-full px-3 py-2 border rounded bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Additional Information</label>
          <input
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2"
            />
            I agree to the terms and conditions
          </label>
        </div>
        <div className="mx-auto text-center my-2">
          <button
            type="submit"
            disabled={!termsAccepted}
            className="btn bg-blue-500 text-white"
          >
            Submit Flat Share Request
          </button>
        </div>
      </form>

      {/* Additional styles */}
      <style jsx>{`
        .carousel-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 300px;
          background-color: #f0f0f0;
        }
        .carousel-image {
          max-width: 100%;
          max-height: 100%;
        }
      `}</style>
    </Modal>
  );
};

export default FlatModal;
