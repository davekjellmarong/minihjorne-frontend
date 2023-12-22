import { CategoryRQ } from "@/utils/types";
import { fetchCategories } from "@/utils/utils";
import {
  BaseballCap,
  Dress,
  Pants,
  Sneaker,
  TShirt,
} from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
interface DisplayCategoryProps {
  category: any;
}

const DisplayCategory = ({ category }: DisplayCategoryProps) => {
  const { data: categories } = useQuery<CategoryRQ>({
    queryKey: ["category"],
    queryFn: fetchCategories,
  });
  const iconsList: any = {
    BaseballCap: <BaseballCap size={32} />,
    Dress: <Dress size={32} />,
    Pants: <Pants size={32} />,
    Sneaker: <Sneaker size={32} />,
    TShirt: <TShirt size={32} />,
  };
  console.log(category);
  const categoryData = categories?.data.find(
    ({ id }) => String(id) === category
  );
  if (categoryData) {
    return (
      <div>
        <p>{categoryData.attributes.name}</p>
        {iconsList[categoryData.attributes.icon]}
      </div>
    );
  }
};

export default DisplayCategory;
