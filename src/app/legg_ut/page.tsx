"use client";
import Image from "next/image";
import { useState } from "react";
import ImageUploader from "./ImageUploader";
import ProductForm from "../../components/form/product/ProductForm";
import ImagesList from "./ImagesList";
import { tailwindColors } from "@/utils/constants";
const LeggUt = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [images, setImages] = useState([]);

  return (
    <div className="flex flex-col justify-evenly gap-10 items-center">
      <ImageUploader setImages={setImages} />
      <ImagesList images={images} setSelectedImage={setSelectedImage} />
      <div className="flex justify-center items-start w-full">
        <div className="w-1/3 flex flex-col gap-12 items-center">
          <Image
            src={selectedImage}
            height={200}
            width={200}
            alt=""
            className="w-80 h-80 shadow-xl"
          />
        </div>
        <div className="flex flex-col items-center gap-10 w-2/3">
          <ProductForm selectedImage={selectedImage} />
        </div>
      </div>
    </div>
  );
};

export default LeggUt;
