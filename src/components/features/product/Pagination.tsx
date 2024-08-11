"use client";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import PageNumber from "./PageNumber";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ProductQueries } from "@/queryFactory/Product";

interface PaginationProps {
  pageCount: number | undefined;
}
const Pagination = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const { data: products } = useSuspenseQuery(
    ProductQueries.searchParamsTest(params.toString()),
  );
  const pageCount = products.meta.pagination.pageCount;
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
            router.push(`?${params.toString()}`);
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
            router.push(`?${params.toString()}`);
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
