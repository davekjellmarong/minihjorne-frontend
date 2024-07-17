import InputHeader from "@/components/atoms/InputHeader";
import { Question } from "@phosphor-icons/react";
import React, { ReactComponentElement, useState } from "react";
import Dialog from "../../dialog/Dialog";
import FilterDialog from "../../product/FilterDialog";
import Button from "@/components/atoms/Button";
interface FormFieldContainerProps {
  header: string;
  children: React.ReactNode;
  optional?: boolean;
  padding?: boolean;
  Tips?: () => React.JSX.Element;
}
const FormFieldContainer = ({
  header,
  children,
  optional = false,
  padding = true,
  Tips,
}: FormFieldContainerProps) => {
  const paddingClass = padding ? "px-12 py-4" : "";
  const [modal, setModal] = useState(false);
  return (
    <div
      className={`relative flex flex-col justify-center ${paddingClass} py-4`}
    >
      <FilterDialog open={modal} setOpen={setModal}>
        {Tips && (
          <div className="flex flex-wrap justify-center gap-4 px-4 py-4">
            <Tips />
            <Button
              onClick={() => {
                setModal(false);
              }}
              icon="arrowRight"
            >
              Fortsett
            </Button>
          </div>
        )}
      </FilterDialog>
      <InputHeader optional={optional} center>
        {Tips && (
          <button
            onClick={() => {
              setModal(true);
            }}
            className="absolute right-12 top-10"
          >
            <Question size={28} weight="thin" color="blue" />
          </button>
        )}
        {header}
      </InputHeader>

      <div className="flex flex-wrap justify-center  gap-x-4 gap-y-6 ">
        {children}
      </div>
    </div>
  );
};

export default FormFieldContainer;
