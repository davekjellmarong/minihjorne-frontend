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
import Link from "next/link";

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
  const [introModal, setIntroModal] = useState(false);
  const [stepper, setStepper] = useState(1);
  const [selectedImages, setSelectedImages] = useState<ImageUpload[]>([]);
  const [images, setImages] = useState<ImageUpload[]>([]);
  const [savedImages, setSavedImages] = useState<ImageUpload[]>([]);
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
      price: 0,
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
  if (images.length === 0) {
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
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:gap-4 ">
          <Link
            href="/min-side/selge/last-opp/bilder"
            key={1}
            className="flex flex-col justify-center gap-2 border-2 border-gray-200 p-8 rounded w-96 hover:bg-gray-100 hover:border-gray-300"
          >
            <p className="font-bold text-lg">Last opp bilder</p>
            <p className="text-gray-500">
              Dette er det første steget når du skal selge klær. Start med å
              laste opp bildene du skal bruke til å swlge
            </p>
          </Link>
          <Link
            href="/min-side/selge/last-opp/produkt"
            key={1}
            className="flex flex-col justify-center gap-2 border-2 border-gray-200 p-8 rounded w-96 hover:bg-gray-100 hover:border-gray-300"
          >
            <p className="font-bold text-lg">Registrer dine produkter</p>
            <p className="text-gray-500/p">
              Dette er det andre steget når du skal selge klær. Lag pruduktene
              dine ogknyytt dem til bildene du har lastet opp
            </p>
          </Link>
        </div>
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
  }
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
