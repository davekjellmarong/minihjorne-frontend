"use client";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";
import NextSlideButton from "./NextSlideButton";
import { useSuspenseQuery } from "@tanstack/react-query";
import { FilterQueries } from "@/queryFactory/Filter";

interface ColorProps {
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number;
  header?: string;
}
const Tags = ({
  formik,
  onChangeFunc,
  initialId,
  header = "Tema",
}: ColorProps) => {
  const { data: tags } = useSuspenseQuery(FilterQueries.tags());

  return (
    <>
      <FormFieldContainer optional header={header}>
        {tags.map((tag) => {
          return (
            <div key={tag.id} className="flex w-20 flex-col items-center">
              <label className={`text-sm font-light`}>
                {tag.attributes.name}
              </label>
              <input
                className="h-8 w-8 rounded"
                type="radio"
                name="tags"
                id="tags"
                defaultChecked={tag.id === initialId}
                value={tag.id}
                onChange={(e) => {
                  const tagId = e.target.value;
                  const tagName = tag.attributes.name;

                  // Set both color ID and color name to Formik values
                  formik.setFieldValue("tags", tagId);
                  formik.setFieldValue(`tagName`, tagName);
                  if (onChangeFunc) {
                    onChangeFunc();
                  }
                }}
              />
            </div>
          );
        })}
      </FormFieldContainer>
      <NextSlideButton onChangeFunc={onChangeFunc} />
    </>
  );
};

export default Tags;
