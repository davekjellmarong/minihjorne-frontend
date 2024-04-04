"use client";
import { Dress } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuickLinks = () => {
  const quickFilterData = [
    {
      name: "Gutt",
      link: "/produkter?&filters[sex][id][$eq]=1",
    },
    {
      name: "Jente",
      link: "/produkter?&filters[sex][id][$eq]=2",
    },
    {
      name: "Body",
      link: "/produkter?&filters[category][id][$eq]=2",
    },
    {
      name: "Kjole",
      link: "/produkter?&filters[category][id][$eq]=4",
    },
    {
      name: "Prinsesse",
      link: "/produkter?&filters[tags][id][$eq]=12",
    },
    {
      name: "Rosa",
      link: "/produkter?&filters[colors][id][$eq]=13",
    },
    {
      name: "98-104",
      link: "/produkter?&filters[size][id][$eq]=26",
    },
    {
      name: "122-128",
      link: "/produkter?&filters[size][id][$eq]=28",
    },
  ];
  return (
    <div className="flex overflow-auto">
      {quickFilterData.map((filter) => {
        return (
          <Link
            className="flex min-w-32 flex-col items-center"
            href={`${filter.link}&pagination[page]=1`}
            key={filter.name}
          >
            {/* <Dress size={30} color="purple" weight="thin" /> */}
            <Image
              src="/boy-lego.jpg"
              className="rounded-full object-cover"
              width={100}
              height={100}
              alt=""
            />
            <p className="text-sm">{filter.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickLinks;
