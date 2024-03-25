import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="flex w-full flex-col gap-1 rounded bg-white p-4 shadow">
      <h2 className="text-lg  text-brand-500">{title}</h2>
      <p className="text-sm font-light text-gray-800">{description}</p>
      <Link className="text-xs text-purple-700" href="/om-oss">
        Les mer -{">"}
      </Link>
    </div>
  );
};

export default Card;
