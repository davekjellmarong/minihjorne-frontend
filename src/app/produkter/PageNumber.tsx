import React from "react";

const PageNumber = ({
  page,
  pageCount,
}: {
  page: number;
  pageCount: number | undefined;
}) => {
  return (
    <p className="pt-6 text-center text-sm text-gray-500">
      Side {page} av {pageCount}
    </p>
  );
};

export default PageNumber;
