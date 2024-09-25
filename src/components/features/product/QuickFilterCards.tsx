"use client";
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
    },
    {
      name: "Jente",
      link: "/brukte-barne-klaer?&filters[sex][id][$eq]=2",
      bgClass: "bg-blue-400",
      type: "sex",
    },
    {
      name: "Unisex",
      link: "/brukte-barne-klaer?&filters[sex][id][$eq]=3",
      type: "sex",
    },
    {
      name: "Body",
      link: "/brukte-barne-klaer?&filters[category][id][$eq]=2",
      type: "category",
    },
    {
      name: "Ull",
      link: "/brukte-barne-klaer?&filters[material][id][$eq]=6",
      type: "material",
    },
    {
      name: "Sett",
      link: "/brukte-barne-klaer?&filters[category][id][$eq]=16",
      type: "category",
    },
    {
      name: "Bukse",
      link: "/brukte-barne-klaer?&filters[category][id][$eq]=6",
      type: "category",
    },
    {
      name: "Genser",
      link: "/brukte-barne-klaer?&filters[category][id][$eq]=3",
      type: "category",
    },
  ];

  return (
    <div className="mb-4 mt-2 flex  w-full gap-2 overflow-scroll">
      {quickFilterData.map((filter) => (
        <div
          className={`flex h-10 items-center justify-center rounded-full border border-gray-300 p-1.5 px-3`}
          key={filter.name}
          onClick={() => {
            router.push(`${filter.link}&pagination[page]=1`);
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
