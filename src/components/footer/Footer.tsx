import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8">
      <hr />
      <div className=" mx-auto flex flex-col items-center gap-2 py-6 text-center">
        {/* <p className="text-gray-600">Minihjørne</p> */}
        <Link
          href="https://instagram.com/mini_hjorne"
          className="flex items-center gap-2"
        >
          <Image src="/instagram.svg" alt="logo" width={50} height={50} />
          <p>mini_hjorne</p>
        </Link>
        {/* <p className="text-xs text-gray-400">Marong Utvikling</p> */}
      </div>
    </footer>
  );
};

export default Footer;
