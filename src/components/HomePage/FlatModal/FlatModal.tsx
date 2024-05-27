import Modal from "react-modal";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FlatModalProps } from "@/components/type/flatTypes";

const FlatModal: React.FC<FlatModalProps> = ({
  isOpen,
  onRequestClose,
  flat,
}) => {
  if (!flat) return null;

  const { location, description, rentAmount, bedrooms, amenities, flatPhotos } =
    flat?.data;

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
        <h2>{location}</h2>
        <p>{description}</p>
        <p>Rent: ${rentAmount}</p>
        <p>Bedrooms: {bedrooms}</p>
        <p>Amenities: {amenities}</p>
      </div>
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
