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
  ];
  return (
    <div className="relative">
      <div className="bg-white shadow rounded-lg w-3/4 m-auto p-6 bottom-10 relative">
        {navItems.map((item) => {
          return (
            <div key={item.header}>
              <p className="font-semibold">{item.header}</p>
              <ul>
                <ul className="flex flex-col gap-8 pt-2">
                  {item.items.map((item) => (
                    <Link
                      href={item.path}
                      key={item.id}
                      className={`hover:bg-gray-100 rounded p-4 flex items-center `}
                    >
                      <span className="pr-6">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </ul>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
