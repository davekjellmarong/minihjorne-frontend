import InputHeader from "@/components/header/InputHeader";
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
    <div className="px-12 py-10 flex flex-col justify-center ">
      <InputHeader optional={optional} center>
        {header}
      </InputHeader>

      <div className="flex flex-wrap justify-center  gap-y-14 gap-x-4 ">
        {children}
      </div>
    </div>
  );
};

export default FormFieldContainer;
