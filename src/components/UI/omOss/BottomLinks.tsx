import React from "react";
import PreviousPageLink from "./PreviousPageLink";
import NextPageLink from "./NextPageLink";

interface BottomLinksProps {
  prevLink: { to: string; text: string };
  nextLink: { to: string; text: string };
}

const BottomLinks = ({ prevLink, nextLink }: BottomLinksProps) => {
  return (
    <div className="flex items-center justify-between py-4">
      <PreviousPageLink to={prevLink.to}>{prevLink.text}</PreviousPageLink>
      <NextPageLink to={nextLink.to}>{nextLink.text}</NextPageLink>
    </div>
  );
};

export default BottomLinks;
