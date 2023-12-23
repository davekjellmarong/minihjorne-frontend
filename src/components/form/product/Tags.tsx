"use client";
import InputHeader from "@/components/header/InputHeader";
import { tailwindColorsObject } from "@/utils/constants";
import { Color, Tag } from "@/utils/types";
import React from "react";

interface ColorProps {
  tags: Tag[];
  formik: any;
  onChangeFunc?: () => void;
}
const Tags = ({ tags, formik, onChangeFunc }: ColorProps) => {
  return (
    <div>
      <InputHeader>Tags</InputHeader>
      <div className="flex gap-4 flex-wrap">
        {tags.map((tag) => {
          return (
            <div key={tag.id} className="w-20 flex flex-col">
              <label className={`font-light text-sm`}>
                {tag.attributes.name}
              </label>
              <input
                className={`w-8 h-8`}
                type="radio"
                name="tags"
                id="tags"
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
      </div>
    </div>
  );
};

export default Tags;
