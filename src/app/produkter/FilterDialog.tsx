import React, { useRef, useEffect, useState } from "react";

interface FilterDialogProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  width?: string;
}
const FilterDialog = ({
  children,
  open,
  setOpen,
  width = "w-screen",
}: FilterDialogProps) => {
  const [translate, setTranslate] = useState("-translate-x-96");
  const dialogRef = useRef<HTMLDialogElement>(null);

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
        setOpen(false);
      }
    });
  }, []);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
      setTranslate("translate-x-0");
    } else {
      setTranslate("-translate-x-[600px]");
      setTimeout(() => {
        dialog.close();
      }, 200);
    }
  }, [open]);
  return (
    <dialog
      ref={dialogRef}
      className={`fixed ${width} h-screen sm:w-96 sm:top-0 sm:right-0  m-0  bg-zinc-50 transition-transform duration-300 ease-in-out ${translate}`}
    >
      {children}
    </dialog>
  );
};

export default FilterDialog;
