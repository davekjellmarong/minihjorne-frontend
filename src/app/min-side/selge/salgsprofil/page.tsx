"use client";
import Products from "@/components/products/Products";
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
import React, { use, useEffect, useRef } from "react";
import Dialog from "./Dialog";
import { useFormik } from "formik";
import { ColorsRQ, ProductBackend, UserBackend } from "@/utils/types";
import { ProductsMethods, UserMethods, fetchColors } from "@/utils/utils";
import {
  tailwindColors,
  tailwindColorsObject,
  tailwindColorsUserButton,
} from "@/utils/constants";
import { toast } from "react-toastify";
import Salgsprofil from "./Salgsprofil";
import EditSalgsprofil from "./EditSalgsprofil";

const Page = () => {
  const { data: userData } = useQuery<UserBackend>({
    queryKey: ["login-user"],
  });
  const { data: jwt } = useQuery({
    queryKey: ["jwt"],
  });
  const { mutate: updateUser } = useMutation({
    mutationFn: (values: any) => {
      return UserMethods.put(values, userData?.id, jwt);
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
  if (userData)
    return (
      <>
        <EditSalgsprofil formik={formik} user={userData} />
      </>
    );
};

export default Page;
