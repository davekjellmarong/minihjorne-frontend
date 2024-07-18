import React, { useState } from "react";
import { addItemToCart, getSavedProductIds } from "../../../utils/CartUtils";
import { toast } from "react-toastify";
import { ShoppingCart } from "@phosphor-icons/react";
import { Product } from "@/utils/types";

interface AddToCartButtonsProps {
  product: Product;
}

const AddToCartButtons = ({ product }: AddToCartButtonsProps) => {
  const [addedProductsIds, setAddedProductsIds] =
    useState<number[]>(getSavedProductIds());
  if (product.attributes.sold) return null;
  return (
    <>
      {addedProductsIds?.includes(product.id) ? (
        <button className="flex h-20 w-full items-center justify-center gap-1 rounded border-2 border-gray-400 px-6 text-lg  sm:hover:bg-gray-200">
          Eksisterer i handlekurven
        </button>
      ) : (
        <button
          onClick={() => {
            addItemToCart(product);
            setAddedProductsIds([...addedProductsIds, product.id]);
            toast.info("Lagt til", { position: toast.POSITION.BOTTOM_RIGHT });
          }}
          className=" flex  gap-2 rounded border-2 border-green-500 bg-green-500 p-4 "
        >
          <p className="text-white">Legg til</p>
          <ShoppingCart size={22} color="white" />
        </button>
      )}
    </>
  );
};

export default AddToCartButtons;
