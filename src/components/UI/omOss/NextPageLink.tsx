import Link from "next/link";
import React from "react";
interface NextPageLinkProps {
  children: React.ReactNode;
  to: string;
}
const NextPageLink = ({ children, to }: NextPageLinkProps) => {
  return (
    <div className="flex justify-end py-4">
      <Link href={to} className="text-brand-400">
        {children} -{">"}
      </Link>
    </div>
  );
};

export default NextPageLink;
