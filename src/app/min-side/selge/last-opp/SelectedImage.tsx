import Image from "next/image";
import React from "react";

interface SelectedImageProps {
  selectedImage: any;
}

const SelectedImage = ({ selectedImage }: SelectedImageProps) => {
  return (
    <div className="flex justify-start sm:justify-center">
      {selectedImage && (
        <Image
          src={URL.createObjectURL(selectedImage)}
          height={300}
          width={300}
          alt=""
          className="size-32 max-w-none ml-4 sm:ml-0 sm:w-80 sm:h-80 shadow-xl rounded"
        />
      )}
    </div>
  );
};

export default SelectedImage;
