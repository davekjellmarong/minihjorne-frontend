"use client";
import React, { useState } from "react";
import Category from "./Category";
import Color from "./Color";
import { State } from "./State";
import Sex from "./Sex";
import Price from "./Price";
import Size from "./Size";
import Brand from "./Brand";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  ProductsMethods,
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
  User,
} from "@/utils/types";
import { useFormik } from "formik";
import Loading from "@/components/loading/Loading";
import Materials from "./Materials";
import Tags from "./Tags";
import { toast } from "react-toastify";

interface ProductFormProps {
  selectedImage: any;
  setSavedImages: any;
  stepper: number;
  formik: any;
  setStepper: (value: number) => void;
}
const ProductForm = ({
  selectedImage,
  setSavedImages,
  setStepper,
  formik,
  stepper,
}: ProductFormProps) => {
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
  if (
    !colors?.data ||
    !tags?.data ||
    !categories?.data ||
    !materials?.data ||
    !sizes?.data
  )
    return <Loading />;
  return (
    <form
      className="flex flex-col items-start gap-12 mb-48 w-full"
      onSubmit={formik.handleSubmit}
    >
      <div
        className={`${
          stepper === 1 ? "block" : "hidden"
        } flex flex-col gap-16 `}
      >
        <Color formik={formik} colors={colors.data} />
        <Category formik={formik} categories={categories.data} />
        <Materials
          onChangeFunc={() => {
            if (formik.values.colors && formik.values.category) {
              setStepper(2);
            }
          }}
          formik={formik}
          materials={materials.data}
        />
      </div>
      <div
        className={`${
          stepper === 2 ? "block" : "hidden"
        } flex flex-col gap-16 `}
      >
        <Tags formik={formik} tags={tags.data} />
        <State formik={formik} />
        <Sex
          onChangeFunc={() => {
            if (formik.values.tags && formik.values.state) {
              setStepper(3);
            }
          }}
          formik={formik}
        />
      </div>
      <div
        className={`${
          stepper === 3 ? "block" : "hidden"
        } flex flex-col gap-16 justify-start `}
      >
        <Size formik={formik} sizes={sizes.data} />
        <Price formik={formik} />
        <Brand formik={formik} />
      </div>
      <button
        type="submit"
        className="border-2 border-gray-400 py-2 px-6 rounded"
      >
        Lagre produkt
      </button>
    </form>
  );
};

export default ProductForm;
