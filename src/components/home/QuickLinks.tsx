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
      image: "/quicklink-gutt.jpg",
    },
    {
      name: "Jente",
      link: "/produkter?&filters[sex][id][$eq]=2",
      image: "/quicklink-jente.jpg",
    },
    {
      name: "Unisex",
      link: "/produkter?&filters[sex][id][$eq]=3",
      image: "/quicklink-unisex.jpg",
    },
    {
      name: "Nyfødt",
      link: "/produkter?&filters[size][id][$eq]=21",
      image: "/quicklink-nyfodt.jpg",
    },
    {
      name: "Body",
      link: "/produkter?&filters[category][id][$eq]=2",
      image: "/quicklink-body.JPG",
    },
    {
      name: "Kjole",
      link: "/produkter?&filters[category][id][$eq]=4",
      image: "/quicklink-kjole.jpg",
    },
    {
      name: "Sko",
      link: "/produkter?&filters[category][id][$eq]=7",
      image: "/quicklink-sko.jpg",
    },
    {
      name: "Yttertøy",
      link: "/produkter?&filters[category][id][$eq]=7&filters[category][id][$eq]=14&filters[category][id][$eq]=15",
      image: "/quicklink-yttertoy.JPG",
    },
  ];
  return (
    <div className="flex overflow-auto">
      {quickFilterData.map((filter) => {
        return (
          <Link
            className="flex min-w-40 flex-col items-center active:bg-gray-200"
            href={`${filter.link}&pagination[page]=1`}
            key={filter.name}
          >
            {/* <Dress size={30} color="purple" weight="thin" /> */}
            <Image
              src={filter.image}
              className="h-[150px] w-[150px] rounded-full object-cover"
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
