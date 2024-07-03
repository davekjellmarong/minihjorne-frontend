"use client";
import { Suspense, useMemo, useState } from "react";
import ImageUploader from "../../../../components/organisms/minSide/lastOpp/ImageUploader";
import ProductForm from "../../../../components/organisms/form/product/ProductForm";
import ImagesList from "../../../../components/organisms/minSide/lastOpp/ImagesList";
import SelectedImages from "../../../../components/organisms/minSide/lastOpp/SelectedImages";
import { useFormik } from "formik";
import { ProductsMethods } from "@/utils/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { User } from "@/utils/types";
import { toast } from "react-toastify";
import Dialog from "@/components/organisms/dialog/Dialog";
import FilterDialog from "@/components/organisms/product/FilterDialog";
import {
  ArrowRight,
  Question,
  Sidebar,
  SidebarSimple,
} from "@phosphor-icons/react";
import IntroCarousel from "../../../../components/organisms/minSide/lastOpp/IntroCarousel";
import Link from "next/link";
import LoadingOverlay from "@/components/molecules/loading/LoadingOverlay";
import Image from "next/image";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import { AuthQueries } from "@/reactQuery/AuthQueryFactory";

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
  const [images, setImages] = useState<ImageUpload[]>([]);
  const [nextProduct, setNextProduct] = useState(false);

  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: user } = useQuery(UserQueries.me(jwt));

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
      // user: user?.id,
    },

    onSubmit: (values) => {
      console.log({ values });
      const userId: any = user?.id;
      if (userId) {
        const data = { ...values, user: userId };
        var formData = new FormData();
        selectedImages.forEach((image: any) => {
          formData.append("files.image", image, image.name);
        });
        formData.append("data", JSON.stringify(data));
        createProduct(formData);
      } else {
        toast.error("Du er ikke logget inn");
      }
    },
  });
  const ImagesListMemo = useMemo(
    () => (
      <ImagesList
        images={images}
        setSelectedImages={setSelectedImages}
        selectedImages={selectedImages}
      />
    ),
    [images, selectedImages],
  );
  if (images.length === 0) {
    return (
      <div className="relative flex h-screen flex-col items-center  gap-6 pt-32 text-center">
        <Link
          href="/min-side/selge/last-opp/intro"
          className="absolute left-8 top-8"
          // onClick={() => setIntroModal(true)}
        >
          <Question size={32} weight="thin" color="blue" />
        </Link>
        {/* <button
          className="absolute left-8 top-8"
          onClick={() => setIntroModal(true)}
        >
          <Question size={32} weight="thin" color="blue" />
        </button> */}

        <Dialog open={introModal} setOpen={setIntroModal} height="h-[500px]">
          <IntroCarousel />
        </Dialog>
        <p className="text-xl text-brand-800">Last opp produkt bilder</p>
        <Image
          src="/addFiles.svg"
          width={300}
          height={300}
          alt=""
          className="pr-10"
        />
        <ImageUploader setImages={setImages} setModal={setModal} />
      </div>
    );
  }
  return (
    <>
      <FilterDialog open={modal} setOpen={setModal} width="w-3/4">
        <p className="m-10 text-center">0 produkter lastet opp</p>
        <p className="m-10 text-center">Velg opp til 3 bilder per produkt</p>
        {ImagesListMemo}
      </FilterDialog>

      <div className="relative flex flex-col gap-2">
        <LoadingOverlay loading={loading} />
        <div className="flex  flex-col-reverse items-center justify-center overflow-scroll  bg-white ">
          <SelectedImages
            images={images}
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
          />
          <button
            className="flex items-center self-start pl-4"
            onClick={() => setModal(true)}
          >
            <SidebarSimple size={22} color="gray" />
            <ArrowRight size={18} color="gray" />
          </button>
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
                Avslutt og se mine produkter
              </Link>
            </div>
          ) : (
            <div className="m-auto max-w-[500px]">
              <Suspense fallback={<p>Loading...</p>}>
                <ProductForm formik={formik} />
              </Suspense>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LeggUt;
