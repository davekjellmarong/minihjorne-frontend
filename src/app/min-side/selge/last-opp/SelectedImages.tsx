import Image from "next/image";
import React from "react";

interface SelectedImageProps {
  selectedImages: any[];
  images: any[];
}

const SelectedImages = ({ selectedImages }: SelectedImageProps) => {
  // const selectedImages = images.filter((_, index) =>
  //   selectedImageIndexes.includes(index),
  // );
  // const selecedImages = useMemo(() => {
  //   return images.filter((_, index) => selectedImageIndexes.includes(index));
  // }, [images, selectedImageIndexes]);
  return (
    <div className="flex w-full justify-center sm:gap-10">
      {selectedImages.map((image) => {
        return (
          <Image
            key={image.name}
            src={URL.createObjectURL(image)}
            height={300}
            width={300}
            alt=""
            className="ml-4 size-32 max-w-none rounded shadow-xl"
          />
        );
      })}
    </div>
  );
};

export default SelectedImages;
