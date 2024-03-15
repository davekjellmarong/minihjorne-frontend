import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import PageNumber from "./PageNumber";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  pageCount: number | undefined;
  setFilterQuery: (filterQuery: string) => void;
  pageTotal: number | undefined;
}
const Pagination = ({
  page,
  setPage,
  pageCount,
  setFilterQuery,
  pageTotal,
}: PaginationProps) => {
  const searchParams = useSearchParams();
  const nextButtonDisabled = pageCount === undefined || pageCount === page;
  const prevButtonDisabled = page === undefined || page === 1;
  if (pageCount === 0) return null;
  return (
    <>
      <div className="flex gap-8">
        <button
          className={`flex gap-2 text-sm ${prevButtonDisabled ? "text-gray-400" : ""}`}
          disabled={prevButtonDisabled}
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("pagination[page]", String(page - 1));
            window.history.pushState(null, "", `?${params.toString()}`);
            setPage(page - 1);
          }}
        >
          <ArrowLeft size={20} />
          <p></p>
        </button>
        <PageNumber page={page} pageCount={pageCount} pageTotal={pageTotal} />
        <button
          className={`flex gap-2 text-sm ${nextButtonDisabled ? "text-gray-400" : ""}`}
          disabled={nextButtonDisabled}
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("pagination[page]", String(page + 1));
            window.history.pushState(null, "", `?${params.toString()}`);
            setPage(page + 1);
          }}
        >
          <p></p>
          <ArrowRight size={20} />
        </button>
      </div>
    </>
  );
};

export default Pagination;
