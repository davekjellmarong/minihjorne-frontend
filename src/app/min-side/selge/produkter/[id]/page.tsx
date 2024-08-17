"use client";
import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import React, { Suspense, useState } from "react";
import { useFormik } from "formik";
import { ProductQueries, ProductsMethods } from "@/queryFactory/Product";
import { useRouter } from "next/navigation";
import { AuthQueries } from "@/queryFactory/Auth";
import { UserQueries } from "@/queryFactory/User";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import { toast } from "react-toastify";
import Button from "@/components/common/buttons/Button";
import { DeleteConfirmation } from "@/components/common/dialog/DeleteConfirmation";
import Dialog from "@/components/common/dialog/Dialog";
import ProductStatusChip from "@/components/features/product/ProductStatusChip";
import Accordion from "@/components/features/minSide/produkter/Accordion";
import Color from "@/components/features/productForm/Color";
import Size from "@/components/features/productForm/Size";
import Tags from "@/components/features/productForm/Tags";
import Sex from "@/components/features/productForm/Sex";
import { State } from "@/components/features/productForm/State";
import Materials from "@/components/features/productForm/Materials";
import Brand from "@/components/features/productForm/Brand";
import Price from "@/components/features/productForm/Price";
import Image from "next/image";
import { isMaterial, isTag } from "@/utils/types";
import RectangleSkeleton from "@/components/common/skeleton/RectangleSkeleton";
const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const [modal, setModal] = useState(false);

  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: product } = useSuspenseQuery(ProductQueries.detail(params.id));
  const { data: user } = useQuery(UserQueries.me(jwt));

  const { mutate: updateProduct, isPending: loading } = useMutation({
    mutationFn: (values: any) => {
      return ProductsMethods.put(params.id, values, jwt);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(ProductQueries.me_all(jwt));
      queryClient.invalidateQueries(ProductQueries.detail(params.id));
      toast.info(`Produkt endringer lagret`);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  const { mutate: deleteProduct } = useMutation({
    mutationFn: () => {
      return ProductsMethods.delete(params.id, jwt);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(ProductQueries.me_all(jwt));
      queryClient.invalidateQueries(ProductQueries.detail(params.id));
      toast.warning(`Produkt slettet`);
      router.back();
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  const {
    category,
    brand,
    colors,
    image,
    material,
    price,
    size,
    state,
    tags,
    active,
    sold,
    sex,
  } = product.attributes;
  const materialFields = isMaterial(material.data)
    ? {
        material: material.data.id,
        materialName: material.data.attributes?.name,
      }
    : null;
  const tagFields = isTag(tags.data)
    ? {
        tags: tags.data[0]?.id,
        tagName: tags.data[0]?.attributes.name,
      }
    : null;

  const formik = useFormik({
    initialValues: {
      colors: colors.data[0].id,
      colorsNorwegianName: colors.data[0].attributes?.name,
      brand: brand,
      price: price,
      category: category.data.id,
      categoryName: category.data.attributes.name,
      state: state.data.id,
      stateName: state.data.attributes.name,
      size: size.data.id,
      sizeName: size.data.attributes.number,
      sex: sex.data.id,
      sexName: sex.data.attributes.name,
      ...materialFields,
      ...tagFields,
    },

    onSubmit: (values) => {
      const data = { ...values, user: user?.id };
      updateProduct({ data: data });
    },
  });
  return (
    <div className="m-auto max-w-[700px] px-6">
      <LoadingOverlay loading={loading} />
      <Dialog open={modal} setOpen={setModal} height="h-[400px]">
        <DeleteConfirmation
          setModal={setModal}
          handleYes={() => {
            deleteProduct();
          }}
        />
      </Dialog>
      <div className="flex justify-center">
        <ProductStatusChip large active={active} sold={sold} />
      </div>
      <div className="mb-8 flex flex-wrap justify-evenly gap-2">
        {image.data.map((image) => (
          <Image
            key={image.id}
            src={image.attributes.url}
            className="h-80  object-cover"
            height={320}
            width={320}
            alt=""
          />
        ))}
      </div>
      <Suspense fallback={<RectangleSkeleton />}>
        <Accordion
          label="Farger"
          currentValue={formik.values.colorsNorwegianName}
        >
          <div className="flex flex-wrap justify-center gap-x-4  gap-y-14 pb-10 ">
            <Color formik={formik} initialId={colors.data[0].id} />
          </div>
        </Accordion>
        <Accordion label="Størrelse" currentValue={formik.values.sizeName}>
          <Size formik={formik} initialId={size.data.id} />
        </Accordion>
        <Accordion label="Tags" currentValue={formik.values.tagName}>
          <Tags formik={formik} initialId={formik.values.tags} />
        </Accordion>
        <Accordion label="Kjønn" currentValue={formik.values.sexName}>
          <Sex formik={formik} initialId={sex.data.id} />
        </Accordion>
        <Accordion label="Tilstand" currentValue={formik.values.stateName}>
          <State formik={formik} initialId={state.data.id} />
        </Accordion>
        <Accordion label="Tekstil" currentValue={formik.values.materialName}>
          <Materials
            formik={formik}
            initialId={isMaterial(material.data) ? material.data.id : null}
          />
        </Accordion>
        <Accordion label="Merke" currentValue={formik.values.brand}>
          <Brand formik={formik} />
        </Accordion>
        <Accordion label="Pris" currentValue={formik.values.price}>
          <Price formik={formik} />
        </Accordion>
      </Suspense>

      <div className="flex justify-center gap-8 pb-8">
        <Button
          icon="trash"
          type="danger"
          disabled={sold}
          onClick={() => {
            setModal(true);
            scrollTo(0, 0);
          }}
        >
          Slett
        </Button>
        <Button
          icon="save"
          disabled={sold}
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Lagre endringer
        </Button>
      </div>
    </div>
  );
};

export default Page;
