"use client";
import { Suspense, useMemo, useState } from "react";
import ImageUploader from "../../../../components/organisms/minSide/lastOpp/ImageUploader";
import ProductForm from "../../../../components/organisms/form/product/ProductForm";
import ImagesList from "../../../../components/organisms/minSide/lastOpp/ImagesList";
import SelectedImages from "../../../../components/organisms/minSide/lastOpp/SelectedImages";
import { useFormik } from "formik";
import { ProductsMethods } from "@/utils/utils";
import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { toast } from "react-toastify";
import Dialog from "@/components/organisms/dialog/Dialog";
import FilterDialog from "@/components/organisms/product/FilterDialog";
import { ArrowRight, Question, SidebarSimple } from "@phosphor-icons/react";
import IntroCarousel from "../../../../components/organisms/minSide/lastOpp/IntroCarousel";
import Link from "next/link";
import LoadingOverlay from "@/components/molecules/loading/LoadingOverlay";
import Image from "next/image";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import { AuthQueries } from "@/reactQuery/AuthQueryFactory";
import { Image as ImageType } from "@/utils/types";
import SavedImages from "@/components/organisms/minSide/lastOpp/SavedImages";
import { ImageMethods } from "@/reactQuery/UploadQueryFactory";

const LeggUt = () => {
  const [modal, setModal] = useState(false);
  const [introModal, setIntroModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState<ImageType[]>([]);
  const [images, setImages] = useState<ImageType[]>([]);
  const [nextProduct, setNextProduct] = useState(false);
  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: user } = useSuspenseQuery(UserQueries.me(jwt));
  const { mutate: createProduct, isPending: loading } = useMutation({
    mutationFn: (values: any) => {
      return ProductsMethods.post(values, jwt);
    },
    onSuccess: (data) => {
      console.log(data);
      toast.info(
        `Produktet '${
          formik.values.colorsNorwegianName
        } ${formik.values.categoryName.toLowerCase()}' lagret`,
      );
      setImages((prev: any) =>
        prev.filter((image: any) => !selectedImages.includes(image)),
      );
      const selectedImagesIds = selectedImages.map((image) => image.id);
      ImageMethods.updateMultipleFileInfo(selectedImagesIds, jwt);
      queryClient.invalidateQueries(UserQueries.me(jwt));
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
      brand: "",
      price: 0,
      category: "",
      categoryName: "",
      state: "",
      sex: "",
    },

    onSubmit: (values) => {
      const userId: any = user.id;
      if (userId) {
        const imagesIds = selectedImages.map((image) => image.id);
        const payload = {
          data: { ...values, user: userId, image: imagesIds },
        };
        createProduct(payload);
      } else {
        toast.error("Du er ikke logget inn");
      }
    },
  });
  if (images.length === 0) {
    return (
      <>
        <Dialog open={introModal} setOpen={setIntroModal} height="h-[500px]">
          <IntroCarousel />
        </Dialog>
        <Suspense>
          <SavedImages
            images={user.productImages}
            setImages={setImages}
            setModal={setModal}
          />
          <ImageUploader setImages={setImages} setModal={setModal} />
        </Suspense>
      </>
    );
  }
  return (
    <>
      <FilterDialog open={modal} setOpen={setModal} width="w-3/4">
        {/* <p className="m-10 text-center">0 produkter lastet opp</p> */}
        <p className="m-10 text-center">Velg opp til 3 bilder per produkt</p>
        <ImagesList
          images={images}
          setSelectedImages={setSelectedImages}
          selectedImages={selectedImages}
        />
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
