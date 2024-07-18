import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import PageNumber from "./PageNumber";

interface PaginationProps {
  pageCount: number | undefined;
  setFilterQuery: (filterQuery: string) => void;
}
const Pagination = ({ pageCount, setFilterQuery }: PaginationProps) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const page = Number(params.get("pagination[page]"));
  const nextButtonDisabled = pageCount === undefined || pageCount === page;
  const prevButtonDisabled = page === undefined || page === 1;
  if (pageCount === 0) return null;
  return (
    <>
      <div className="flex items-center gap-4">
        <button
          className={`flex gap-2 text-sm ${prevButtonDisabled ? "text-gray-400" : ""}`}
          disabled={prevButtonDisabled}
          onClick={() => {
            params.set("pagination[page]", String(page - 1));
            window.history.pushState(null, "", `?${params.toString()}`);
            setFilterQuery(`?${params.toString()}`);
          }}
        >
          <ArrowLeft size={20} />
          <p></p>
        </button>
        <PageNumber page={page} pageCount={pageCount} />
        <button
          className={`flex gap-2 text-sm ${nextButtonDisabled ? "text-gray-400" : ""}`}
          disabled={nextButtonDisabled}
          onClick={() => {
            params.set("pagination[page]", String(page + 1));
            window.history.pushState(null, "", `?${params.toString()}`);
            setFilterQuery(`?${params.toString()}`);
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
