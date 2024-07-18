"use client";
import { UserMethods } from "@/utils/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import { AuthQueries } from "@/reactQuery/AuthQueryFactory";
import { FilterQueries } from "@/reactQuery/FilterQueryFactory";
import { useRouter } from "next/navigation";
import Button from "@/components/common/buttons/Button";
import Color from "@/components/features/productForm/Color";

const EditSalgsprofilForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: colors } = useQuery(FilterQueries.colors());
  const { data: userData } = useQuery(UserQueries.me(jwt));
  const { mutate: updateUser } = useMutation({
    mutationFn: (values: any) => {
      return UserMethods.put(values, userData?.id, jwt);
    },
    onSuccess: (data) => {
      toast.info(`Salgsprofil lagret`);
      router.back();
      queryClient.invalidateQueries(UserQueries.me(jwt));
    },
  });
  const formik = useFormik({
    initialValues: {
      header: userData?.header,
      description: userData?.description,
      colorName: userData?.color,
    },

    onSubmit: (values) => {
      const data = {
        header: values.header,
        description: values.description,
        color: values.colorName,
      };
      updateUser(data);
    },
  });
  return (
    <div className="flex flex-col items-center gap-3 p-8">
      <h1 className="text-xl font-bold">Rediger din salgsprofil</h1>
      <form
        method="dialog"
        className="flex w-full flex-col gap-6"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label htmlFor="header">Overskrift</label>
          <input
            type="text"
            id="header"
            name="header"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            placeholder="Eks: Leon's lille butikk eller Babyklær 1-2 år."
            required
            value={formik.values.header}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Beskrivelse</label>
          <textarea
            id="description"
            name="description"
            className="block h-56 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            placeholder="Eks: Velkommen til min lille butikk. Her finner du klær til barn i alle aldre. 
            Jeg har klær fra kjente merker og klær som er laget av resirkulerte materialer.
            Håper du finner noe du liker."
            required
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label>Farge</label>
          {colors && (
            <div className="flex flex-wrap gap-4 py-4">
              <Color
                padding={true}
                formik={formik}
                colors={colors}
                formName="color"
              />
            </div>
          )}
        </div>
        <div className="flex gap-10">
          <Button
            type="outline"
            onClick={() => {
              router.back();
            }}
            className="grow"
          >
            Avbryt
          </Button>
          <Button submit className="grow">
            Lagre
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditSalgsprofilForm;
