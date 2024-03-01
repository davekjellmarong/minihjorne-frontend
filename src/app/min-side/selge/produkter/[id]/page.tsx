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
const Page = ({ params }: { params: { id: string } }) => {
  const { data: product } = useQuery<ProductRQ>({
    queryKey: ["product", params.id],
  });

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
  const formik = useFormik({
    initialValues: {
      colors: "",
      colorsNorwegianName: "",
      material: product?.data?.attributes.material.data.attributes.name,
      brand: product?.data.attributes.brand,
      price: product?.data.attributes.price,
      category: product?.data.attributes.category.data.id,
      categoryName: product?.data.attributes.category.data.attributes.name,
      state: product?.data.attributes.state.data.id,
      size: product?.data.attributes.size.data.id,
      sizeName: product?.data.attributes.size.data.attributes.number,
      sex: product?.data.id,
      tags: "",
      user: 0,
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values.brand);
  if (
    !colors?.data ||
    !tags?.data ||
    !categories?.data ||
    !materials?.data ||
    !sizes?.data
  )
    return;
  return (
    <div>
      <Accordion
        label="Farger"
        currentValue={formik.values.colorsNorwegianName}
      >
        <Color
          formik={formik}
          colors={colors.data}
          initialId={product?.data.attributes.colors.data[0].id}
        />
      </Accordion>
      <Accordion label="Kategori" currentValue={formik.values.categoryName}>
        <Category
          formik={formik}
          categories={categories.data}
          initialId={product?.data.attributes.category.data.id}
        />
      </Accordion>
      <Accordion label="Størrelse" currentValue={formik.values.sizeName}>
        <Size
          formik={formik}
          sizes={sizes.data}
          initialId={product?.data.attributes.size.data.id}
        />
      </Accordion>
      <Accordion label="Tags" currentValue={formik.values.tags}>
        <Tags formik={formik} tags={tags.data} />
      </Accordion>
      <Accordion label="Kjønn" currentValue={formik.values.sex}>
        <Sex formik={formik} initialId={product?.data.attributes.sex.data.id} />
      </Accordion>
      <Accordion label="Tilstand" currentValue={formik.values.state}>
        <State
          formik={formik}
          initialId={product?.data.attributes.state.data.id}
        />
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
      <button
        onClick={() => {
          formik.handleSubmit();
        }}
      >
        Lagre
      </button>
    </div>
  );
};

export default Page;
