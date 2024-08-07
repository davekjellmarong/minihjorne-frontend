"use client";
import React, { Suspense, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Category from "./Category";
import Color from "./Color";
import { State } from "./State";
import Sex from "./Sex";
import Price from "./Price";
import Size from "./Size";
import Brand from "./Brand";
import Materials from "./Materials";
import Tags from "./Tags";
import Carousel from "react-multi-carousel";
import Deviation from "./Defect";
import CategoryTypes from "./CategoryType";
import { CategoryTypeEnum } from "@/utils/Enums";

interface ProductFormProps {
  formik: any;
}
const ProductForm = ({ formik }: ProductFormProps) => {
  const [categoryType, setCategoryType] = useState(CategoryTypeEnum.Inneklær);

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
    <form onSubmit={formik.handleSubmit}>
      <Suspense>
        <Carousel
          responsive={responsive}
          ref={CarouselRef}
          customTransition="all 0.8s"
          transitionDuration={800}
        >
          {/* TO DO TO-DO Decouple FieldComponents and FormFieldContainer */}
          <Sex formik={formik} onChangeFunc={nextSlide} />
          <CategoryTypes
            setCategoryType={setCategoryType}
            formik={formik}
            onChangeFunc={nextSlide}
          />
          <Category
            categoryType={categoryType}
            onChangeFunc={nextSlide}
            formik={formik}
          />
          <Color
            formik={formik}
            onChangeFunc={nextSlide}
            formName="color1"
            header="Farge 1"
          />
          <Color
            formik={formik}
            onChangeFunc={nextSlide}
            formName="color2"
            header="Farge 2 (valgfri)"
          />
          <Size formik={formik} onChangeFunc={nextSlide} />
          <Brand nextSlide={nextSlide} formik={formik} />
          <Materials
            header="Materiale (valgfri)"
            onChangeFunc={nextSlide}
            formik={formik}
          />
          <Tags
            header="Tema (valgfri)"
            onChangeFunc={nextSlide}
            formik={formik}
          />
          <State formik={formik} onChangeFunc={nextSlide} />
          <Deviation
            onChangeFunc={nextSlide}
            formik={formik}
            header="Avvik (valgfri)"
          />
          <Price nextSlide={nextSlide} formik={formik} />

          {/* TO-DO use button components */}
          <div className="flex h-full flex-col flex-wrap items-center justify-center gap-8 px-10">
            {Object.keys(formik.errors).length > 0 && (
              <div>
                {Object.entries(formik.errors).map(([key, error]) => (
                  <div className="text-red-600" key={key}>
                    {String(error)}!
                  </div>
                ))}
              </div>
            )}

            <button
              disabled={Object.keys(formik.errors).length > 0}
              type="submit"
              className=" h-14 w-56 rounded bg-brand-500 px-6 py-2 text-white disabled:opacity-50"
            >
              Lagre produkt
            </button>
            <p className="w-80 text-center text-sm text-gray-500">
              Produktet blir bare lagret, ikke publisert
            </p>
          </div>
        </Carousel>
      </Suspense>
    </form>
  );
};

export default ProductForm;
