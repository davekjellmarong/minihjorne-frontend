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
      className=" bg-tan-500 flex w-full justify-between  gap-4   rounded-lg p-4"
    >
      <div className=" flex flex-col  justify-center gap-2">
        <h2 className="text-lg ">{title}</h2>
        <p className="text-sm font-light ">{description}</p>
      </div>
      <div className="flex  flex-col items-center justify-center ">
        <CaretRight size={46} color="black" />
      </div>
    </Link>
  );
};

export default Card;
