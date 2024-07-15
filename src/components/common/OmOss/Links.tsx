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
      name: "Hvordan selge klær",
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
  ];
  return (
    <div className="bg-secondary-400 flex flex-col gap-4 p-4">
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
