"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetFlatDataQuery } from "@/redux/features/flat";
import Image from "next/image";
import cardBg from "@/assets/bg-1.jpg";

const AutoSlider = () => {
  const { data, isError } = useGetFlatDataQuery({});

  if (isError) {
    return <div>Error loading flats</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="relative flex justify-center items-center h-[450px]">
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
        {/* Background overlay */}
        <div className="absolute inset-0 bg-secondary-main opacity-90"></div>
      </div>
      <div className="relative z-10 w-3/4 mx-auto my-32">
        <Slider {...settings}>
          {data?.data?.map((item: any, index: number) => (
            <div
              key={index}
              className="card w-60 ml-4 h-44 border-t-8 border-primary-main shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title text-white">{item.location}</h2>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AutoSlider;
