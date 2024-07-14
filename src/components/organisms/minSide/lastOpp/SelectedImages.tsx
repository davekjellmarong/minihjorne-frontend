import { ArrowArcRight, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

interface SelectedImageProps {
  selectedImages: any[];
  images: any[];
  setSelectedImages: (images: any[]) => void;
}

const SelectedImages = ({
  selectedImages,
  setSelectedImages,
}: SelectedImageProps) => {
  // const selectedImages = images.filter((_, index) =>
  //   selectedImageIndexes.includes(index),
  // );
  // const selecedImages = useMemo(() => {
  //   return images.filter((_, index) => selectedImageIndexes.includes(index));
  // }, [images, selectedImageIndexes]);
  return (
    <div className="flex w-full justify-center sm:gap-10">
      {selectedImages.map((image, index) => {
        return (
          <div key={image.name} className="flex flex-col items-center gap-2">
            <div className="flex h-10 flex-col justify-end">
              {index > 0 && (
                <ArrowLeft
                  onClick={() => {
                    const temp = [...selectedImages];
                    temp[index] = selectedImages[index - 1];
                    temp[index - 1] = selectedImages[index];
                    setSelectedImages(temp);
                  }}
                />
              )}
              <p>{index + 1}</p>
            </div>
            <Image
              src={image.url}
              height={300}
              width={300}
              alt=""
              className="ml-4 size-28 max-w-none rounded shadow"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SelectedImages;
