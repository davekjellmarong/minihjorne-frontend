import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { FilterQueries } from "@/reactQuery/FilterQueryFactory";
import Color from "../../productForm/Color";

interface DialogProps {
  formik: any;
  dialogRef: any;
}
const Dialog = ({ formik, dialogRef }: DialogProps) => {
  const { data: colors } = useQuery(FilterQueries.colors());
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
              {colors && (
                <Color formik={formik} colors={colors} formName="color" />
              )}
              <label htmlFor="primaryColor">Primær farge</label>
            </div>
            {/* TO-DO use button component */}
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
