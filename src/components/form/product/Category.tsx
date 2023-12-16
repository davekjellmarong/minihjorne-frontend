import React from "react";
import {
  BaseballCap,
  Dress,
  Pants,
  Sneaker,
  TShirt,
} from "@phosphor-icons/react";
import { Category } from "@/utils/types";
interface CategoryProps {
  categories: Category[];
  formik: any;
}
const Category = ({ categories, formik }: CategoryProps) => {
  const iconsList: any = {
    BaseballCap: <BaseballCap size={32} />,
    Dress: <Dress size={32} />,
    Pants: <Pants size={32} />,
    Sneaker: <Sneaker size={32} />,
    TShirt: <TShirt size={32} />,
  };
  return (
    <div className="flex gap-4 flex-wrap">
      {categories.map((category) => {
        return (
          <div key={category.id} className="flex flex-col items-start w-20">
            <label className="font-light text-sm">
              {category.attributes.name}
            </label>
            {iconsList[category.attributes.icon]}
            <input
              type="radio"
              name="category"
              // id="category"
              className="h-8 w-8"
              value={category.id}
              // onChange={formik.handleChange}
              onChange={(e) => {
                const categoryId = e.target.value;
                const categoryName = category.attributes.name;

                // Set both color ID and color name to Formik values
                formik.setFieldValue("category", categoryId);
                formik.setFieldValue(`categoryName`, categoryName);
              }}
            />
          </div>
        );
      })}
      {/* <div className="flex flex-col items-start w-20">
        <label className="font-light text-sm">T Skjorte</label>
        <TShirt size={32} />
        <input type="radio" name="category" className="h-8 w-8" />
      </div>
      <div className="flex flex-col items-start w-20">
        <label className="font-light text-sm">Bukse</label>
        <Pants size={32} />
        <input type="radio" name="category" className="h-8 w-8" />
      </div>
      <div className="flex flex-col items-start w-20">
        <label className="font-light text-sm">Sko</label>
        <Sneaker size={32} />
        <input type="radio" name="category" className="h-8 w-8" />
      </div>
      <div className="flex flex-col items-start w-20">
        <label className="font-light text-sm">Lue</label>
        <BaseballCap size={32} />
        <input type="radio" name="category" className="h-8 w-8" />
      </div>
      <div className="flex flex-col items-start w-20">
        <label className="font-light text-sm">Kjole</label>
        <Dress size={32} />
        <input type="radio" name="category" className="h-8 w-8" />
      </div> */}
    </div>
  );
};

export default Category;
