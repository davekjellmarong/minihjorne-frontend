import DisplayCategory from "@/components/category/DisplayCategory";
import ColorSquares from "@/components/color/ColorSquares";
import { CategoryRQ, ColorsRQ } from "@/utils/types";
import { fetchCategories, fetchColors } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface PreviewValuesProps {
  formik: any;
}

const PreviewValues = ({ formik }: PreviewValuesProps) => {
  const { data: colors } = useQuery<ColorsRQ>({
    queryKey: ["colors"],
    queryFn: fetchColors,
  });
  const color = colors?.data.find(
    (color) => String(color.id) === formik.values.colors
  );

  return (
    <div className="flex gap-8 flex-wrap">
      {color && <ColorSquares colors={[color]} />}
      <DisplayCategory category={formik.values.category} />
    </div>
  );
};

export default PreviewValues;
