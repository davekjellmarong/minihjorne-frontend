"use client";
import { CategoryType } from "@/utils/types";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";
import { CategoryTypeEnum } from "@/utils/Enums";

interface ColorProps {
  categoryTypes: CategoryType[];
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number;
  setCategoryType: (categoryType: CategoryTypeEnum) => void;
}
const CategoryTypes = ({
  categoryTypes,
  setCategoryType,
  formik,
  onChangeFunc,
  initialId,
}: ColorProps) => {
  return (
    <FormFieldContainer header="Type plagg">
      {categoryTypes.map((categoryType) => {
        return (
          <div
            key={categoryType.id}
            className="flex w-20 flex-col items-center"
          >
            <label className={`text-sm font-light`}>
              {categoryType.attributes.name}
            </label>
            <input
              className="h-8 w-8 rounded"
              type="radio"
              name="categoryTypes"
              id="categoryTypes"
              value={categoryType.id}
              defaultChecked={categoryType.id === initialId}
              // onChange={formik.handleChange}
              onChange={(e) => {
                const categoryTypeId = e.target.value;
                const categoryTypeName = categoryType.attributes.name;

                // Set both color ID and color name to Formik values
                formik.setFieldValue("category_type", categoryTypeId);
                formik.setFieldValue(`categoryTypeName`, categoryTypeName);

                // todo - do this dynamically based on fetched data from categoryTypes
                switch (categoryTypeName) {
                  case "Uteklær":
                    setCategoryType(CategoryTypeEnum.Uteklær);
                    break;
                  case "Regnklær":
                    setCategoryType(CategoryTypeEnum.Regnklær);
                    break;
                  case "Vinterklær":
                    setCategoryType(CategoryTypeEnum.Vinterklær);
                    break;
                  case "Inneklær":
                    setCategoryType(CategoryTypeEnum.Inneklær);
                    break;
                  case "Penklær":
                    setCategoryType(CategoryTypeEnum.Penklær);
                }

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

export default CategoryTypes;
