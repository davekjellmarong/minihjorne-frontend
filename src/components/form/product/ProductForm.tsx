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
  setSavedImages: any;
  stepper: number;
  formik: any;
  setStepper: (value: number) => void;
}
const ProductForm = ({
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
  if (stepper)
    return (
      <form
        className="flex flex-col items-start gap-12 mb-48 w-full"
        onSubmit={formik.handleSubmit}
      >
        <div
          className={`${
            stepper === 1 ? "block" : "sm:hidden block"
          } flex flex-col gap-16 `}
        >
          <Color formik={formik} colors={colors.data} />
          <Category
            onChangeFunc={() => {
              if (formik.values.colors) {
                setStepper(2);
              }
            }}
            formik={formik}
            categories={categories.data}
          />
        </div>
        <div
          className={`${
            stepper === 2 ? "block" : "sm:hidden block"
          } flex flex-col gap-16 `}
        >
          <Size formik={formik} sizes={sizes.data} />
          <Tags
            onChangeFunc={() => {
              if (formik.values.size) {
                setStepper(3);
              }
            }}
            formik={formik}
            tags={tags.data}
          />
        </div>
        <div
          className={`${
            stepper === 3 ? "block" : "sm:hidden block"
          } flex flex-col gap-16 justify-start `}
        >
          <Sex formik={formik} />
          <State formik={formik} />
          <Materials
            onChangeFunc={() => {
              if (formik.values.state && formik.values.sex) {
                setStepper(4);
              }
            }}
            formik={formik}
            materials={materials.data}
          />
        </div>
        <div
          className={`${
            stepper === 4 ? "block" : "sm:hidden block"
          } flex flex-col gap-16 justify-start `}
        >
          <Price formik={formik} />
          <Brand formik={formik} />
        </div>
        <div className="flex justify-between w-full">
          <button
            type="submit"
            className=" bg-gray-500 py-2 px-6 text-white rounded"
          >
            Lagre produkt
          </button>
          <button
            type="button"
            className="border-2 border-gray-400 py-2 px-6 rounded"
          >
            Forhåndsvisning av produktene
          </button>
        </div>
      </form>
    );
};

export default ProductForm;
