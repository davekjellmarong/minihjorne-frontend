import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react";
import { setIn } from "formik";
import { Image as ImageType } from "@/utils/types";

interface ImageListProps {
  images: any[];
  // images: ImageUpload[];
  setSelectedImages: (value: ImageType[]) => void;
  selectedImages: ImageType[];
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
              setSelectedImages(withoutImage);
            } else if (selectedImages.length === 3) {
            } else {
              setSelectedImages([...selectedImages, image]);
              setSelectedImages([...selectedImages, image]);
            }

            // const selectedIndex = selectedImageIndexes.indexOf(index); // Check if the image index is already selected
            // if (selectedIndex !== -1) {
            //   setSelectedImageIndexes(
            //     selectedImageIndexes.filter((i) => i !== index),
            //   ); // If selected, remove it from the array
            // } else if (selectedImageIndexes.length < 3) {
            //   setSelectedImageIndexes([...selectedImageIndexes, index]); // If not selected and less than 3 images selected, add it to the array
            // }
          }}
        >
          <span
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-green-500 opacity-70 ${
              selectedImages.includes(image) ? "" : "hidden"
            } `}
          >
            <CheckCircle size={34} color={"green"} />
          </span>
          <Image
            width={75}
            height={75}
            className={`size-24 object-scale-down shadow-lg`}
            src={image.url}
            alt={`uploaded-image-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesList;
