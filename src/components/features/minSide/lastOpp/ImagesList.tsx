import React from "react";
import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react";
import { Image as ImageType } from "@/utils/types";
import Button from "@/components/common/buttons/Button";

interface ImageListProps {
  images: any[];
  setSelectedImages: (value: ImageType[]) => void;
  selectedImages: ImageType[];
  setModal: (value: boolean) => void;
}
const ImagesList = ({
  images,
  setSelectedImages,
  selectedImages,
  setModal,
}: ImageListProps) => {
  return (
    <>
      <div className="mx-4 flex flex-wrap justify-center gap-2">
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
              className={`size-20 object-scale-down shadow-lg`}
              src={image.url}
              alt={`uploaded-image-${index}`}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <Button
          onClick={() => {
            setModal(false);
          }}
          icon="arrowRight"
        >
          Fortsett
        </Button>
      </div>
    </>
  );
};

export default ImagesList;
