"use client";
import Products from "@/app/produkter/Products";
import Loading from "@/components/loading/Loading";
import { productByIdOption } from "@/components/reactQuery/Options";
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
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import Dialog from "./Dialog";
import { useFormik } from "formik";
import { ColorsRQ } from "@/utils/types";
import { UserMethods, fetchColors } from "@/utils/utils";
import { tailwindColors, tailwindColorsObject } from "@/utils/constants";
import { toast } from "react-toastify";

interface UserData {
  username: string;
  id: number;
  email: string;
  header: string;
  icon: string;
  description: string;
  color: string;
}
const Page = () => {
  const { data: userData } = useQuery<UserData>({
    queryKey: ["login-user"],
  });
  const { mutate: updateUser } = useMutation({
    mutationFn: (values: any) => {
      return UserMethods.put(values, userData?.id);
    },
    onSuccess: (data) => {
      toast.info(`Salgsprofil lagret`);
      console.log(data);
    },
  });
  const formik = useFormik({
    initialValues: {
      header: "",
      description: "",
      color: "",
      colorName: "",
      icon: "",
    },

    onSubmit: (values) => {
      const data = {
        header: values.header,
        description: values.description,
        color: values.colorName,
        icon: values.icon,
      };
      updateUser(data);
      console.log("Form data submitted:", values);
    },
  });
  useEffect(() => {
    if (userData?.id) {
      formik.setValues({
        header: userData.header,
        description: userData.description,
        color: userData.color,
        colorName: userData.color,
        icon: userData.icon,
      });
    }
  }, [userData]);
  const userId = userData?.id;
  const { data, isLoading } = useQuery(productByIdOption(userId));
  const icons: any = {
    Star: {
      component: (
        <Star size={52} weight="fill" color={formik.values.colorName} />
      ),
      title: "Star",
    },
    HeartStraight: {
      component: (
        <HeartStraight
          size={52}
          weight="fill"
          color={formik.values.colorName}
        />
      ),
      title: "HeartStraight",
    },
    Baby: {
      component: (
        <Baby size={52} weight="fill" color={formik.values.colorName} />
      ),
      title: "Baby",
    },
    Rainbow: {
      component: (
        <Rainbow size={52} weight="fill" color={formik.values.colorName} />
      ),
      title: "Rainbow",
    },
    Leaf: {
      component: (
        <Leaf size={52} weight="fill" color={formik.values.colorName} />
      ),
      title: "Leaf",
    },
    Bird: {
      component: (
        <Bird size={52} weight="fill" color={formik.values.colorName} />
      ),
      title: "Bird",
    },
  };

  const tailwindColor = tailwindColorsObject[formik.values.colorName];

  if (isLoading) return <Loading />;
  if (data) {
    return (
      <div
        className={`${tailwindColor} h-full w-full flex justify-center items-center`}
      >
        <div className="m-16 shadow-2xl rounded bg-white text-center flex flex-col items-center py-10 gap-6">
          <div className="flex justify-start w-full">
            <Dialog icons={icons} formik={formik} />
          </div>
          <div className="flex items-center gap-14">
            {icons[formik.values.icon]?.component}
            <p className="font-semibold text-lg">{formik.values.header}</p>
            {icons[formik.values.icon]?.component}
          </div>
          <p className="text-gray-500 flex items-center gap-1">
            <User size={28} />
            <span>{userData?.username}</span>
          </p>
          <p className="max-w-2xl">
            {formik.values.description}
            {/* Iselin, dedikert til å tilby kvalitetsklær for barn, ønsker å dele
            det beste av brukt barneklær med deg. Gjennom nøye kuraterte
            kolleksjoner fokuserer Iselin på bærekraft og stil, og gir deg
            tilgang til nydelige plagg for de små. Utforsk hennes digitale
            salgsside for en unik og miljøvennlig handleopplevelse. Velkommen
            til Iselins univers av kjærlig utvalgte, brukte barneklær, hvor
            bærekraft møter barndommens glede. */}
          </p>
          <div className="flex gap-4">
            <div className="py-2 px-6 bg-gray-300 rounded">Gutt 50-80</div>
            <div className="py-2 px-6 bg-gray-300 rounded">Jente 20-50</div>
            <div className="py-2 px-6 bg-gray-300 rounded">Unisex 40-200</div>
          </div>
          <Products data={data.data} />
        </div>
      </div>
    );
  }
};

export default Page;
