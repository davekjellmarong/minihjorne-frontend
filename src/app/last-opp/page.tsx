"use client";
import Image from "next/image";
import { useState } from "react";
import ImageUploader from "./ImageUploader";
import ProductForm from "../../components/form/product/ProductForm";
import ImagesList from "./ImagesList";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
const LeggUt = () => {
  const [selectedImage, setSelectedImage] = useState<any>("");
  const [images, setImages] = useState([]);
  const [savedImages, setSavedImages] = useState(["shoe.jpeg"]);
  useAutoLogIn();

  return (
    <div className="flex flex-col justify-evenly gap-10 items-center">
      <ImageUploader
        setImages={setImages}
        setSelectedImage={setSelectedImage}
      />
      <ImagesList
        savedImages={savedImages}
        images={images}
        setSelectedImage={setSelectedImage}
      />
      <div className="flex justify-evenly items-start w-full">
        <div className="w-1/4 flex flex-col gap-12 items-center">
          {selectedImage && (
            <Image
              src={URL.createObjectURL(selectedImage)}
              height={300}
              width={300}
              alt=""
              className="w-80 h-80 shadow-xl"
            />
          )}
        </div>
        <div className="flex flex-col items-center gap-10 w-2/4">
          {images?.length > 0 && (
            <ProductForm
              setSavedImages={setSavedImages}
              selectedImage={selectedImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LeggUt;
