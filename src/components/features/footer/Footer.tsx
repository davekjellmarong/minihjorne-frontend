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
      href: "/om-oss/selvregistrering",
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
    {
      name: "Selgervilkår",
      href: "/selgervilkar",
    },
  ];
  return (
    <footer className="p flex flex-col items-center gap-6">
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

      <div className="flex justify-center gap-6">
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

      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <p className="text-xs text-gray-400">Org navn: Marong Utvikling</p>
        <p className="text-xs text-gray-400">Org nummer: 926647504</p>
        <p className="text-xs text-gray-400">Telefon: +47 46 80 70 41</p>
        <p className="text-xs text-gray-400">
          Addresse: Kanonhallveien 12a, 0585 Oslo
        </p>
        <p className="text-xs text-brand-400">Email: kontakt@minihjorne.no</p>
      </div>
      <p className="py-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Minihjørne. Alle rettigheter
        forbeholdes.
      </p>
    </footer>
  );
};

export default Footer;
