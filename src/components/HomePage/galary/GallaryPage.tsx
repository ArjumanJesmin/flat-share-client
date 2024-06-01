// pages/gallery.tsx

import Image from "next/image";
import one from "@/assets/galary/first.jpg";
import two from "@/assets/galary/two.jpg";
import three from "@/assets/galary/three.jpg";
import four from "@/assets/galary/four.jpg";
import five from "@/assets/galary/five.jpg";
import six from "@/assets/galary/six.jpg";
import seven from "@/assets/galary/seven.jpg";
import eight from "@/assets/galary/eight.jpg";

const GalleryPage: React.FC = () => {
  const images = [
    { src: one, alt: "One Image", width: 350, height: 100 },
    { src: two, alt: "Two Image", width: 350, height: 100 },
    { src: three, alt: "Three Image", width: 350, height: 100 },
    { src: four, alt: "Four Image", width: 350, height: 100 },
    { src: five, alt: "One Image", width: 350, height: 100 },
    { src: six, alt: "Two Image", width: 350, height: 100 },
    { src: seven, alt: "Three Image", width: 350, height: 100 },
    { src: eight, alt: "Four Image", width: 350, height: 100 },
  ];

  return (
    <>
      <div className="container mx-auto py-10  mb-10 border shadow-lg bg-slate-50 gradient-text">
        <h1 className="text-3xl font-bold mb-6 text-center"> Flat Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-64">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
