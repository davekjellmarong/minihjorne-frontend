"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const QuickFilterCards = ({ setFilterQuery }: { setFilterQuery: any }) => {
  const router = useRouter();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  const quickFilterData = [
    {
      name: "Gutt",
      link: "/produkter?&filters[sex][id][$eq]=1",
      bgClass: "bg-red-400",
    },
    {
      name: "Jente",
      link: "/produkter?&filters[sex][id][$eq]=2",
      bgClass: "bg-blue-400",
    },
    {
      name: "Body",
      link: "/produkter?&filters[category][id][$eq]=2",
      bgClass: "bg-yellow-400",
    },
    {
      name: "Kjole",
      link: "/produkter?&filters[category][id][$eq]=4",
      bgClass: "bg-green-400",
    },
    {
      name: "Prinsesse",
      link: "/produkter?&filters[tags][id][$eq]=12",
      bgClass: "bg-pink-400",
    },
    {
      name: "Rosa",
      link: "/produkter?&filters[colors][id][$eq]=13",
      bgClass: "bg-purple-400",
    },
    {
      name: "98-104",
      link: "/produkter?&filters[size][id][$eq]=26",
      bgClass: "bg-indigo-400",
    },
    {
      name: "122-128",
      link: "/produkter?&filters[size][id][$eq]=28",
      bgClass: "bg-gray-400",
    },
  ];

  return (
    <div className="w-full">
      <Carousel responsive={responsive}>
        {quickFilterData.map((filter) => (
          <div
            className={`mx-2 flex h-12 w-20 items-center justify-center rounded ${filter.bgClass}`}
            key={filter.name}
            onClick={() => {
              router.push(filter.link);
              setFilterQuery(filter.link);
            }}
          >
            {/* <div className={`flex h-full items-center justify-center `}> */}
            <h3 className=" font-semibold text-white">{filter.name}</h3>
            {/* </div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default QuickFilterCards;
