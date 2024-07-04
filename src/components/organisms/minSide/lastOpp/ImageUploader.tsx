"use client";
import React from "react";
interface ImageUploaderProps {
  setImages: any;
  setModal: any;
}
const ImageUploader = ({ setImages, setModal }: ImageUploaderProps) => {
  const handleImageChange = (e: any) => {
    console.log(e.target.files);
    // setSelectedImages(e.target.files[0]);
    // setImages(Object.values(e.target.files));
    setModal(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        className="file:mr-4 file:cursor-pointer file:rounded file:border-0 file:bg-violet-500 
      file:px-12 file:py-10
      file:text-lg file:font-semibold
      file:text-white file:shadow-lg"
        type="file"
        id="imageInput"
        multiple
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUploader;
