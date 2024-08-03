"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const OmOssLinks = () => {
  const path = usePathname();
  const links = [
    {
      name: "Hva er Minihjørne?",
      href: "/om-oss/hva-er-minihjorne",
    },
    {
      name: "Hvorfor bruke oss",
      href: "/om-oss/hvorfor-bruke-oss",
    },
    {
      name: "Selge klær",
      href: "/om-oss/hvordan-selge",
    },
    {
      name: "Kjøpe klær",
      href: "/om-oss/kjope",
    },
    {
      name: "Levere klær",
      href: "/om-oss/levering",
    },
    {
      name: "Sende klær",
      href: "/om-oss/sende",
    },
    {
      name: "Priser?",
      href: "/om-oss/priser",
    },
    {
      name: "Selger garanti",
      href: "/om-oss/selger-garanti",
    },
    // {
    //   name: "Våre produkter",
    //   href: "/om-oss/tilstand",
    // },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-evenly gap-4  p-4">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={`w-[45%] rounded-lg border px-2 py-3 text-center ${path === link.href ? "border-brand-400 bg-brand-400 text-white shadow-lg" : "bg-white"} transition-all duration-300`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <hr />
    </>
  );
};

export default OmOssLinks;
