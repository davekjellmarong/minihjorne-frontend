"use client";
import React, { useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Category from "./Category";
import Color from "./Color";
import { State } from "./State";
import Sex from "./Sex";
import Price from "./Price";
import Size from "./Size";
import Brand from "./Brand";
import { useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";
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
import Loading from "@/components/molecules/loading/Loading";
import Materials from "./Materials";
import Tags from "./Tags";
import Carousel from "react-multi-carousel";
import FormFieldContainer from "./FormFieldContainer";
import Deviation from "./Defect";
import { FilterQueries } from "@/reactQuery/FilterQueryFactory";

interface ProductFormProps {
  formik: any;
}
const ProductForm = ({ formik }: ProductFormProps) => {
  const { data: colors } = useSuspenseQuery(FilterQueries.colors());
  const { data: tags } = useSuspenseQuery(FilterQueries.tags());
  const { data: categories } = useSuspenseQuery(FilterQueries.categories());
  const { data: materials } = useSuspenseQuery(FilterQueries.materials());
  const { data: sizes } = useSuspenseQuery(FilterQueries.sizes());
  const { data: defects } = useSuspenseQuery(FilterQueries.defects());
  const CarouselRef: any = useRef(null);
  const responsive = {
    mobile: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };
  const nextSlide = () => {
    if (CarouselRef.current) {
      CarouselRef.current.next();
    }
  };

  return (
    <form className="" onSubmit={formik.handleSubmit}>
      <Carousel
        responsive={responsive}
        ref={CarouselRef}
        // showDots
        customTransition="all 0.8s"
        transitionDuration={800}
      >
        {/* TO DO TO-DO Decouple FieldComponents and FormFieldContainer */}
        <FormFieldContainer header="Farge">
          <Color formik={formik} colors={colors} onChangeFunc={nextSlide} />
        </FormFieldContainer>
        <Category
          onChangeFunc={nextSlide}
          formik={formik}
          categories={categories}
        />
        <Size formik={formik} sizes={sizes} onChangeFunc={nextSlide} />
        <Tags onChangeFunc={nextSlide} formik={formik} tags={tags} />
        <Sex formik={formik} onChangeFunc={nextSlide} />
        <State formik={formik} onChangeFunc={nextSlide} />
        <Materials
          onChangeFunc={nextSlide}
          formik={formik}
          materials={materials}
        />
        <Deviation onChangeFunc={nextSlide} formik={formik} defects={defects} />
        <Brand nextSlide={nextSlide} formik={formik} />
        <Price nextSlide={nextSlide} formik={formik} />

        <div className="flex h-full flex-col flex-wrap items-center justify-center gap-8 px-10">
          <button
            type="submit"
            className=" h-14 w-56 rounded bg-brand-500 px-6 py-2 text-white"
          >
            Lagre produkt
          </button>
          <p className="w-80 text-center text-sm text-gray-500">
            Produktet blir bare lagret, ikke publisert
          </p>
        </div>
      </Carousel>
    </form>
  );
};

export default ProductForm;
