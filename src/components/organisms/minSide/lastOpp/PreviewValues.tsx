import DisplayCategory from "@/components/organisms/filters/category/DisplayCategory";
import ColorSquares from "@/components/organisms/filters/color/ColorSquares";
import { FilterQueries } from "@/reactQuery/FilterQueryFactory";
import { CategoryRQ, ColorsRQ } from "@/utils/types";
import { fetchCategories, fetchColors } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface PreviewValuesProps {
  formik: any;
}

const PreviewValues = ({ formik }: PreviewValuesProps) => {
  const { data: colors } = useQuery(FilterQueries.colors());
  const color = colors?.find(
    (color) => String(color.id) === formik.values.colors,
  );

  return (
    <div className="flex flex-wrap justify-end gap-8 opacity-60">
      <div className="w-1/4">{color && <ColorSquares colors={[color]} />}</div>
      <div className="w-1/4">
        <DisplayCategory category={formik.values.category} />
      </div>
      <p className="w-1/4">{formik.values.materialName}</p>
      <p className="w-1/4">{formik.values.tagName}</p>
      <p className="w-1/4">{formik.values.stateName}</p>
      <p className="w-1/4">{formik.values.sexName}</p>
      <p className="w-1/4">{formik.values.sizeName}</p>
      <p className="w-1/4">{formik.values.price}</p>
      <p className="w-1/4">{formik.values.brand}</p>
    </div>
  );
};

export default PreviewValues;
