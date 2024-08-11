"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { AuthQueries } from "@/queryFactory/Auth";
import { UserMethods, UserQueries } from "@/queryFactory/User";
import EditSalgsprofil from "@/components/features/minSide/salgsprofil/EditSalgsprofil";

const Page = () => {
  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: userData } = useQuery(UserQueries.me(jwt));
  // TO-DO The user can just update their active field here. we need a way to prevent this. change update user permissions to false and allways use secret token from server action to update user
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
    },

    onSubmit: (values) => {
      const data = {
        header: values.header,
        description: values.description,
        color: values.colorName,
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
      });
    }
  }, [userData]);
  if (userData)
    return (
      <>
        <div className="flex flex-col items-center justify-center py-6">
          <p className="max-w-[500px] px-6">
            Dette er din egen salgsprofil. Under ser du siden som en kjøper vil
            se når de trykker seg inn på profilen din. Her har du mulighet til å
            endre på utseende til å gjøre din salgsprofil personlig.{" "}
          </p>
        </div>
        <EditSalgsprofil formik={formik} user={userData} />
      </>
    );
};

export default Page;
