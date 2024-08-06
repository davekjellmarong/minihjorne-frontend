"use client";
import { Tag } from "@/utils/types";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";
import NextSlideButton from "./NextSlideButton";

interface ColorProps {
  tags: Tag[];
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number;
  header?: string;
}
const Tags = ({
  tags,
  formik,
  onChangeFunc,
  initialId,
  header = "Kategori",
}: ColorProps) => {
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
