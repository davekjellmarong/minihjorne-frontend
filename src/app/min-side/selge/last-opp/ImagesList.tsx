import React from "react";
import Image from "next/image";
import { ImageUpload } from "./page";
import { CheckCircle } from "@phosphor-icons/react";

interface ImageListProps {
  images: ImageUpload[];
  setSelectedImages: (value: ImageUpload[]) => void;
  selectedImages: ImageUpload[];
  savedImages: ImageUpload[];
  setStepper: (value: number) => void;
  formik: any;
}
const ImagesList = ({
  images,
  setSelectedImages,
  savedImages,
  selectedImages,
  setStepper,
  formik,
}: ImageListProps) => {
  return (
    <div className="flex justify-center flex-wrap gap-4 mx-12">
      {images?.map((image, index) => (
        <div
          className="relative"
          key={image.name}
          onClick={() => {
            if (selectedImages.includes(image)) {
              setSelectedImages(selectedImages.filter((img) => img !== image));
            } else if (selectedImages.length === 3) {
            } else setSelectedImages([...selectedImages, image]);
          }}
        >
          <span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white opacity-70 ${
              selectedImages.includes(image) ? "" : "hidden"
            } `}
          >
            <CheckCircle size={34} color={"black"} />
          </span>
          <Image
            width={75}
            height={75}
            className={`shadow-lg size-24 object-scale-down`}
            src={URL.createObjectURL(image)}
            alt={`uploaded-image-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesList;
