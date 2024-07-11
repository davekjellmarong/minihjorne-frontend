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
import { useSuspenseQuery } from "@tanstack/react-query";
import Materials from "./Materials";
import Tags from "./Tags";
import Carousel from "react-multi-carousel";
import Deviation from "./Defect";
import { FilterQueries } from "@/reactQuery/FilterQueryFactory";
import CategoryTypes from "./CategoryType";
import { CategoryTypeEnum } from "@/utils/constants";

interface ProductFormProps {
  formik: any;
}
const ProductForm = ({ formik }: ProductFormProps) => {
  const [categoryType, setCategoryType] = useState(CategoryTypeEnum.Inneklær);
  const { data: colors } = useSuspenseQuery(FilterQueries.colors());
  const { data: tags } = useSuspenseQuery(FilterQueries.tags());
  const { data: categories } = useSuspenseQuery(FilterQueries.categories());
  const { data: materials } = useSuspenseQuery(FilterQueries.materials());
  const { data: sizes } = useSuspenseQuery(FilterQueries.sizes());
  const { data: defects } = useSuspenseQuery(FilterQueries.defects());
  const { data: categoryTypes } = useSuspenseQuery(
    FilterQueries.categoryTypes(),
  );
  console.log("categoryTypes", categoryTypes);
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
        <CategoryTypes
          setCategoryType={setCategoryType}
          categoryTypes={categoryTypes}
          formik={formik}
          onChangeFunc={nextSlide}
        />

        <Category
          categoryType={categoryType}
          categoryTypes={categoryTypes}
          onChangeFunc={nextSlide}
          formik={formik}
          categories={categories}
        />
        <Color formik={formik} colors={colors} onChangeFunc={nextSlide} />
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
