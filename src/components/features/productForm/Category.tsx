import React, { useEffect, useState } from "react";
import {
  BaseballCap,
  Dress,
  Hand,
  Hoodie,
  Pants,
  Sneaker,
  TShirt,
} from "@phosphor-icons/react";
import {
  Category as CategoryType,
  CategoryType as CategoryTypes,
} from "@/utils/types";
import {
  Jacket,
  OutdoorSuit,
  Shorts,
  Skirt,
  Body,
  Socks,
  Set,
  OnePiece,
  Pajamas,
  Shirt,
  Blouse,
  Singlet,
} from "@/components/common/icons/SVGicons";
import FormFieldContainer from "./FormFieldContainer";
import { CategoryTypeEnum } from "@/utils/Enums";
import { useSuspenseQuery } from "@tanstack/react-query";
import { FilterQueries } from "@/queryFactory/Filter";
interface CategoryProps {
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number;
  categoryType: CategoryTypeEnum;
}
const Category = ({
  formik,
  onChangeFunc,
  initialId,
  categoryType,
}: CategoryProps) => {
  const { data: categories } = useSuspenseQuery(FilterQueries.categories());
  const { data: categoryTypes } = useSuspenseQuery(
    FilterQueries.categoryTypes(),
  );
  const [categoriesFiltered, setCategoriesFiltered] =
    useState<CategoryType[]>();

  useEffect(() => {
    if (!categoryType) {
      setCategoriesFiltered(categories);
    } else {
      const filteredCategories = categoryTypes?.find(
        (x) => x.id === categoryType,
      )?.attributes.categories?.data;
      setCategoriesFiltered(filteredCategories);
    }
  }, [categoryType, categories]);

  const iconsList: any = {
    Head: <BaseballCap size={32} />,
    Dress: <Dress size={32} />,
    Pants: <Pants size={32} />,
    Shoes: <Sneaker size={32} />,
    TShirt: <TShirt size={32} />,
    Sweater: <Hoodie size={32} />,
    Gloves: <Hand size={32} />,
    Body: <Body />,
    Jacket: <Jacket />,
    Shorts: <Shorts />,
    Skirt: <Skirt />,
    OutdoorSuit: <OutdoorSuit />,
    Set: <Set />,
    Socks: <Socks />,
    OnePiece: <OnePiece />,
    Pajamas: <Pajamas />,
    Shirt: <Shirt />,
    Blouse: <Blouse />,
    Singlet: <Singlet />,
  };
  return (
    <>
      <FormFieldContainer header="Plagg">
        {categoriesFiltered?.map((category) => {
          return (
            <div key={category.id} className="flex w-20 flex-col items-center">
              <label className="text-sm font-light">
                {category.attributes.name}
              </label>
              {iconsList[category.attributes.icon]}
              <input
                type="radio"
                name="category"
                className="h-8 w-8 rounded"
                value={category.id}
                defaultChecked={category.id === initialId}
                required
                onChange={(e) => {
                  const categoryId = e.target.value;
                  const categoryName = category.attributes.name;

                  // Set both color ID and color name to Formik values
                  formik.setFieldValue("category", categoryId);
                  formik.setFieldValue(`categoryName`, categoryName);
                  if (onChangeFunc) {
                    onChangeFunc();
                  }
                }}
              />
            </div>
          );
        })}
      </FormFieldContainer>
    </>
  );
};

export default Category;
