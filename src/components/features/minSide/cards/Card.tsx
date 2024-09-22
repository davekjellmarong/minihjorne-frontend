import { Button } from "@/components/UI/button";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
interface CardProps {
  header: string;
  description: string;
  button: string;
  isCompleted?: boolean;
  href: string;
  border?: boolean;
}
const Card = ({
  header,
  description,
  button,
  isCompleted = false,
  href,
  border = false,
}: CardProps) => {
  return (
    <div
      className={`flex flex-col gap-2 rounded-lg bg-white p-4 ${border && "border border-gray-200"}`}
    >
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-brand-500">{header}</div>
        {isCompleted && (
          <div className="flex items-center space-x-2 rounded-full border bg-brand-500 px-4 py-1">
            <CheckIcon className="h-5 w-5 text-white" />
            <div className="text-sm text-white">Ferdig</div>
          </div>
        )}
      </div>
      <div className="text-sm text-brand-500">{description}</div>
      <Link href={href}>
        <Button
          variant="outline"
          className="w-full border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white"
        >
          {button}
        </Button>
      </Link>
    </div>
  );
};

export default Card;
