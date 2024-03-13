"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { UserMethods } from "@/utils/utils";
import { toast } from "react-toastify";
import EditSalgsprofil from "./EditSalgsprofil";
import { AuthQueries } from "@/queryFactory/AuthQueryFactory";
import { UserQueries } from "@/queryFactory/UserQueryFactory";

const Page = () => {
  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: userData } = useQuery(UserQueries.me(jwt));
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
