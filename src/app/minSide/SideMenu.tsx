import Link from "next/link";
import React from "react";

const SideMenu = () => {
  const navItems = [
    {
      title: "Min Side",
      id: 0,
      path: "/minSide",
    },
    {
      title: "Salgsprofil",
      id: 1,
      path: "/minSide/salgsprofil",
    },
    {
      title: "Produkter",
      id: 2,
      path: "produkter",
    },
    {
      title: "Innstillinger",
      id: 3,
      path: "innstillinger",
    },
  ];
  return (
    <div className="bg-gray-200 h-full w-72">
      <ul className="flex flex-col gap-8 pt-10">
        {navItems.map((item) => {
          return (
            <Link
              href={item.path}
              key={item.id}
              className="hover:bg-gray-400 pl-10  p-4"
            >
              {item.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
