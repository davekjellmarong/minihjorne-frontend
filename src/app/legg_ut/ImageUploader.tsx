"use client";
import React from "react";
interface ImageUploaderProps {
  setSelectedImage: any;
  setImages: any;
}
const ImageUploader = ({ setSelectedImage, setImages }: ImageUploaderProps) => {
  const handleImageChange = (e: any) => {
    setSelectedImage(e.target.files[0]);
    setImages(Object.values(e.target.files));
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <input
        type="file"
        id="imageInput"
        multiple
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUploader;
