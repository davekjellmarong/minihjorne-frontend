"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const QuickFilterCards = ({ setFilterQuery }: { setFilterQuery: any }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
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
    <div className="mb-4 mt-2 flex  w-full gap-2 overflow-scroll">
      {/* <Carousel responsive={responsive}> */}
      {quickFilterData.map((filter) => (
        <div
          className={`flex h-10 items-center justify-center rounded-full border border-gray-300 p-1.5 px-3`}
          // className={` flex h-12 w-24 items-center justify-center rounded border-2 border-brand-300 `}
          key={filter.name}
          onClick={() => {
            window.history.pushState(
              null,
              "",
              `${filter.link}&pagination[page]=1`,
            );
            setFilterQuery(`${filter.link}&pagination[page]=1`);
          }}
        >
          <p className="text-sm font-light text-brand-700">{filter.name}</p>
        </div>
      ))}
      {/* </Carousel> */}
    </div>
  );
};

export default QuickFilterCards;
