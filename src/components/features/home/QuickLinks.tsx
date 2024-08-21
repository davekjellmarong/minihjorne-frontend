"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuickLinks = () => {
  const quickFilterData = [
    {
      name: "Gutt",
      link: "/brukte-barne-klaer?&filters[sex][id][$eq]=1",
      image:
        "https://res.cloudinary.com/dylzaicv5/image/upload/v1721369331/StaticAssets/quicklink-gutt_njuiva.jpg",
    },
    {
      name: "Jente",
      link: "/brukte-barne-klaer?&filters[sex][id][$eq]=2",
      image:
        "https://res.cloudinary.com/dylzaicv5/image/upload/v1721369327/StaticAssets/quicklink-jente_cnnn6i.jpg",
    },
    {
      name: "Unisex",
      link: "/brukte-barne-klaer?&filters[sex][id][$eq]=3",
      image:
        "https://res.cloudinary.com/dylzaicv5/image/upload/v1721369326/StaticAssets/quicklink-unisex_ksqzh1.jpg",
    },
    {
      name: "Nyfødt",
      link: "/brukte-barne-klaer?&filters[size][id][$eq]=1&filters[size][id][$eq]=2&filters[size][id][$eq]=3",
      image:
        "https://res.cloudinary.com/dylzaicv5/image/upload/v1721369328/StaticAssets/quicklink-nyfodt_f1cxos.jpg",
    },
    {
      name: "Body",
      link: "/brukte-barne-klaer?&filters[category][id][$eq]=2",
      image:
        "https://res.cloudinary.com/dylzaicv5/image/upload/v1721369328/StaticAssets/quicklink-body_lk6z2n.jpg",
    },
    {
      name: "Kjole",
      link: "/brukte-barne-klaer?&filters[category][id][$eq]=4",
      image:
        "https://res.cloudinary.com/dylzaicv5/image/upload/v1721369326/StaticAssets/quicklink-kjole_i3c20q.jpg",
    },
    // {
    //   name: "Sko",
    //   link: "/brukte-barne-klaer?&filters[category][id][$eq]=7",
    //   image:
    //     "https://res.cloudinary.com/dylzaicv5/image/upload/v1721369325/StaticAssets/quicklink-sko_iolpap.jpg",
    // },
    {
      name: "Yttertøy",
      link: "/brukte-barne-klaer?&filters[category][id][$eq]=7&filters[category][id][$eq]=14&filters[category][id][$eq]=15",
      image:
        "https://res.cloudinary.com/dylzaicv5/image/upload/v1721369325/StaticAssets/quicklink-yttertoy_ynhh0u.jpg",
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
