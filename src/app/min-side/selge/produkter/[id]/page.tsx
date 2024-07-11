"use client";
import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { useFormik } from "formik";
import Accordion from "../../../../../components/organisms/minSide/produkter/Accordion";
import {
  ProductQueries,
  ProductsMethods,
} from "@/reactQuery/ProductQueryFactory";
import { useRouter } from "next/navigation";
import { AuthQueries } from "@/reactQuery/AuthQueryFactory";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import LoadingOverlay from "@/components/molecules/loading/LoadingOverlay";
import { toast } from "react-toastify";
import ProductStatusChip from "@/components/organisms/ProductStatusChip";
import Button from "@/components/atoms/Button";
import { DeleteConfirmation } from "@/components/organisms/dialog/DeleteConfirmation";
import Dialog from "@/components/organisms/dialog/Dialog";
import Category from "@/components/organisms/form/product/Category";
import Size from "@/components/organisms/form/product/Size";
import Tags from "@/components/organisms/form/product/Tags";
import Sex from "@/components/organisms/form/product/Sex";
import { State } from "@/components/organisms/form/product/State";
import Materials from "@/components/organisms/form/product/Materials";
import Brand from "@/components/organisms/form/product/Brand";
import Price from "@/components/organisms/form/product/Price";
import Color from "@/components/organisms/form/product/Color";
import { FilterQueries } from "@/reactQuery/FilterQueryFactory";
const Page = ({ params }: { params: { id: string } }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [modal, setModal] = useState(false);

  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: product } = useSuspenseQuery(ProductQueries.detail(params.id));
  const { data: colors } = useSuspenseQuery(FilterQueries.colors());
  const { data: tags } = useSuspenseQuery(FilterQueries.tags());
  const { data: categories } = useSuspenseQuery(FilterQueries.categories());
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
          <img
            key={image.id}
            src={image.attributes.url}
            // className="h-80 w-2/5 object-cover"
            className="h-80  object-cover"
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
      {/* <Accordion label="Kategori" currentValue={formik.values.categoryName}>
        <Category

          formik={formik}
          categories={categories}
          initialId={product.attributes.category.data.id}
        />
      </Accordion> */}
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
