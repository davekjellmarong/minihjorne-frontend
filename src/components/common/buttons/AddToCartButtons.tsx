"use client";
import React, { useState } from "react";
import { addItemToCart, getSavedProductIds } from "../../../utils/CartUtils";
import { toast } from "react-toastify";
import { ShoppingCart } from "@phosphor-icons/react";
import { Product } from "@/utils/types";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";
import { incrementProductAddedToCart } from "@/serverActions/ServerActions";
import { Button } from "@/components/UI/button";
import { usePostHog } from "posthog-js/react";

interface AddToCartButtonsProps {
  product: Product;
}

const AddToCartButtons = ({ product }: AddToCartButtonsProps) => {
  const posthog = usePostHog();
  const [addedProductsIds, setAddedProductsIds] =
    useState<number[]>(getSavedProductIds());
  if (product.attributes.sold) return null;
  return (
    <>
      {addedProductsIds?.includes(product.id) ? (
        <div className="py-4">
          <ActionsColoredBox
            header=""
            button="Se handlekurv"
            path="/handlekurv"
            color="white"
            shadow={false}
          >
            Produktet ligger i handlekurven din
          </ActionsColoredBox>
        </div>
      ) : (
        <Button
          className="mt-4 w-full rounded-lg bg-brand-600"
          onClick={() => {
            addItemToCart(product);
            setAddedProductsIds([...addedProductsIds, product.id]);
            toast.info("Lagt til", { position: toast.POSITION.BOTTOM_RIGHT });
            incrementProductAddedToCart(product.id);
            posthog.capture("add_to_cart", {
              product: product,
            });
          }}
          // className="flex gap-2 rounded border-2 border-green-500 bg-green-500 px-5 py-3"
        >
          <p className="text-white">Legg i handlekurv</p>
          <ShoppingCart size={22} color="white" />
        </Button>
      )}
    </>
  );
};

export default AddToCartButtons;
