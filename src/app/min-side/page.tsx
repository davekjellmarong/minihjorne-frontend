"use client";
import Loading from "@/components/loading/Loading";
import { ProductsMethods, UserMethods } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";
import Products from "../produkter/Products";
import { productByIdOption } from "@/components/reactQuery/Options";
import SideMenu from "./SideMenu";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import { ProductBackend, ProductsData } from "@/utils/types";
import Link from "next/link";
import { navItems } from "./NavItems";
import { CreditCard, Note, TShirt, UploadSimple, UserSquare } from "@phosphor-icons/react";
import Image from "next/image";

interface UserData {
  username: string;
  id: number;
  email: string;
}
const MinSide = () => {
  const { data: userData } = useQuery<UserData>({
    queryKey: ["login-user"],
  });
  useAutoLogIn();

  const userId = userData?.id;

  const { data: products, isLoading } = useQuery<ProductBackend[]>({
    queryKey: ["product", 2],
    queryFn: () => {
      return ProductsMethods.getByUserId(userId);
    },
    enabled: !!userId,
  });
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
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 bg-brand-200 pt-4 pb-24">
        <p className="text-center ">Min Side</p>
        <div className="flex justify-center ">
          <span className="text-center text-5xl py-6 px-8 rounded-full border bg-white shadow-sm">
            {userData?.username.slice(0, 1).toUpperCase()}
          </span>
        </div>
        <p className="text-center font-semibold text-lg">
          {userData?.username}
        </p>
      </div>
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
    </div>
  );
};
export default MinSide;
