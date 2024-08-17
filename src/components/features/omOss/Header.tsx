import Image from "next/image";
import React from "react";
interface HeaderProps {
  text: string;
}
const Header = ({ text }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-6 py-14">
      <h1 className="px-10 text-center text-3xl">{text}</h1>
      <Image
        className=" px-4"
        src="/minihjørne-icon.svg"
        alt="logo"
        width={150}
        height={150}
      />
    </div>
  );
};

export default Header;
