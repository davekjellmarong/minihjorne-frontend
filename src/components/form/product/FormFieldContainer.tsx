import InputHeader from "@/components/header/InputHeader";
import React from "react";
interface FormFieldContainerProps {
  header: string;
  children: React.ReactNode;
}
const FormFieldContainer = ({ header, children }: FormFieldContainerProps) => {
  return (
    <div className="px-12 py-10 flex flex-col justify-center ">
      <InputHeader center>{header}</InputHeader>
      <div className="flex flex-wrap justify-center  gap-y-14 gap-x-4 ">
        {children}
      </div>
    </div>
  );
};

export default FormFieldContainer;
