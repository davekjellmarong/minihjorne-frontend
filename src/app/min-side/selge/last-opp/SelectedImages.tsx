import Image from "next/image";
import React from "react";

interface SelectedImageProps {
  selectedImages: any[];
}

const SelectedImages = ({ selectedImages }: SelectedImageProps) => {
  return (
    <div className="flex justify-start sm:justify-center">
      {selectedImages.map((image) => {
        return (
          <Image
            key={image.name}
            src={URL.createObjectURL(image)}
            height={300}
            width={300}
            alt=""
            className="size-32 max-w-none ml-4 sm:ml-0 sm:w-80 sm:h-80 shadow-xl rounded"
          />
        );
      })}
    </div>
  );
};

export default SelectedImages;
