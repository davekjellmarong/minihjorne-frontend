import Link from "next/link";
import React from "react";
import { CaretRight } from "@phosphor-icons/react";
interface CardProps {
  title: string;
  link: string;
}

const Card = ({ title, link }: CardProps) => {
  return (
    <Link
      href={link}
      className="flex w-full justify-between gap-4 rounded-lg bg-secondary-100  p-4 shadow active:bg-tan-600"
    >
      <div className=" flex flex-col  justify-center gap-2">
        <p className="text-sm font-light ">{title}</p>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <CaretRight size={20} color="gray" />
      </div>
    </Link>
  );
};

export default Card;
