import Image from "next/image";
import React from "react";

interface SelectedImageProps {
  selectedImage: any;
}

const SelectedImage = ({ selectedImage }: SelectedImageProps) => {
  return (
    <div className="flex justify-center">
      {selectedImage && (
        <Image
          src={URL.createObjectURL(selectedImage)}
          height={300}
          width={300}
          alt=""
          className="w-80 h-80 shadow-xl rounded"
        />
      )}
    </div>
  );
};

export default SelectedImage;
