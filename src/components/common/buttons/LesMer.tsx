import Link from "next/link";
import React from "react";
interface LesMerProps {
  href: string;
}
const LesMer = ({ href }: LesMerProps) => {
  return (
    <div className="py-2 text-center">
      <Link href={href} className="text-brand-600">
        Les mer -{">"}
      </Link>
    </div>
  );
};

export default LesMer;
