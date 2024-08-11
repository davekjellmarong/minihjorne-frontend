"use client";
import React, { useState } from "react";
import { addItemToCart, getSavedProductIds } from "../../../utils/CartUtils";
import { toast } from "react-toastify";
import { ShoppingCart } from "@phosphor-icons/react";
import { Product } from "@/utils/types";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";

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
        <ActionsColoredBox
          header=""
          button="Se handlekurv"
          path="/handlekurv"
          color="green"
        >
          Denne ligger i handlekurven din
        </ActionsColoredBox>
      ) : (
        <button
          onClick={() => {
            addItemToCart(product);
            setAddedProductsIds([...addedProductsIds, product.id]);
            toast.info("Lagt til", { position: toast.POSITION.BOTTOM_RIGHT });
          }}
          className="flex gap-2 rounded border-2 border-green-500 bg-green-500 px-5 py-3"
        >
          <p className="text-white">Legg til</p>
          <ShoppingCart size={22} color="white" />
        </button>
      )}
    </>
  );
};

export default AddToCartButtons;
