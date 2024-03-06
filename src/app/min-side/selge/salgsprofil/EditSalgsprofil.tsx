import React, { useState } from "react";
import { UserBackend, User as UserType } from "@/utils/types";
import {
  tailwindColorsObject,
  tailwindColorsUserButton,
} from "@/utils/constants";
import Products from "@/components/products/Products";
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
import SalgsprofilHeader from "./SalgsprofilHeader";
import Link from "next/link";
interface EditSalgsprofilProps {
  formik: any;
  id: number;
  dialogRef: React.RefObject<HTMLDialogElement>;
}
const EditSalgsprofil = ({ formik, dialogRef, id }: EditSalgsprofilProps) => {
  const [editMode, setEditMode] = useState(false);
  const { data } = useQuery({
    queryKey: ["products", id],
    queryFn: () => {
      return ProductsMethods.getByUserId(id);
    },
  });
  const tailwindColor = tailwindColorsUserButton[formik.values.colorName];
  return (
    <div
      className={`${tailwindColor} relative flex h-full w-full items-center justify-center`}
    >
      <div className="m-4 flex flex-col items-center gap-6 rounded bg-white py-10 text-center shadow-2xl">
        <Link
          href="salgsprofil/rediger"
          // type="button"
          className="text-indigo flex gap-2 rounded-lg border border-indigo-600  bg-gray-300 px-2 py-2 text-sm font-medium hover:bg-indigo-700 hover:text-white focus:z-10 focus:outline-none focus:ring-0 focus:ring-indigo-700"
        >
          <Pencil size={20} color="indigo" />
          <p>Rediger</p>
        </Link>
        <SalgsprofilHeader user={formik.values} />
        <div>
          <Products data={data} />
        </div>
      </div>
    </div>
  );
};

export default EditSalgsprofil;
