"use client";
import Image from "next/image";
import { useState } from "react";
import ImageUploader from "./ImageUploader";
import ProductForm from "../../../../components/form/product/ProductForm";
import ImagesList from "./ImagesList";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import SelectedImages from "./SelectedImages";
import Stepper from "./Stepper";
import { useFormik } from "formik";
import { ProductsMethods } from "@/utils/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { User } from "@/utils/types";
import { toast } from "react-toastify";
import PreviewValues from "./PreviewValues";
import Dialog from "@/components/dialog/Dialog";
import FilterDialog from "@/app/produkter/FilterDialog";
import CarouselComponent from "@/components/carousel/Carousel";
import { Question } from "@phosphor-icons/react";
import IntroCarousel from "./IntroCarousel";

export interface ImageUpload extends Blob {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}
const LeggUt = () => {
  const [modal, setModal] = useState(false);
  const [introModal, setIntroModal] = useState(true);
  const [stepper, setStepper] = useState(1);
  const [selectedImages, setSelectedImages] = useState<ImageUpload[]>([]);
  const [images, setImages] = useState<ImageUpload[]>([]);
  const [savedImages, setSavedImages] = useState<ImageUpload[]>([]);
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
      // Find the first image that does not exist in savedImages
      // const firstUnsavedImage = images.find(
      //   (image: any) =>
      //     ![...savedImages, selectedImages.name].includes(image.name)
      // );
      // if (firstUnsavedImage) {
      //   setSelectedImagess(firstUnsavedImage);
      // }
      setSavedImages((prev: any) => [...prev, ...selectedImages]);
      setStepper(1);
      setSelectedImages([]);
      formik.resetForm();
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
      material: "",
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
      console.log(data);
      var formData = new FormData();
      // formData.append("files.image", selectedImages, selectedImages.name);
      selectedImages.forEach((image: any) => {
        formData.append("files.image", image, image.name);
      });
      formData.append("data", JSON.stringify(data));
      console.log(formData);
      createProduct(formData);
    },
  });
  const ProjectFormProps = {
    formik: formik,
    setSavedImages: setSavedImages,
    stepper: stepper,
    setStepper: setStepper,
  };
  const instructions = [
    {
      title: "Steg 1",
      text: "Gå ut av nettsiden, legg klærne på en flat overflate og ta bilder av dem",
      img1: "/camera-screenshot.png",
      img2: "/gallery-clothes.png",
    },
    {
      title: "Steg 2",
      text: "Når du har tatt bildene, gå tilbake til nettsiden og trykk på knappen under",
      img1: "/knapp-bilder.png",
      img2: "/velg-bilder.png",
    },
  ];
  if (images.length === 0)
    return (
      <div className="flex flex-col gap-6 text-center justify-center items-center h-screen relative">
        {/* /create a little help icon button that will open the modal when click */}

        <button
          className="absolute top-8 left-8"
          onClick={() => setIntroModal(true)}
        >
          <Question size={32} weight="thin" color="blue" />
        </button>

        {/* <p className="text-center text-xl">Laste opp klær</p> */}
        <Dialog open={introModal} setOpen={setIntroModal} height="h-[500px]">
          <IntroCarousel />
        </Dialog>
        <div>
          <p className="text-xl">Last opp bilder til dine produkter her</p>
          <ImageUploader
            setImages={setImages}
            setSelectedImages={setSelectedImages}
            setModal={setModal}
          />
        </div>
      </div>
    );
  return (
    <>
      <FilterDialog open={modal} setOpen={setModal} width="w-3/4">
        <p className="text-center m-10">Velg opp til 3 bilder</p>
        {/* <p>{bilder valgt }</p> */}
        <ImagesList
          savedImages={savedImages}
          images={images}
          setSelectedImages={setSelectedImages}
          selectedImages={selectedImages}
          setStepper={setStepper}
          formik={formik}
        />
      </FilterDialog>
      <div className="flex flex-col gap-14 relative">
        <div className="bg-white  overflow-scroll shadow flex flex-col-reverse items-center border-r-2 justify-center border-gray-200">
          <div className="p-6" onClick={() => setModal(true)}>
            <p className="text-center mb-2">Produkt {savedImages.length + 1}</p>
            <SelectedImages selectedImages={selectedImages} />
          </div>
        </div>
        <div className="">
          <ProductForm {...ProjectFormProps} />
        </div>
      </div>
    </>
  );
};

export default LeggUt;
