"use client";
import Image from "next/image";
import { useState } from "react";
import ImageUploader from "./ImageUploader";
import ProductForm from "../../components/form/product/ProductForm";
import ImagesList from "./ImagesList";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import SelectedImage from "./SelectedImage";
import Stepper from "./Stepper";
import { useFormik } from "formik";
import { ProductsMethods } from "@/utils/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { User } from "@/utils/types";
import { toast } from "react-toastify";
import PreviewValues from "./PreviewValues";
const LeggUt = () => {
  const [stepper, setStepper] = useState(1);
  const [selectedImage, setSelectedImage] = useState<any>("");
  const [images, setImages] = useState([]);
  const [savedImages, setSavedImages] = useState<string[]>([]);
  const [stepper1, setStepper1] = useState(0);
  const [stepper2, setStepper2] = useState(700);
  const [stepper3, setStepper3] = useState(1400);
  useAutoLogIn();
  const { data: jwt } = useQuery({
    queryKey: ["jwt"],
  });
  const { data: user } = useQuery<User>({
    queryKey: ["login-user"],
  });
  const { mutate: createProduct, isPaused: loading } = useMutation({
    mutationFn: (values: any) => {
      return ProductsMethods.post(values, jwt);
    },
    onSuccess: (data) => {
      console.log(data);
      toast.info(
        `Produktet '${
          formik.values.colorsNorwegianName
        } ${formik.values.categoryName.toLowerCase()}' lagret`
      );
      setSavedImages((prev: any) => [...prev, selectedImage.name]);
    },
    onError: (err: any) => {
      console.log(err);
      toast.error(`Produkt kunne ikke lagres`);
    },
  });

  const formik = useFormik({
    initialValues: {
      colors: "",
      colorsNorwegianName: "",
      materials: "",
      materialName: "",
      brand: "",
      price: "",
      category: "",
      categoryName: "",
      state: "",
      sex: "",
      tags: "",
      user: 0,
    },

    onSubmit: (values) => {
      const userId: any = user?.id;
      const data = { ...values, user: userId };
      var formData = new FormData();
      formData.append("files.image", selectedImage, selectedImage.name);
      formData.append("data", JSON.stringify(data));
      createProduct(formData);
    },
  });
  const ProjectFormProps = {
    formik: formik,
    setSavedImages: setSavedImages,
    selectedImage: selectedImage,
    stepper: stepper,
    setStepper: setStepper,
  };
  if (!selectedImage)
    return (
      <div className="flex flex-col gap-6 justify-center items-center h-screen">
        <p className="text-xl">Last opp bilder til dine produkter her</p>
        <ImageUploader
          setImages={setImages}
          setSelectedImage={setSelectedImage}
        />
      </div>
    );
  return (
    <div className="flex flex-col">
      <p className="text-center p-6 border-b-2 border-gray-200 text-gray-700 text-lg">
        Registrer dine barne klær
      </p>
      <div className="flex">
        <div className="w-2/5 flex flex-col gap-12 items-center border-r-2 justify-center border-gray-200">
          <div className="h-2/6 border-b-2 border-gray-200 w-full my-4">
            <p className="text-center mb-2">{images.length} bilder</p>
            <ImagesList
              savedImages={savedImages}
              images={images}
              setSelectedImage={setSelectedImage}
              selectedImage={selectedImage}
            />
          </div>
          <div className="h-4/6 ">
            <p className="text-center mb-2">Produkt 1 av {images.length}</p>
            <SelectedImage selectedImage={selectedImage} />
            <PreviewValues formik={formik} />
          </div>
        </div>
        <div className=" w-3/5 flex flex-col justify-evenly gap-14 mt-14 ml-32 items-start">
          <div className="flex flex-col items-center gap-2 w-3/4">
            <p className="text-center mb-6">Registrer produktet ditt her</p>
            <Stepper stepper={stepper} setStepper={setStepper} />
          </div>
          <div className="flex flex-col items-center gap-10 w-3/4">
            {images?.length > 0 && <ProductForm {...ProjectFormProps} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeggUt;
