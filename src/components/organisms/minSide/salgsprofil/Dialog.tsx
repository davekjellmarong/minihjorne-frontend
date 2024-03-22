import React, { useRef, useEffect } from "react";
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
import Color from "@/components/organisms/form/product/Color";
import { useQuery } from "@tanstack/react-query";
import { ColorsRQ } from "@/utils/types";
import { fetchColors } from "@/utils/utils";
import { tailwindColors } from "@/utils/constants";

interface DialogProps {
  formik: any;
  // icons: any;
  dialogRef: any;
}
const Dialog = ({ formik, dialogRef }: DialogProps) => {
  // const dialogRef = useRef<HTMLDialogElement>(null);
  const { data: colors } = useQuery<ColorsRQ>({
    queryKey: ["colors"],
    queryFn: fetchColors,
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
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.addEventListener("click", (e: MouseEvent) => {
      const dialogDimensions = dialog.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        dialog.close();
      }
    });
  }, []);
  return (
    <section className="flex flex-col items-start pl-10 sm:container">
      {/* <button
        type="button"
        className="rounded-lg border border-sky-600 bg-sky-800 px-5 py-2.5 text-sm font-medium text-sky-100 sm:hover:bg-sky-700 sm:hover:text-white focus:z-10 focus:outline-none focus:ring-0 focus:ring-sky-700"
        onClick={() => {
          dialogRef.current?.showModal();
        }}
      >
        Rediger salgsprofil
      </button> */}

      <dialog
        ref={dialogRef}
        className="open:animate-fade-in open:backdrop:animate-fade-in fixed  inset-0 right-full bg-zinc-50 bg-opacity-90 backdrop:bg-slate-600 backdrop:bg-opacity-50"
      >
        <div className="flex w-4/6 flex-col items-center gap-3 p-8 sm:w-[500px]">
          <h1 className="text-4xl font-bold">Rediger din salgsprofil</h1>
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
              <div className="flex justify-evenly">
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
              {colors && (
                <Color formik={formik} colors={colors.data} formName="color" />
              )}
              <label htmlFor="primaryColor">Primær farge</label>
              {/* <input
                  type="text"
                  id="primaryColor"
                  name="primaryColor"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder=""
                  required
                  value={formik.values.primaryColor}
                  onChange={formik.handleChange}
                /> */}
            </div>
            <button
              type="submit"
              onClick={() => {
                dialogRef.current?.close();
              }}
              className="rounded-lg border border-sky-600 bg-sky-800 px-5 py-2.5 text-sm font-medium text-sky-100 focus:z-10 focus:outline-none focus:ring-0 focus:ring-sky-700 sm:hover:bg-sky-700 sm:hover:text-white"
            >
              Lagre
            </button>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default Dialog;
