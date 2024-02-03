import React from "react";
import {
  BaseballCap,
  Dress,
  Hand,
  Hoodie,
  Pants,
  Person,
  Sneaker,
  TShirt,
} from "@phosphor-icons/react";
import { Category } from "@/utils/types";
import {
  Jacket,
  OutdoorSuit,
  Shorts,
  Skirt,
  Sweater,
  Body,
} from "@/components/icons/SVGicons";
import InputHeader from "@/components/header/InputHeader";
import FormFieldContainer from "./FormFieldContainer";
interface CategoryProps {
  categories: Category[];
  formik: any;
  onChangeFunc?: () => void;
}
const Category = ({ categories, formik, onChangeFunc }: CategoryProps) => {
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
  };
  return (
    <FormFieldContainer header="Katergori">
      {categories.map((category) => {
        return (
          <div key={category.id} className="flex flex-col items-center w-20">
            <label className="font-light text-sm">
              {category.attributes.name}
            </label>
            {iconsList[category.attributes.icon]}
            <input
              type="radio"
              name="category"
              // id="category"
              className="h-8 w-8 rounded"
              value={category.id}
              required
              // onChange={formik.handleChange}
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
  );
};

export default Category;
