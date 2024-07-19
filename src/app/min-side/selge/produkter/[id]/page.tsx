"use client";
import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { useFormik } from "formik";
import {
  ProductQueries,
  ProductsMethods,
} from "@/reactQuery/ProductQueryFactory";
import { useRouter } from "next/navigation";
import { AuthQueries } from "@/reactQuery/AuthQueryFactory";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import { toast } from "react-toastify";
import Button from "@/components/common/buttons/Button";
import { DeleteConfirmation } from "@/components/common/dialog/DeleteConfirmation";
import Dialog from "@/components/common/dialog/Dialog";
import { FilterQueries } from "@/reactQuery/FilterQueryFactory";
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
const Page = ({ params }: { params: { id: string } }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [modal, setModal] = useState(false);

  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: product } = useSuspenseQuery(ProductQueries.detail(params.id));
  const { data: colors } = useSuspenseQuery(FilterQueries.colors());
  const { data: tags } = useSuspenseQuery(FilterQueries.tags());
  const { data: materials } = useSuspenseQuery(FilterQueries.materials());
  const { data: sizes } = useSuspenseQuery(FilterQueries.sizes());
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

  const formik = useFormik({
    initialValues: {
      colors: product.attributes.colors.data[0]?.id,
      colorsNorwegianName: product.attributes.colors.data[0]?.attributes?.name,
      material: product.attributes.material.data?.id,
      materialName: product.attributes.material.data?.attributes?.name,
      brand: product.attributes.brand,
      price: product.attributes.price,
      category: product.attributes.category.data?.id,
      categoryName: product.attributes.category.data?.attributes.name,
      state: product.attributes.state.data?.id,
      stateName: product.attributes.state.data?.attributes.name,
      size: product.attributes.size.data?.id,
      sizeName: product.attributes.size.data?.attributes.number,
      sex: product.attributes.sex.data?.id,
      sexName: product.attributes.sex.data?.attributes.name,
      tags: product.attributes.tags.data[0]?.id,
      tagName: product.attributes.tags.data[0]?.attributes.name,
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
        <ProductStatusChip
          large
          active={product.attributes.active}
          sold={product.attributes.sold}
        />
      </div>
      <div className="mb-8 flex flex-wrap justify-evenly gap-2">
        {product.attributes.image.data.map((image) => (
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
      <Accordion
        label="Farger"
        currentValue={formik.values.colorsNorwegianName}
      >
        <div className="flex flex-wrap justify-center gap-x-4  gap-y-14 pb-10 ">
          <Color
            formik={formik}
            colors={colors}
            initialId={product.attributes.colors.data[0].id}
          />
        </div>
      </Accordion>
      <Accordion label="Størrelse" currentValue={formik.values.sizeName}>
        <Size
          formik={formik}
          sizes={sizes}
          initialId={product.attributes.size.data.id}
        />
      </Accordion>
      <Accordion label="Tags" currentValue={formik.values.tagName}>
        <Tags formik={formik} tags={tags} initialId={formik.values.tags} />
      </Accordion>
      <Accordion label="Kjønn" currentValue={formik.values.sexName}>
        <Sex formik={formik} initialId={product.attributes.sex.data.id} />
      </Accordion>
      <Accordion label="Tilstand" currentValue={formik.values.stateName}>
        <State formik={formik} initialId={product.attributes.state.data.id} />
      </Accordion>
      <Accordion label="Materialer" currentValue={formik.values.materialName}>
        <Materials
          formik={formik}
          materials={materials}
          initialId={product.attributes.material.data?.id}
        />
      </Accordion>
      <Accordion label="Merke" currentValue={formik.values.brand}>
        <Brand formik={formik} />
      </Accordion>
      <Accordion label="Pris" currentValue={formik.values.price}>
        <Price formik={formik} />
      </Accordion>

      <div className="flex justify-center gap-8 pb-8">
        <Button
          icon="trash"
          type="danger"
          disabled={product.attributes.sold}
          onClick={() => {
            setModal(true);
            scrollTo(0, 0);
          }}
        >
          Slett
        </Button>
        <Button
          icon="save"
          disabled={product.attributes.sold}
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
