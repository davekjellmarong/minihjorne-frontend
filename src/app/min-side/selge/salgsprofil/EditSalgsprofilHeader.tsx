import React from "react";

import {
  Baby,
  Bird,
  HeartStraight,
  Leaf,
  Rainbow,
  Star,
  User,
  UserCircle,
} from "@phosphor-icons/react";
import { UserBackend } from "@/utils/types";
interface EditSalgsprofilHeaderProps {
  formik: any;
}
const EditSalgsprofilHeader = ({ formik }: EditSalgsprofilHeaderProps) => {
  const icons: any = {
    Star: {
      component: <Star size={52} weight="fill" color={formik.values.color} />,
      title: "Star",
    },
    HeartStraight: {
      component: (
        <HeartStraight size={52} weight="fill" color={formik.values.color} />
      ),
      title: "HeartStraight",
    },
    Baby: {
      component: <Baby size={52} weight="fill" color={formik.values.color} />,
      title: "Baby",
    },
    Rainbow: {
      component: (
        <Rainbow size={52} weight="fill" color={formik.values.color} />
      ),
      title: "Rainbow",
    },
    Leaf: {
      component: <Leaf size={52} weight="fill" color={formik.values.color} />,
      title: "Leaf",
    },
    Bird: {
      component: <Bird size={52} weight="fill" color={formik.values.color} />,
      title: "Bird",
    },
  };
  return (
    <>
      <div className="flex items-center gap-14">
        {icons[formik.values.icon]?.component}
        <p className="font-semibold text-lg">{formik.values.header}</p>
        {icons[formik.values.icon]?.component}
      </div>
      <p className="text-gray-500 flex items-center gap-1">
        <User size={28} />
        <span>{formik.values.username}</span>
      </p>
      <p className="max-w-2xl">{formik.values.description}</p>
      <div className="flex gap-4">
        <div className="py-2 px-6 bg-gray-300 rounded">Gutt 50-80</div>
        <div className="py-2 px-6 bg-gray-300 rounded">Jente 20-50</div>
        <div className="py-2 px-6 bg-gray-300 rounded">Unisex 40-200</div>
      </div>
    </>
  );
};

export default EditSalgsprofilHeader;
