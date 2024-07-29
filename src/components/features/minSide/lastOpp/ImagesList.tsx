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
  formik: any;
}
const ImagesList = ({
  images,
  setSelectedImages,
  selectedImages,
  setModal,
  formik,
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
                formik.setFieldValue("image", withoutImage);
              } else if (selectedImages.length === 3) {
              } else {
                setSelectedImages([...selectedImages, image]);
                formik.setFieldValue("image", [...selectedImages, image]);
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
      <div className="mt-4 flex flex-col items-center gap-4">
        {selectedImages.length === 0 && (
          <div className="text-center">
            <span className="text-sm text-red-500">
              Du må velge minst 1 bilde
            </span>
          </div>
        )}
        <Button
          onClick={() => {
            setModal(false);
          }}
          icon="arrowRight"
          disabled={selectedImages.length === 0}
        >
          Fortsett
        </Button>
      </div>
    </>
  );
};

export default ImagesList;
