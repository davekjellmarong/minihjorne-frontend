"use client";
import { addQueryParam } from "@/utils/QueryParamUtils";
import { useRouter } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import React from "react";

const QuickFilterCards = () => {
  const router = useRouter();
  const posthog = usePostHog();

  const quickFilterData = [
    {
      name: "Gutt",
      link: "/brukte-barne-klaer?&filters[sex][id][$eq]=1",
      bgClass: "bg-red-400",
      type: "sex",
      queryTemplate: "&filters[sex][id][$eq]=",
      id: "1",
    },
    {
      name: "Jente",
      link: "/brukte-barne-klaer?&filters[sex][id][$eq]=2",
      bgClass: "bg-blue-400",
      type: "sex",
      queryTemplate: "&filters[sex][id][$eq]=",
      id: "2",
    },
    {
      name: "Ull",
      link: "/brukte-barne-klaer?&filters[material][id][$eq]=6",
      type: "material",
      queryTemplate: "&filters[material][id][$eq]=",
      id: "6",
    },
    {
      name: "80",
      link: "/brukte-barne-klaer?&filters[size][id][$eq]=7",
      type: "size",
      queryTemplate: "&filters[size][id][$eq]=",
      id: "7",
    },
    {
      name: "86",
      link: "/brukte-barne-klaer?&filters[size][id][$eq]=8",
      type: "size",
      queryTemplate: "&filters[size][id][$eq]=",
      id: "8",
    },
    {
      name: "92",
      link: "/brukte-barne-klaer?&filters[size][id][$eq]=9",
      type: "size",
      queryTemplate: "&filters[size][id][$eq]=",
      id: "9",
    },
    {
      name: "98",
      link: "/brukte-barne-klaer?&filters[size][id][$eq]=10",
      type: "size",
      queryTemplate: "&filters[size][id][$eq]=",
      id: "10",
    },
  ];

  return (
    <div className="mb-4 mt-2 flex  w-full gap-2 overflow-scroll">
      {quickFilterData.map((filter) => (
        <div
          className={`flex h-10 items-center justify-center rounded-full border border-gray-300 p-1.5 px-3`}
          key={filter.name}
          onClick={() => {
            addQueryParam(router, filter.queryTemplate, filter.id);
            posthog.capture("filter_applied", {
              filter_type: filter.type,
              filter_value: filter.name,
              location: "quick_filter_chips",
            });
          }}
        >
          <p className="text-sm font-light text-brand-700">{filter.name}</p>
        </div>
      ))}
    </div>
  );
};

export default QuickFilterCards;
