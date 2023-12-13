import React from "react";
import Image from "next/image";

interface ImageListProps {
  images: any[];
  setSelectedImage: (value: any) => void;
  savedImages: any;
}
const ImagesList = ({
  images,
  setSelectedImage,
  savedImages,
}: ImageListProps) => {
  console.log(images);
  console.log(savedImages);

  return (
    <div className="flex justify-center overflow-scroll gap-4">
      {images?.map((image, index) => (
        <div
          className={`${
            savedImages.includes(image.name) ? "bg-green-500" : ""
          }`}
          key={index}
        >
          <Image
            className={`shadow-lg h-full w-40 ${
              savedImages.includes(image.name) ? "opacity-50" : ""
            }`}
            width={200}
            height={200}
            src={URL.createObjectURL(image)}
            onClick={() => {
              setSelectedImage(image);
            }}
            alt={`uploaded-image-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesList;
