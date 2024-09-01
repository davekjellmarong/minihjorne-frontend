import React, { Fragment } from "react";
import Link from "next/link";
import {
  CreditCard,
  Note,
  TShirt,
  UploadSimple,
  UserSquare,
  ChartBar,
  Truck,
  QuestionMark,
} from "@phosphor-icons/react/dist/ssr";
import path from "path";
import { cookies } from "next/headers";
import { UserMethods } from "@/queryFactory/User";
import { getStepsAndCurrentStep } from "@/utils/serverUtils";

const Menu = async () => {
  const token = cookies().get("Token")?.value;
  const user = await UserMethods.getMeFetch(token);
  const { currentStep } = getStepsAndCurrentStep(user);
  const navItems = [
    {
      header: "Ordre",
      items: [
        {
          id: 1,
          title: "Mine ordre",
          path: "/min-side/ordre",
          icon: <Note size={32} weight="thin" color="purple" />,
          action: null,
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
          action: null,
        },
        {
          id: 5,
          title: "Statistikk",
          path: "/min-side/selge/statistikk",
          icon: <ChartBar size={32} weight="thin" color="purple" />,
          action: null,
        },
        {
          id: 2,
          title: "Mine produkter",
          path: "/min-side/selge/produkter/",
          icon: <TShirt size={32} weight="thin" color="purple" />,
          action: null,
        },
        {
          id: 3,
          title: "Salgsprofil",
          path: "/min-side/selge/salgsprofil",
          icon: <UserSquare size={32} weight="thin" color="purple" />,
          action: null,
        },
        // levering
        {
          id: 4,
          title: "Levere klær",
          path: "/min-side/selge/levering",
          icon: <Truck size={32} weight="thin" color="purple" />,
          action: null,
        },
        // {
        //   id: 4,
        //   title: "Leie",
        //   path: "/min-side/selge/leie",
        //   icon: <CreditCard size={32} weight="thin" color="purple" />,
        //   action: null,
        // },
      ],
    },
    // {
    //   header: "Innstillinger",
    //   items: [
    //     {
    //       id: 1,
    //       title: "Logg ut",
    //       path: "/",
    //       icon: <SignOut size={32} weight="thin" color="red" />,
    //       action: () => {
    //         removeCookie("Token");
    //         queryClient.removeQueries({ queryKey: UserQueries.all() });
    //         queryClient.removeQueries({ queryKey: AuthQueries.all() });
    //         queryClient.removeQueries({ queryKey: ["me"] });
    //         queryClient.removeQueries({ queryKey: ["login-user"] });
    //       },
    //     },
    //   ],
    // },
  ];
  return (
    <div className="relative">
      <div className="relative bottom-10 m-auto w-3/4 max-w-[500px] rounded-lg bg-white p-6 shadow">
        {navItems.map((headerItem) => {
          return (
            <div key={headerItem.header}>
              <p className="font-medium">{headerItem.header}</p>
              <ul className="flex flex-col gap-1">
                {headerItem.items.map((item) => (
                  <li
                    key={item.id}
                    className={`relative flex p-4 ${currentStep.menuId === item.id ? "rounded bg-green-300" : ""}`}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center rounded   active:bg-brand-100 sm:hover:bg-gray-100`}
                    >
                      <span className="pr-6">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                    {currentStep.menuId === item.id && (
                      <span className=" absolute right-2 top-2 flex items-center justify-center rounded-sm  text-xs text-green-800">
                        NESTE STEG!
                      </span>
                    )}
                  </li>
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
