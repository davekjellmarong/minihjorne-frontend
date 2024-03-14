"use client";
import { useMemo, useState } from "react";
import ImageUploader from "./ImageUploader";
import ProductForm from "../../../../components/form/product/ProductForm";
import ImagesList from "./ImagesList";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import SelectedImages from "./SelectedImages";
import { useFormik } from "formik";
import { ProductsMethods } from "@/utils/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { User } from "@/utils/types";
import { toast } from "react-toastify";
import Dialog from "@/components/dialog/Dialog";
import FilterDialog from "@/app/produkter/FilterDialog";
import { Question } from "@phosphor-icons/react";
import IntroCarousel from "./IntroCarousel";
import Link from "next/link";
import LoadingOverlay from "@/components/loading/LoadingOverlay";

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
  const [selectedImages, setSelectedImages] = useState<ImageUpload[]>([]);
  const [selectedImageIndexes, setSelectedImageIndexes] = useState<number[]>(
    [],
  );
  const [images, setImages] = useState<ImageUpload[]>([]);
  const [nextProduct, setNextProduct] = useState(false);
  useAutoLogIn();
  const { data: jwt } = useQuery({
    queryKey: ["jwt"],
  });
  const { data: user } = useQuery<User>({
    queryKey: ["login-user"],
  });
  const { mutate: createProduct, isPending: loading } = useMutation({
    mutationFn: (values: any) => {
      return ProductsMethods.post(values, jwt);
    },
    onSuccess: (data) => {
      toast.info(
        `Produktet '${
          formik.values.colorsNorwegianName
        } ${formik.values.categoryName.toLowerCase()}' lagret`,
      );
      setImages((prev: any) =>
        prev.filter((image: any) => !selectedImages.includes(image)),
      );

      setSelectedImages([]);
      formik.resetForm();
      setNextProduct(true);
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
      // material: "",
      brand: "",
      price: 0,
      category: "",
      categoryName: "",
      state: "",
      sex: "",
      // tags: "",
      user: 0,
    },

    onSubmit: (values) => {
      const userId: any = user?.id;
      const data = { ...values, user: userId };
      var formData = new FormData();
      selectedImages.forEach((image: any) => {
        formData.append("files.image", image, image.name);
      });
      formData.append("data", JSON.stringify(data));
      createProduct(formData);
    },
  });
  if (images.length === 0) {
    return (
      <div className="relative flex h-screen flex-col items-center justify-center gap-6 text-center">
        {/* /create a little help icon button that will open the modal when click */}

        <button
          className="absolute left-8 top-8"
          onClick={() => setIntroModal(true)}
        >
          <Question size={32} weight="thin" color="blue" />
        </button>

        {/* <p className="text-center text-xl">Laste opp klær</p> */}
        <Dialog open={introModal} setOpen={setIntroModal} height="h-[500px]">
          <IntroCarousel />
        </Dialog>
        {/* <div className="flex flex-col items-center gap-10 sm:flex-row sm:gap-4 ">
          <Link
            href="/min-side/selge/last-opp/bilder"
            key={1}
            className="flex flex-col justify-center gap-2 border-2 border-gray-200 p-8 rounded w-96 sm:hover:bg-gray-100 sm:hover:border-gray-300"
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
            className="flex flex-col justify-center gap-2 border-2 border-gray-200 p-8 rounded w-96 sm:hover:bg-gray-100 sm:hover:border-gray-300"
          >
            <p className="font-bold text-lg">Registrer dine produkter</p>
            <p className="text-gray-500/p">
              Dette er det andre steget når du skal selge klær. Lag pruduktene
              dine ogknyytt dem til bildene du har lastet opp
            </p>
          </Link>
        </div> */}
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
        <p className="m-10 text-center">Velg opp til 3 bilder</p>
        <ImagesList
          images={images}
          setSelectedImages={setSelectedImages}
          selectedImages={selectedImages}
        />
      </FilterDialog>

      <div className="relative flex flex-col gap-2">
        <LoadingOverlay loading={loading} />
        <div className="flex  flex-col-reverse items-center justify-center overflow-scroll border-r-2 border-gray-200 bg-white shadow">
          <div className="w-full p-6" onClick={() => setModal(true)}>
            <SelectedImages selectedImages={selectedImages} />
          </div>
        </div>
        <div>
          {nextProduct ? (
            <div className="flex flex-col items-center gap-8">
              <p>Vil du registrere flere produkter?</p>
              <button
                onClick={() => {
                  setNextProduct(false);
                  setModal(true);
                }}
                className="w-52 rounded bg-brand-500 px-6 py-4 text-white "
              >
                Ja
              </button>
              <Link
                href="/min-side/selge/produkter"
                className="w-52 rounded border-2 border-brand-600 bg-white px-6 py-4 text-center"
              >
                Se mine produkter
              </Link>
            </div>
          ) : (
            <div className="m-auto max-w-[500px]">
              <ProductForm formik={formik} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LeggUt;
