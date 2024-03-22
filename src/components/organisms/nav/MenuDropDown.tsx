import Link from "next/link";
import React from "react";

interface MenuDropDownProps {
  setIsOpen: (arg0: boolean) => void;
  isOpen: boolean;
}
export const MenuDropDown = ({ setIsOpen, isOpen }: MenuDropDownProps) => {
  return (
    <div className="flex items-center gap-6 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center rounded  py-2 "
      >
        <svg
          className={`size-6 fill-current ${isOpen ? "hidden" : "block"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <svg
          className={`size-6 fill-current ${isOpen ? "block" : "hidden"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </button>
      <Link href="/produkter" className="mb-0   pb-0 ">
        {/* <Image src="/logoo.png" alt="logo" width={250} height={250} /> */}
        Mini Hjørne
      </Link>
    </div>
  );
};
