import Image from "next/image";
import React, { useState } from "react";

interface ImageUploaderProps {
  setImages: any;
}
const ImageUploader = ({ setImages }: ImageUploaderProps) => {
  const handleImageChange = (e: any) => {
    const files = e.target.files;
    const imageArray: any = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      const file = files[i];

      reader.onloadend = () => {
        imageArray.push(reader.result);
        if (imageArray.length === files.length) {
          setImages(imageArray);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <input
        type="file"
        id="imageInput"
        multiple
        onChange={handleImageChange}
      />

      {/* <div className="flex gap-6 justify-center">
        {images.map((image, index) => (
          <Image
            className="shadow-lg w-20"
            key={index}
            width={200}
            height={200}
            src={image}
            onClick={() => {
              setSelectedImage(image);
              console.log(image);
            }}
            alt={`uploaded-image-${index}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImageUploader;
