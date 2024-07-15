import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = [
    {
      name: "Om Oss",
      href: "/om-oss",
    },
    {
      name: "Priser",
      href: "/om-oss/priser",
    },
    {
      name: "Levere klær",
      href: "/om-oss/levering",
    },
  ];
  return (
    <footer className="flex flex-col items-center gap-6 py-8">
      <hr className="w-full" />

      <div className="flex justify-center gap-4">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="text-sm text-gray-400"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className=" mx-auto flex flex-col items-center gap-2 text-center">
        <Link
          href="https://instagram.com/mini_hjorne"
          className="flex items-center gap-2"
        >
          <Image src="/instagram.svg" alt="logo" width={35} height={35} />
          <p>mini_hjorne</p>
        </Link>
      </div>
      <p className="text-xs text-brand-400">Marong Utvikling - 2024</p>
    </footer>
  );
};

export default Footer;
