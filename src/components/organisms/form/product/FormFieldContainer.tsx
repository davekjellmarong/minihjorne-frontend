import InputHeader from "@/components/atoms/InputHeader";
import React from "react";
interface FormFieldContainerProps {
  header: string;
  children: React.ReactNode;
  optional?: boolean;
}
const FormFieldContainer = ({
  header,
  children,
  optional = false,
}: FormFieldContainerProps) => {
  return (
    <div className="flex flex-col justify-center px-12 py-10 ">
      <InputHeader optional={optional} center>
        {header}
      </InputHeader>

      <div className="flex flex-wrap justify-center  gap-x-4 gap-y-14 ">
        {children}
      </div>
    </div>
  );
};

export default FormFieldContainer;
