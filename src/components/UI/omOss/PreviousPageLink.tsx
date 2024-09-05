import Link from "next/link";
import React from "react";

interface PreviousPageLinkProps {
  children: React.ReactNode;
  to: string;
}

const PreviousPageLink = ({ children, to }: PreviousPageLinkProps) => {
  return (
    <div className="flex justify-start py-4">
      <Link href={to} className="text-brand-400">
        {"<"}- {children}
      </Link>
    </div>
  );
};

export default PreviousPageLink;
