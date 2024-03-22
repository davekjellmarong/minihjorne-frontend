import { XCircle } from "@phosphor-icons/react";
import React, { useRef, useEffect, useState } from "react";

interface DialogProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  width?: string;
  height?: string;
}
const Dialog = ({ children, open, setOpen,width = "w-auto", height = "h-auto" }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [scale, setScale] = useState("-scale-x-96");
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
      setScale("scale-96");
    } else {
      setScale("scale-0");
      setTimeout(() => {
        dialog.close();
      }, 200);
    }
  }, [open]);
  return (
    <dialog
      ref={dialogRef}
      className={`fixed ${width} ${height} mx-4 rounded relative  sm:w-[900px] sm:h-[750px] m-auto bg-zinc-50 transition-transform duration-200  ${scale}`}
    >
      <button
        onClick={() => setOpen(false)}
        className="absolute top-0 right-0 p-4 z-30"
      >
      <XCircle
        size={24}
        weight="thin"
        />
        </button>
      {children}
    </dialog>
  );
};

export default Dialog;
