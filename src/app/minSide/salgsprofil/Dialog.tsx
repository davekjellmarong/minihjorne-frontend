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
import Color from "@/components/form/product/Color";
import { useQuery } from "@tanstack/react-query";
import { ColorsRQ } from "@/utils/types";
import { fetchColors } from "@/utils/utils";
import { tailwindColors } from "@/utils/constants";
interface DialogProps {
  formik: any;
  icons: any;
}
const Dialog = ({ formik, icons }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { data: colors } = useQuery<ColorsRQ>({
    queryKey: ["colors"],
    queryFn: fetchColors,
  });
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

    dialog.addEventListener("close", () => {
      console.log("dialog closed");
    });

    dialog.addEventListener("cancel", (event) => {
      console.log("dialog cancelled");
      event.preventDefault();
    });
  }, []);
  return (
    <section className="flex flex-col items-start pl-10 sm:container">
      <button
        type="button"
        className="rounded-lg border border-sky-600 bg-sky-800 px-5 py-2.5 text-sm font-medium text-sky-100 hover:bg-sky-700 hover:text-white focus:z-10 focus:outline-none focus:ring-0 focus:ring-sky-700"
        onClick={() => {
          dialogRef.current?.showModal();
        }}
      >
        Rediger salgsprofil
      </button>

      <dialog
        ref={dialogRef}
        className="inset-0 fixed right-full  bg-zinc-50 bg-opacity-90 backdrop:bg-slate-600 backdrop:bg-opacity-50 open:animate-fade-in open:backdrop:animate-fade-in"
      >
        <div
          className="flex flex-col items-center gap-3 p-8 "
          style={{ width: 700 }}
        >
          <h1 className="text-4xl font-bold">Rediger din salgsprofil</h1>
          <form
            method="dialog"
            className="flex flex-col gap-6 w-full"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label htmlFor="header">Overskrift</label>
              <input
                type="text"
                id="header"
                name="header"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
                className="bg-gray-50 h-56 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
                        "bg-gray-400 rounded transition-colors duration-150 shadow"
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
              className="rounded-lg border border-sky-600 bg-sky-800 px-5 py-2.5 text-sm font-medium text-sky-100 hover:bg-sky-700 hover:text-white focus:z-10 focus:outline-none focus:ring-0 focus:ring-sky-700"
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
