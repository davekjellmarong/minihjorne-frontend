"use client";
import { tailwindColorsObject } from "@/utils/constants";
import { Color, Tag } from "@/utils/types";
import React from "react";

interface ColorProps {
  tags: Tag[];
  formik: any;
}
const Tags = ({ tags, formik }: ColorProps) => {
  return (
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
              onChange={formik.handleChange}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
