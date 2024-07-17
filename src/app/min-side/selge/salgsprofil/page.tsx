"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { UserMethods } from "@/utils/utils";
import { toast } from "react-toastify";
import EditSalgsprofil from "../../../../components/organisms/minSide/salgsprofil/EditSalgsprofil";
import { AuthQueries } from "@/reactQuery/AuthQueryFactory";
import { UserQueries } from "@/reactQuery/UserQueryFactory";

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
      // icon: "",
    },

    onSubmit: (values) => {
      const data = {
        header: values.header,
        description: values.description,
        color: values.colorName,
        // icon: values.icon,
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
        // icon: userData.icon,
      });
    }
  }, [userData]);
  if (userData)
    return (
      <>
        <div className="flex flex-col items-center justify-center py-6">
          {/* <h2 className="font-semibold">Min salgsprofil</h2> */}
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
