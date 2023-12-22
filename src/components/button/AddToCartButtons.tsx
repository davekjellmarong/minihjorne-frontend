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
  const [addedProductsIds, setAddedProductsIds] = useState<number[]>(
    getSavedProductIds()
  );
  return (
    <>
      {addedProductsIds?.includes(product.id) ? (
        <button
          onClick={() => {
            const updatedCart = removeItemFromCart(product.id);
            const updatedAddedProductsIds = updatedCart.map(
              (product) => product.id
            );
            setAddedProductsIds(updatedAddedProductsIds);
            toast.info("Fjernet", { position: toast.POSITION.BOTTOM_RIGHT });
          }}
          className="text-sm flex items-center gap-1 border-2 border-gray-200 px-4 py-2 rounded"
        >
          Fjern <MinusCircle size={14} />
        </button>
      ) : (
        <button
          onClick={() => {
            addItemToCart(product);
            setAddedProductsIds([...addedProductsIds, product.id]);
            toast.info("Lagt til", { position: toast.POSITION.BOTTOM_RIGHT });
          }}
          className="text-sm flex items-center gap-1 border-2 border-gray-200 px-4 py-2 rounded"
        >
          Legg til <PlusCircle size={14} />
        </button>
      )}
    </>
  );
};

export default AddToCartButtons;
