"use client";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import PageNumber from "./PageNumber";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ProductQueries } from "@/queryFactory/Product";
import { usePostHog } from "posthog-js/react";

interface PaginationProps {
  pageCount: number | undefined;
}
const Pagination = () => {
  const posthog = usePostHog();
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
          <ArrowLeft size={40} />
          <p></p>
        </button>
        <PageNumber page={page} pageCount={pageCount} />
        <button
          className={`flex gap-2 text-sm ${nextButtonDisabled ? "text-gray-400" : ""}`}
          disabled={nextButtonDisabled}
          onClick={() => {
            params.set("pagination[page]", String(page + 1));
            router.push(`?${params.toString()}`);
            if (pageCount === page - 1) {
              posthog.capture("last_product_page", {
                location: "products_page",
                pageCount: pageCount,
              });
            }
          }}
        >
          <p></p>
          <ArrowRight size={40} />
        </button>
      </div>
    </>
  );
};

export default Pagination;
