"use client";
import { Suspense, useState } from "react";
import { useFormik } from "formik";
import { ProductsMethods } from "@/utils/utils";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ArrowRight, SidebarSimple } from "@phosphor-icons/react";
import Link from "next/link";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import { UserQueries } from "@/queryFactory/User";
import { AuthQueries } from "@/queryFactory/Auth";
import { Image as ImageType } from "@/utils/types";
import { ImageMethods } from "@/queryFactory/Upload";
import { useStore } from "@/stateManagment/ZustandStore";
import Loading from "@/components/common/loading/Loading";
import SavedImages from "@/components/features/minSide/lastOpp/SavedImages";
import ImageUploader from "@/components/features/minSide/lastOpp/ImageUploader";
import FilterDialog from "@/components/features/product/FilterDialog";
import ImagesList from "@/components/features/minSide/lastOpp/ImagesList";
import SelectedImages from "@/components/features/minSide/lastOpp/SelectedImages";
import ProductForm from "@/components/features/productForm/ProductForm";

const LeggUt = () => {
  const showNav = useStore((state) => state.showNav);
  const [modal, setModal] = useState(false);
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
      <FilterDialog open={modal} setOpen={setModal}>
        <p className="m-10 text-center">Velg opp til 3 bilder per produkt</p>
        <ImagesList
          images={images}
          setSelectedImages={setSelectedImages}
          selectedImages={selectedImages}
          setModal={setModal}
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
              {/* TO-DO use button component */}
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
                onClick={showNav}
              >
                Avslutt og se mine produkter
              </Link>
            </div>
          ) : (
            <div className="m-auto max-w-[500px]">
              <Suspense fallback={<Loading />}>
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
