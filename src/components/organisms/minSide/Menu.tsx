"use client";
import React from "react";
import Link from "next/link";
import {
  CreditCard,
  Note,
  TShirt,
  UploadSimple,
  UserSquare,
} from "@phosphor-icons/react";

const Menu = () => {
  const navItems = [
    {
      header: "Ordre",
      items: [
        {
          id: 1,
          title: "Mine ordre",
          path: "/min-side/ordre",
          icon: <Note size={32} weight="thin" color="purple" />,
        },
      ],
    },
    {
      header: "Selge",
      items: [
        {
          id: 1,
          title: "Last opp klær",
          path: "/min-side/selge/last-opp",
          icon: <UploadSimple size={32} weight="thin" color="purple" />,
        },
        {
          id: 2,
          title: "Mine produkter",
          path: "/min-side/selge/produkter/",
          icon: <TShirt size={32} weight="thin" color="purple" />,
        },
        {
          id: 3,
          title: "Salgsprofil",
          path: "/min-side/selge/salgsprofil",
          icon: <UserSquare size={32} weight="thin" color="purple" />,
        },
        {
          id: 4,
          title: "Abonnement",
          path: "/min-side/selge/abonnement",
          icon: <CreditCard size={32} weight="thin" color="purple" />,
        },
      ],
    },
    // {
    //   header: "Konto",
    //   items: [
    //     {
    //       id: 1,
    //       title: "Logg ut",
    //       path: "/min-side/konto/personlig-informasjon",
    //       icon: <UserSquare size={32} weight="thin" color="purple" />,
    //     },
    //   ],
    // },
  ];
  return (
    <div className="relative">
      <div className="relative bottom-10 m-auto w-3/4 max-w-[500px] rounded-lg bg-white p-6 shadow">
        {navItems.map((item) => {
          return (
            <div key={item.header}>
              <p className="font-semibold">{item.header}</p>
              <ul className="flex flex-col gap-4">
                {item.items.map((item) => (
                  <Link
                    href={item.path}
                    key={item.id}
                    className={`flex items-center rounded p-4  sm:hover:bg-gray-100 `}
                  >
                    <span className="pr-6">{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
