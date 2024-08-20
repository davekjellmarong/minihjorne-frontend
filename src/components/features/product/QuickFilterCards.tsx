"use client";
import { useRouter } from "next/navigation";
import React from "react";

const QuickFilterCards = () => {
  const router = useRouter();
  const quickFilterData = [
    {
      name: "Gutt",
      link: "/brukte-barne-klaer?&filters[sex][id][$eq]=1",
      bgClass: "bg-red-400",
    },
    {
      name: "Jente",
      link: "/brukte-barne-klaer?&filters[sex][id][$eq]=2",
      bgClass: "bg-blue-400",
    },
    {
      name: "Unisex",
      link: "/brukte-barne-klaer?&filters[sex][id][$eq]=3",
    },
    {
      name: "Body",
      link: "/brukte-barne-klaer?&filters[category][id][$eq]=2",
    },
    {
      name: "Ull",
      link: "/brukte-barne-klaer?&filters[material][id][$eq]=6",
    },
    {
      name: "Sett",
      link: "/brukte-barne-klaer?&filters[category][id][$eq]=16",
    },
    {
      name: "Bukse",
      link: "/brukte-barne-klaer?&filters[category][id][$eq]=6",
    },
    {
      name: "Genser",
      link: "/brukte-barne-klaer?&filters[category][id][$eq]=3",
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
          }}
        >
          <p className="text-sm font-light text-brand-700">{filter.name}</p>
        </div>
      ))}
    </div>
  );
};

export default QuickFilterCards;
