import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = [
    {
      name: "Hva er Minihjørne?",
      href: "/om-oss/hva-er-minihjorne",
    },
    {
      name: "Selge klær",
      href: "/om-oss/hvordan-selge",
    },
    {
      name: "Priser",
      href: "/om-oss/priser",
    },
  ];
  const bottomLinks = [
    {
      name: "Personvern",
      href: "/personvern",
    },
    {
      name: "Kjøpebetingelser",
      href: "/kjopebetingelser",
    },
  ];
  return (
    <footer className="flex flex-col items-center gap-6 py-8">
      <hr className="w-full" />
      <div className=" mx-auto flex flex-col items-center gap-2 text-center">
        <Link
          href="https://instagram.com/mini_hjorne"
          className="flex items-center gap-2"
        >
          <Image
            src="https://res.cloudinary.com/dylzaicv5/image/upload/v1721371518/StaticAssets/instagram-logo_w6uhtt.png"
            alt="logo"
            width={35}
            height={35}
          />
          <p>mini_hjorne</p>
        </Link>
      </div>
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

      <div className="flex justify-center gap-4">
        {bottomLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="text-sm text-gray-400"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <p className="text-xs text-brand-400">kontakt@minhjorne.no</p>
    </footer>
  );
};

export default Footer;
