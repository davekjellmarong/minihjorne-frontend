import React from "react";
import { UserBackend, User as UserType } from "@/utils/types";
import {
  tailwindColorsObject,
  tailwindColorsUserButton,
} from "@/utils/constants";
import Products from "@/components/products/Products";
import { useQuery } from "@tanstack/react-query";
import { ProductsMethods } from "@/utils/utils";
import EditSalgsprofilHeader from "./EditSalgsprofilHeader";
import {
  Baby,
  Bird,
  HeartStraight,
  Leaf,
  Rainbow,
  Star,
  User,
  UserCircle,
} from "@phosphor-icons/react";
interface SalgsprofilProps {
  user: UserBackend;
}
const Salgsprofil = ({ user }: SalgsprofilProps) => {
  const { data } = useQuery({
    queryKey: ["products", user.id],
    queryFn: () => {
      return ProductsMethods.getByUserId(user.id);
    },
  });

  const icons: any = {
    Star: {
      component: <Star size={52} weight="fill" color={user.color} />,
      title: "Star",
    },
    HeartStraight: {
      component: <HeartStraight size={52} weight="fill" color={user.color} />,
      title: "HeartStraight",
    },
    Baby: {
      component: <Baby size={52} weight="fill" color={user.color} />,
      title: "Baby",
    },
    Rainbow: {
      component: <Rainbow size={52} weight="fill" color={user.color} />,
      title: "Rainbow",
    },
    Leaf: {
      component: <Leaf size={52} weight="fill" color={user.color} />,
      title: "Leaf",
    },
    Bird: {
      component: <Bird size={52} weight="fill" color={user.color} />,
      title: "Bird",
    },
  };
  const tailwindColor = tailwindColorsUserButton[user.color];
  return (
    <div
      className={`${tailwindColor} h-full w-full flex justify-center items-center`}
    >
      <div className="m-10 relative w-full shadow-2xl rounded bg-white text-center flex flex-col items-center py-10 gap-6">
        <div className="flex items-center gap-14">
          {icons[user.icon]?.component}
          <p className="font-semibold text-lg">{user.header}</p>
          {icons[user.icon]?.component}
        </div>
        <p className="text-gray-500 flex items-center gap-1">
          <User size={28} />
          <span>{user.username}</span>
        </p>
        <p className="max-w-2xl">{user.description}</p>
        <div className="flex gap-4">
          <div className="py-2 px-6 bg-gray-300 rounded">Gutt 50-80</div>
          <div className="py-2 px-6 bg-gray-300 rounded">Jente 20-50</div>
          <div className="py-2 px-6 bg-gray-300 rounded">Unisex 40-200</div>
        </div>
        <div className="w-5/6">
          <Products data={data} />
        </div>
      </div>
    </div>
  );
};

export default Salgsprofil;
