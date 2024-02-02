import React from "react";
import { UserBackend, User as UserType } from "@/utils/types";
import {
  tailwindColorsObject,
  tailwindColorsUserButton,
} from "@/utils/constants";
import Products from "@/app/produkter/Products";
import { useQuery } from "@tanstack/react-query";
import { ProductsMethods } from "@/utils/utils";
import EditSalgsprofilHeader from "./EditSalgsprofilHeader";
import {
  Baby,
  Bird,
  HeartStraight,
  Leaf,
  Pen,
  Pencil,
  Rainbow,
  Star,
  User,
  UserCircle,
} from "@phosphor-icons/react";
interface EditSalgsprofilProps {
  formik: any;
  id: number;
  dialogRef: React.RefObject<HTMLDialogElement>;
}
const EditSalgsprofil = ({ formik, dialogRef, id }: EditSalgsprofilProps) => {
  const { data } = useQuery({
    queryKey: ["products", id],
    queryFn: () => {
      return ProductsMethods.getByUserId(id);
    },
  });
  const tailwindColor = tailwindColorsUserButton[formik.values.colorName];
  return (
    <div
      className={`${tailwindColor} h-full w-full flex justify-center items-center relative`}
    >
      <div className="m-10 w-full shadow-2xl rounded bg-white text-center flex flex-col items-center py-10 gap-6">
        {dialogRef && (
          <div className="absolute top-4 left-4">
            <button
              type="button"
              className="rounded-lg border border-indigo-600 bg-gray-300  px-2 py-2 text-sm font-medium text-indigo-100 hover:bg-indigo-700 hover:text-white focus:z-10 focus:outline-none focus:ring-0 focus:ring-indigo-700"
              onClick={() => {
                dialogRef.current?.showModal();
              }}
            >
              <Pencil size={20} color="indigo" />
              {/* Rediger */}
            </button>
          </div>
        )}
        <EditSalgsprofilHeader formik={formik} />
        <div className="w-5/6">
          <Products data={data} />
        </div>
      </div>
    </div>
  );
};

export default EditSalgsprofil;
