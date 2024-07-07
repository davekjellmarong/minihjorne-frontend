"use client";
import {
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import React from "react";
import AvatarLetter from "@/components/molecules/AvatarLetter";
import Menu from "../../components/organisms/minSide/Menu";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import { useCookies } from "react-cookie";

const MinSide = () => {
  const [cookies] = useCookies(["Token"]);
  const { data: user } = useSuspenseQuery(UserQueries.me(cookies.Token));

  const updateProductWithImage = async () => {
    const response = await fetch(`http://localhost:1337/api/products/255`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.Token}`,
      },
      body: JSON.stringify({
        data: {
          image: [273], // Assuming productImages is the field for the relation
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update product");
    }

    const result = await response.json();
    console.log("Product updated successfully:", result);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 bg-brand-200 pb-24 pt-14">
        <div className="flex justify-center ">
          <AvatarLetter username={user.username} />
        </div>
        <p className="text-center text-lg font-semibold">{user.username}</p>
      </div>
      <Menu />
      <button
        className="rounded bg-brand-500 px-4 py-2 text-white"
        onClick={updateProductWithImage}
      >
        Update product with image
      </button>
    </div>
  );
};
export default MinSide;
