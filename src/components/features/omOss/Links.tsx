"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const OmOssLinks = () => {
  const path = usePathname();
  const links = [
    {
      name: "Hva er Minihjørnet?",
      href: "/om-oss/hva-er-minihjorne",
    },
    {
      name: "Bli Minihjørne selger",
      href: "/om-oss/hvordan-selge",
    },
    {
      name: "Hvorfor selge klær",
      href: "/om-oss/hvorfor-selge",
    },
    {
      name: "Kjøpe klær",
      href: "/om-oss/kjope",
    },
    {
      name: "Priser?",
      href: "/om-oss/priser",
    },
    {
      name: "Levere klær",
      href: "/om-oss/levering",
    },
    {
      name: "Sende klær",
      href: "/om-oss/sende",
    },
  ];
  return (
    <div className="flex flex-col gap-4 bg-tan-500 p-4">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={`${path === link.href ? "text-brand-600" : ""}`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default OmOssLinks;
