import React, { useState } from "react";
import {
  addItemToCart,
  getSavedProductIds,
  removeItemFromCart,
} from "../cart/Utils";
import { toast } from "react-toastify";
import { MinusCircle, PlusCircle } from "@phosphor-icons/react";
import { Product } from "@/utils/types";

interface AddToCartButtonsProps {
  product: Product;
}

const AddToCartButtons = ({ product }: AddToCartButtonsProps) => {
  const [addedProductsIds, setAddedProductsIds] =
    useState<number[]>(getSavedProductIds());
  return (
    <>
      {addedProductsIds?.includes(product.id) ? (
        <button
          // onClick={() => {
          //   const updatedCart = removeItemFromCart(product.id);
          //   const updatedAddedProductsIds = updatedCart.map(
          //     (product) => product.id
          //   );
          //   setAddedProductsIds(updatedAddedProductsIds);
          //   toast.info("Fjernet", { position: toast.POSITION.BOTTOM_RIGHT });
          // }}
          className="flex h-20 w-full items-center justify-center gap-1 rounded border-2 border-gray-400 px-6 text-lg  sm:hover:bg-gray-200"
        >
          Eksisterer i handlekurven
        </button>
      ) : (
        <button
          onClick={() => {
            addItemToCart(product);
            setAddedProductsIds([...addedProductsIds, product.id]);
            toast.info("Lagt til", { position: toast.POSITION.BOTTOM_RIGHT });
          }}
          className="flex h-20 w-full items-center justify-center gap-1 rounded border-2 border-gray-400 px-6 text-lg sm:hover:bg-gray-200"
        >
          Legg til <PlusCircle size={22} />
        </button>
      )}
    </>
  );
};

export default AddToCartButtons;
