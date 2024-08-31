"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const OmOssLinks = () => {
  const path = usePathname();
  useEffect(() => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }, [path]);
  const links = [
    {
      name: "Hva er Minihjørne?",
      href: "/om-oss/hva-er-minihjorne",
    },
    // {
    //   name: "Hvorfor bruke oss",
    //   href: "/om-oss/hvorfor-bruke-oss",
    // },
    {
      name: "Selge klær - Selvregistrering",
      href: "/om-oss/selvregistrering",
    },
    {
      name: "Registrere klær",
      href: "/om-oss/registrering",
    },
    {
      name: "Selge klær - Full service pakke",
      href: "/om-oss/full-service-pakke",
    },
    {
      name: "Salgsprofil",
      href: "/om-oss/salgsprofil",
    },
    {
      name: "Levere klær",
      href: "/om-oss/levering",
    },
    // {
    //   name: "Kjøpe klær",
    //   href: "/om-oss/kjope",
    // },
    // {
    //   name: "Sende klær",
    //   href: "/om-oss/sende",
    // },
    {
      name: "Priser",
      href: "/om-oss/priser",
    },
    // {
    //   name: "Selger garanti",
    //   href: "/om-oss/selger-garanti",
    // },
    // {
    //   name: "Våre produkter",
    //   href: "/om-oss/tilstand",
    // },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-evenly gap-3  p-4">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={`w-full rounded-lg border px-2 py-2 text-center text-sm ${path === link.href ? "border-brand-400 bg-brand-400 text-white shadow-lg" : "bg-white text-gray-500"} transition-all duration-300`}
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
