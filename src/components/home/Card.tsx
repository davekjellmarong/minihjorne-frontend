import Link from "next/link";
import React from "react";
import { CaretRight } from "@phosphor-icons/react";
interface CardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Card = ({ title, description, link, image }: CardProps) => {
  return (
    <Link
      href={link}
      className="flex w-full justify-between gap-4 rounded-lg bg-tan-500 p-4 active:bg-tan-600"
    >
      <div className=" flex flex-col  justify-center gap-2">
        {/* <h2 className=" ">{title}</h2> */}
        <p className="text-sm font-light ">{title}</p>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <CaretRight size={20} color="gray" />
      </div>
    </Link>
  );
};

export default Card;
