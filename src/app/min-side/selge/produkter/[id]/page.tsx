"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  fetchCategories,
  fetchColors,
  fetchMaterials,
  fetchSizes,
  fetchTags,
} from "@/utils/utils";
import {
  CategoryRQ,
  ColorsRQ,
  MaterialsRQ,
  SizesRQ,
  TagsRQ,
} from "@/utils/types";
import Color from "@/components/form/product/Color";
import { useFormik } from "formik";
import Category from "@/components/form/product/Category";
import Size from "@/components/form/product/Size";
import Tags from "@/components/form/product/Tags";
import Sex from "@/components/form/product/Sex";
import { State } from "@/components/form/product/State";
import Materials from "@/components/form/product/Materials";
import Brand from "@/components/form/product/Brand";
import Price from "@/components/form/product/Price";
import Accordion from "./Accordion";
import {
  ProductQueries,
  ProductsMethods,
} from "@/queryFactory/ProductQueryFactory";
import { useRouter } from "next/navigation";
import { AuthQueries } from "@/queryFactory/AuthQueryFactory";
import { UserQueries } from "@/queryFactory/UserQueryFactory";
import LoadingOverlay from "@/components/loading/LoadingOverlay";
import { toast } from "react-toastify";
import ProductStatusChip from "@/components/chip/ProductStatusChip";
import Button from "@/components/button/Button";
import { DeleteConfirmation } from "@/components/dialog/DeleteConfirmation";
import Dialog from "@/components/dialog/Dialog";
const Page = ({ params }: { params: { id: string } }) => {
  const { data: product } = useQuery(ProductQueries.detail(params.id));
  const queryClient = useQueryClient();
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const { data: colors } = useQuery<ColorsRQ>({
    queryKey: ["colors"],
    queryFn: fetchColors,
  });
  const { data: tags } = useQuery<TagsRQ>({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });
  const { data: categories } = useQuery<CategoryRQ>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  const { data: materials } = useQuery<MaterialsRQ>({
    queryKey: ["materials"],
    queryFn: fetchMaterials,
  });
  const { data: sizes } = useQuery<SizesRQ>({
    queryKey: ["sizes"],
    queryFn: fetchSizes,
  });
  const jwt = queryClient.getQueryData(AuthQueries.all());
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
      colors: product?.attributes.colors.data[0].id,
      colorsNorwegianName: product?.attributes.colors.data[0].attributes.name,
      material: product?.attributes.material.data?.id,
      materialName: product?.attributes.material.data?.attributes.name,
      brand: product?.attributes.brand,
      price: product?.attributes.price,
      category: product?.attributes.category.data.id,
      categoryName: product?.attributes.category.data.attributes.name,
      state: product?.attributes.state.data.id,
      stateName: product?.attributes.state.data.attributes.name,
      size: product?.attributes.size.data.id,
      sizeName: product?.attributes.size.data.attributes.number,
      sex: product?.attributes.sex.data.id,
      sexName: product?.attributes.sex.data.attributes.name,
      tags: product?.attributes.tags.data[0]?.id,
      tagName: product?.attributes.tags.data[0]?.attributes.name,
    },

    onSubmit: (values) => {
      const data = { ...values, user: user?.id };
      updateProduct({ data: data });
    },
  });
  console.log(product?.attributes);
  if (
    !colors?.data ||
    !tags?.data ||
    !categories?.data ||
    !materials?.data ||
    !sizes?.data
  )
    return;
  if (!product) return;
  return (
    <div className="px-8">
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
          active={product?.attributes.active}
          sold={product?.attributes.sold}
        />
      </div>
      <div className="mb-8 flex flex-wrap justify-evenly gap-4">
        {product?.attributes.image.data.map((image) => (
          <img
            key={image.id}
            src={image.attributes.url}
            className="h-80 w-2/5 object-cover"
          />
        ))}
      </div>
      <Accordion
        label="Farger"
        currentValue={formik.values.colorsNorwegianName}
      >
        <Color
          formik={formik}
          colors={colors.data}
          initialId={product?.attributes.colors.data[0].id}
        />
      </Accordion>
      <Accordion label="Kategori" currentValue={formik.values.categoryName}>
        <Category
          formik={formik}
          categories={categories.data}
          initialId={product?.attributes.category.data.id}
        />
      </Accordion>
      <Accordion label="Størrelse" currentValue={formik.values.sizeName}>
        <Size
          formik={formik}
          sizes={sizes.data}
          initialId={product?.attributes.size.data.id}
        />
      </Accordion>
      <Accordion label="Tags" currentValue={formik.values.tagName}>
        <Tags formik={formik} tags={tags.data} initialId={formik.values.tags} />
      </Accordion>
      <Accordion label="Kjønn" currentValue={formik.values.sexName}>
        <Sex formik={formik} initialId={product?.attributes.sex.data.id} />
      </Accordion>
      <Accordion label="Tilstand" currentValue={formik.values.stateName}>
        <State formik={formik} initialId={product?.attributes.state.data.id} />
      </Accordion>
      <Accordion label="Materialer" currentValue={formik.values.materialName}>
        <Materials
          formik={formik}
          materials={materials.data}
          initialId={product?.attributes.material.data?.id}
        />
      </Accordion>
      <Accordion label="Merke" currentValue={formik.values.brand}>
        <Brand formik={formik} />
      </Accordion>
      <Accordion label="Pris" currentValue={formik.values.price}>
        <Price formik={formik} />
      </Accordion>
      <div className="flex justify-center gap-8">
        <Button
          icon="trash"
          type="danger"
          onClick={() => {
            // deleteProduct();
            setModal(true);
            scrollTo(0, 0);
          }}
        >
          Slett
        </Button>
        <Button
          icon="save"
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
