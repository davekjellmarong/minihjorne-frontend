"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
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
  ProductRQ,
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
import { ProductQueries } from "@/queryFactory/ProductQueryFactory";
import { useRouter } from "next/navigation";
const Page = ({ params }: { params: { id: string } }) => {
  const { data: product } = useQuery(ProductQueries.detail(params.id));
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
  console.log({ product });
  const formik = useFormik({
    initialValues: {
      colors: "",
      colorsNorwegianName: "",
      material: product?.attributes.material.data.attributes.name,
      brand: product?.attributes.brand,
      price: product?.attributes.price,
      category: product?.attributes.category.data.id,
      categoryName: product?.attributes.category.data.attributes.name,
      state: product?.attributes.state.data.id,
      size: product?.attributes.size.data.id,
      sizeName: product?.attributes.size.data.attributes.number,
      sex: product?.id,
      tags: "",
      user: 0,
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });
  if (
    !colors?.data ||
    !tags?.data ||
    !categories?.data ||
    !materials?.data ||
    !sizes?.data
  )
    return;
  return (
    <div className="px-8">
      <div className="flex flex-wrap justify-evenly gap-4 mb-8">
        {product?.attributes.image.data.map((image) => (
          <img
            key={image.id}
            src={image.attributes.url}
            className="w-2/5 h-80 object-cover"
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
      <Accordion label="Tags" currentValue={formik.values.tags}>
        <Tags formik={formik} tags={tags.data} />
      </Accordion>
      <Accordion label="Kjønn" currentValue={formik.values.sex}>
        <Sex formik={formik} initialId={product?.attributes.sex.data.id} />
      </Accordion>
      <Accordion label="Tilstand" currentValue={formik.values.state}>
        <State formik={formik} initialId={product?.attributes.state.data.id} />
      </Accordion>
      <Accordion label="Materialer" currentValue={formik.values.material}>
        <Materials formik={formik} materials={materials.data} />
      </Accordion>
      <Accordion label="Merke" currentValue={formik.values.brand}>
        <Brand formik={formik} />
      </Accordion>
      <Accordion label="Pris" currentValue={formik.values.price}>
        <Price formik={formik} />
      </Accordion>
      <div className="flex justify-center gap-8">
        <button
          className="border-2 border-brand-500 p-4 rounded"
          onClick={() => {
            router.back();
          }}
        >
          Gå tilbake
        </button>
        <button
          className="bg-brand-500 text-white p-4 rounded"
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Lagre endringer
        </button>
      </div>
    </div>
  );
};

export default Page;
