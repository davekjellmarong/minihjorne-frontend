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
    <>
      <p className="pt-6 text-center text-sm text-gray-500">
        Side {page} av {pageCount}
      </p>

      {/* <p className="pt-2 text-center text-sm ">{pageTotal} produkter</p> */}
    </>
  );
};

export default PageNumber;
