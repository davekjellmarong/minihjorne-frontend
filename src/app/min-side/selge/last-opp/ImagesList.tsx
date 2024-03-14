import React from "react";
import Image from "next/image";
import { ImageUpload } from "./page";
import { CheckCircle } from "@phosphor-icons/react";

interface ImageListProps {
  images: ImageUpload[];
  setSelectedImages: (value: ImageUpload[]) => void;
  selectedImages: ImageUpload[];
}
const ImagesList = ({
  images,
  setSelectedImages,
  selectedImages,
}: ImageListProps) => {
  return (
    <div className="mx-12 flex flex-wrap justify-center gap-4">
      {images?.map((image, index) => (
        <div
          className="relative"
          key={image.name}
          onClick={() => {
            if (selectedImages.includes(image)) {
              const withoutImage = selectedImages.filter(
                (img) => img !== image,
              );

              setSelectedImages(withoutImage);
            } else if (selectedImages.length === 3) {
            } else setSelectedImages([...selectedImages, image]);
          }}
        >
          <span
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white opacity-70 ${
              selectedImages.includes(image) ? "" : "hidden"
            } `}
          >
            <CheckCircle size={34} color={"black"} />
          </span>
          <Image
            width={75}
            height={75}
            className={`size-24 object-scale-down shadow-lg`}
            src={URL.createObjectURL(image)}
            alt={`uploaded-image-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesList;
