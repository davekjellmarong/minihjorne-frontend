import React from "react";
import Link from "next/link";
import {
  Note,
  TShirt,
  UploadSimple,
  UserSquare,
  ChartBar,
  Truck,
  HandCoins,
  Package,
  Key,
  Money,
} from "@phosphor-icons/react/dist/ssr";
import { cookies } from "next/headers";
import { getSteps } from "@/utils/serverUtils";
import { SellerMethods } from "@/queryFactory/Seller";

const Menu = async () => {
  const token = cookies().get("Token")?.value;
  const user = await SellerMethods.getMe(token);
  // const currentDelivery = user.seller?.deliveries?.find(
  //   (delivery) => delivery.inProgress,
  // );
  // const { currentStep } = getSteps(user, currentDelivery);
  const navItems = [
    {
      header: "Produkter",
      items: [
        {
          id: 2,
          title: "Mine produkter",
          path: "/min-side/selge/produkter/",
          icon: <TShirt size={32} weight="thin" color="purple" />,
          action: null,
        },
        {
          id: 5,
          title: "Statistikk",
          path: "/min-side/selge/statistikk",
          icon: <ChartBar size={32} weight="thin" color="purple" />,
          action: null,
        },
      ],
    },
    {
      header: "Profil",
      items: [
        {
          id: 3,
          title: "Salgsprofil",
          path: "/min-side/selge/salgsprofil",
          icon: <UserSquare size={32} weight="thin" color="purple" />,
          action: null,
        },

        {
          id: 11,
          title: "Utbetaling",
          path: "/min-side/selge/utbetaling",
          icon: <Money size={32} weight="thin" color="purple" />,
          action: null,
        },
      ],
    },
    {
      header: "Min levering",
      items: [
        {
          id: 4,
          title: "Leverings metode",
          path: "/min-side/selge/leverings-metode",
          icon: <Truck size={32} weight="thin" color="purple" />,
          action: null,
        },
        {
          id: 8,
          title: "Lever klær",
          path: "/min-side/selge/levere",
          icon: <Package size={32} weight="thin" color="purple" />,
          action: null,
        },
        {
          id: 7,
          title: "Salgs metode",
          path: "/min-side/selge/salgs-metode",
          icon: <HandCoins size={32} weight="thin" color="purple" />,
          action: null,
        },
        {
          id: 1,
          title: "Last opp klær",
          path: "/min-side/selge/last-opp",
          icon: <UploadSimple size={32} weight="thin" color="purple" />,
          action: null,
        },
      ],
    },
    {
      header: "Ordre",
      items: [
        {
          id: 6,
          title: "Mine ordre",
          path: "/min-side/ordre",
          icon: <Note size={32} weight="thin" color="purple" />,
          action: null,
        },
      ],
    },
    {
      header: "Admin",
      items: [
        {
          id: 9,
          title: "Produkter",
          path: "/min-side/admin/produkter",
          icon: <Key size={32} weight="thin" color="purple" />,
          action: null,
        },
        {
          id: 10,
          title: "Leveringer",
          path: "/min-side/admin/leveringer",
          icon: <Truck size={32} weight="thin" color="purple" />,
          action: null,
        },
        {
          id: 12,
          title: "Utbetalinger",
          path: "/min-side/admin/utbetalinger",
          icon: <Money size={32} weight="thin" color="purple" />,
          action: null,
        },
      ],
    },
    // {
    //   header: "Selge",
    //   items: [
    // Lever klær
    // {
    //   id: 4,
    //   title: "Leie",
    //   path: "/min-side/selge/leie",
    //   icon: <CreditCard size={32} weight="thin" color="purple" />,
    //   action: null,
    // },
    // ],
    // },
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
    <div className="">
      <div className="m-auto max-w-[500px] rounded-lg border border-gray-200 bg-white p-6">
        {navItems.map((headerItem) => {
          if (headerItem.header === "Admin" && !user.admin) return null;
          return (
            <div key={headerItem.header}>
              <p className="font-medium">{headerItem.header}</p>
              <ul className="flex flex-col gap-1">
                {headerItem.items.map((item) => (
                  <li key={item.id} className={`relative`}>
                    <Link
                      href={item.path}
                      className={`flex items-center rounded p-4 active:bg-brand-100 sm:hover:bg-gray-100`}
                    >
                      <span className="pr-6">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                    {/* {currentStep && currentStep?.menuId === item.id && (
                      <span className=" absolute right-2 top-2 flex items-center justify-center rounded-sm  text-xs text-green-800">
                        NESTE STEG!
                      </span>
                    )} */}
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
