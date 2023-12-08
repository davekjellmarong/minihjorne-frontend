import React from "react";
import Image from "next/image";

interface ImageListProps {
  images: any[];
  setSelectedImage: (value: any) => void;
}
const ImagesList = ({ images, setSelectedImage }: ImageListProps) => {
  return (
    <div className="flex justify-center overflow-scroll">
      {images.map((image, index) => (
        <Image
          className="shadow-lg w-20"
          key={index}
          width={200}
          height={200}
          src={image}
          onClick={() => {
            setSelectedImage(image);
            console.log(image);
          }}
          alt={`uploaded-image-${index}`}
        />
      ))}
    </div>
  );
};

export default ImagesList;
