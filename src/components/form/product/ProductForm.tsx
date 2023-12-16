"use client";
import React from "react";
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
  MaterialRQ,
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
}
const ProductForm = ({ selectedImage, setSavedImages }: ProductFormProps) => {
  const { data: jwt } = useQuery({
    queryKey: ["jwt"],
  });
  const { mutate: createProduct, isPaused: loading } = useMutation({
    mutationFn: (values: any) => {
      return ProductsMethods.post(values, jwt);
    },
    onSuccess: (data) => {
      console.log(data);
      toast.info(
        `Produktet '${
          formik.values.colorsNorwegianName
        } ${formik.values.categoryName.toLowerCase()}' lagret`
      );
      setSavedImages((prev: any) => [...prev, selectedImage.name]);
    },
    onError: (err: any) => {
      console.log(err);
      toast.error(`Produkt kunne ikke lagres`);
    },
  });
  const { data: user } = useQuery<User>({
    queryKey: ["login-user"],
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
  const { data: materials } = useQuery<MaterialRQ>({
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
      materials: "",
      brand: "",
      price: "",
      category: "",
      categoryName: "",
      state: "",
      sex: "",
      tags: "",
      user: 0,
    },

    onSubmit: (values) => {
      const userId: any = user?.id;
      const data = { ...values, user: userId };
      var formData = new FormData();
      formData.append("files.image", selectedImage, selectedImage.name);
      formData.append("data", JSON.stringify(data));
      createProduct(formData);
    },
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
      className="flex flex-col items-start gap-12 mb-48"
      onSubmit={formik.handleSubmit}
    >
      <Color formik={formik} colors={colors.data} />
      <Category formik={formik} categories={categories.data} />
      <Materials formik={formik} materials={materials.data} />
      <button
        type="submit"
        className="border-2 border-gray-400 py-2 px-6 rounded"
      >
        Lagre
      </button>
      <Tags formik={formik} tags={tags.data} />
      <State formik={formik} />
      <Sex formik={formik} />
      <Size formik={formik} sizes={sizes.data} />
      <Brand formik={formik} />
      <Price formik={formik} />
    </form>
  );
};

export default ProductForm;
