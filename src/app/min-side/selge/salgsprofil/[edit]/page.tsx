"use client";
import { ColorsRQ, UserBackend } from "@/utils/types";
import { UserMethods, fetchColors } from "@/utils/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
import Color from "@/components/form/product/Color";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { UserQueries } from "@/queryFactory/UserQueryFactory";
import { AuthQueries } from "@/queryFactory/AuthQueryFactory";
import { FilterQueries } from "@/queryFactory/FilterQueryFactory";

const EditSalgsprofilForm = () => {
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
      console.log(data);
    },
  });
  const formik = useFormik({
    initialValues: {
      header: userData?.header,
      description: userData?.description,
      colorName: userData?.color,
      icon: userData?.icon,
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
            placeholder=""
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
            placeholder=""
            required
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="icon">Icon</label>
          <div className="flex flex-wrap justify-evenly">
            {Object.values(icons).map((icon: any) => {
              return (
                <div
                  key={icon.title}
                  className={`${
                    formik.values.icon === icon.title &&
                    "rounded bg-gray-400 shadow transition-colors duration-150"
                  } p-2`}
                  onClick={() => {
                    formik.setValues({
                      ...formik.values,
                      icon: icon.title,
                    });
                  }}
                >
                  {icon.component}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <label>Farge</label>
          {colors && (
            <div className="flex flex-wrap gap-4 py-4">
              <Color formik={formik} colors={colors} formName="color" />
            </div>
          )}
        </div>
        <button
          type="submit"
          onClick={() => {}}
          className="rounded-lg border border-sky-600 bg-sky-800 px-5 py-2.5 text-sm font-medium text-sky-100 focus:z-10 focus:outline-none focus:ring-0 focus:ring-sky-700 sm:hover:bg-sky-700 sm:hover:text-white"
        >
          Lagre
        </button>
      </form>
    </div>
  );
};

export default EditSalgsprofilForm;
