"use client";
import React, { useRef, useState } from "react";
import Category from "./Category";
import Color from "./Color";
import { State } from "./State";
import Sex from "./Sex";
import Price from "./Price";
import Size from "./Size";
import Brand from "./Brand";
import { useMutation, useQuery } from "@tanstack/react-query";
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
import Loading from "@/components/loading/Loading";
import Materials from "./Materials";
import Tags from "./Tags";
import Carousel from "react-multi-carousel";

interface ProductFormProps {
  formik: any;
}
const ProductForm = ({ formik }: ProductFormProps) => {
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
  const CarouselRef: any = useRef(null);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const nextSlide = () => {
    if (CarouselRef.current) {
      CarouselRef.current.next();
    }
  };
  if (
    !colors?.data ||
    !tags?.data ||
    !categories?.data ||
    !materials?.data ||
    !sizes?.data
  )
    return <Loading />;
  return (
    <form className="" onSubmit={formik.handleSubmit}>
      <Carousel
        responsive={responsive}
        ref={CarouselRef}
        // showDots
        customTransition="all 0.8s"
        transitionDuration={800}
      >
        <Color formik={formik} colors={colors.data} onChangeFunc={nextSlide} />
        <Category
          onChangeFunc={nextSlide}
          formik={formik}
          categories={categories.data}
        />
        <Size formik={formik} sizes={sizes.data} onChangeFunc={nextSlide} />
        <Tags onChangeFunc={nextSlide} formik={formik} tags={tags.data} />
        <Sex formik={formik} onChangeFunc={nextSlide} />
        <State formik={formik} onChangeFunc={nextSlide} />
        <Materials
          onChangeFunc={nextSlide}
          formik={formik}
          materials={materials.data}
        />
        <Brand formik={formik} />
        <Price formik={formik} />

        <div className="flex flex-col justify-center items-center h-full flex-wrap px-10 gap-8">
          <button
            type="submit"
            className=" bg-brand-500 py-2 px-6 text-white rounded w-56 h-14"
          >
            Lagre produkt
          </button>
          <p className="w-80 text-gray-500 text-sm text-center">
            Produktet blir bare lagret, ikke publisert
          </p>
        </div>
      </Carousel>
    </form>
  );
};

export default ProductForm;
