import { CategoryRQ } from "@/utils/types";
import { fetchCategories } from "@/utils/utils";
import {
  BaseballCap,
  Dress,
  Hand,
  Hoodie,
  Pants,
  Sneaker,
  TShirt,
} from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  Body,
  Jacket,
  OutdoorSuit,
  Shorts,
  Skirt,
} from "../../../molecules/SVGicons";
interface DisplayCategoryProps {
  category: any;
}

const DisplayCategory = ({ category }: DisplayCategoryProps) => {
  const { data: categories } = useQuery<CategoryRQ>({
    queryKey: ["category"],
    queryFn: fetchCategories,
  });
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
  const categoryData = categories?.data.find(
    ({ id }) => String(id) === category,
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
