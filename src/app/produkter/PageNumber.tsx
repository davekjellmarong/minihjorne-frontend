import React from "react";

const PageNumber = ({
  page,
  pageCount,
  pageTotal,
}: {
  page: number;
  pageCount: number | undefined;
  pageTotal: number | undefined;
}) => {
  return (
    <p className="text-center text-sm text-gray-500">
      Side {page} av {pageCount}
    </p>
  );
};

export default PageNumber;
