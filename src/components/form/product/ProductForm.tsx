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
  loginUser,
} from "@/utils/utils";
import {
  CategoryRQ,
  ColorsRQ,
  MaterialRQ,
  SizesRQ,
  TagsRQ,
} from "@/utils/types";
import { useFormik } from "formik";
import Loading from "@/components/loading/Loading";

interface ProductFormProps {
  selectedImage: any;
}
const ProductForm = ({ selectedImage }: ProductFormProps) => {
  const { mutate: createProduct, isPaused: loading } = useMutation({
    mutationFn: (values: any) => {
      return ProductsMethods.post(values);
    },
    onSuccess: (data) => {
      console.log(data);
      // queryClient.setQueryData(["login-user"], data.user);
      // queryClient.setQueryData(["jwt"], data.jwt);
      // router.push("/");
    },
  });
  const formik = useFormik({
    initialValues: {
      colors: "",
      brand: "",
      price: "",
      category: "",
      state: "",
      sex: "",
    },
    onSubmit: (values) => {
      createProduct({ data: values });
      console.log("Form data submitted:", values);
    },
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
      <State formik={formik} />
      <Sex formik={formik} />
      <Size formik={formik} sizes={sizes.data} />
      <Brand formik={formik} />
      <Price formik={formik} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
