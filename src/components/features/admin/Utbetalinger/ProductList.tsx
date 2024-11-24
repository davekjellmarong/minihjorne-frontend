"use client";
import { Button } from "@/components/UI/button";
import { Checkbox } from "@/components/UI/checkbox";
import { sendReceipt } from "@/serverActions/ServerActions";
import { SalgsMetode } from "@/utils/Enums";
import { Product, Seller } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
interface ProductListProps {
  products: Product[];
  seller: Seller;
}
const ProductList = ({ products, seller }: ProductListProps) => {
  const [salesMethod, setSalesMethod] = useState<
    SalgsMetode.FullService | SalgsMetode.Selvregistrering
  >();
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const handleCheckboxChange = (e: any, product: Product) => {
    if (!e) {
      setSelectedProducts(
        selectedProducts.filter((current) => current.id !== product.id),
      );
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };
  const { mutate } = useMutation({
    mutationFn: sendReceipt,
    onSuccess: () => {},
    onError: (error) => {
      const message = JSON.parse(error.message);
      toast.error(message[0].message);
    },
  });
  //   const { mutate } = useMutation({
  //     mutationFn: sendReceipt,
  //     onSuccess: () => {},
  //     onError: (error) => {
  //       const message = JSON.parse(error.message);
  //       toast.error(message[0].message);
  //     },
  //   });
  //   const fullserviceProducts = products.filter(
  //     (product) => product.attributes.sales_method === SalesMethod.FullService,
  //   );
  //   const selvregistreringProducts = products.filter(
  //     (product) =>
  //       product.attributes.sales_method === SalesMethod.Selvregistrering,
  //   );
  return (
    <div>
      <p>{seller.attributes.username} sine solgte produkter</p>
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-4">
            <Checkbox
              onCheckedChange={(e) => handleCheckboxChange(e, product)}
            />
            <div className="flex flex-1 flex-col">
              <Image
                src={product.attributes.image.data[0].attributes.url}
                alt="product image"
                width={100}
                height={100}
                className="size-20 rounded-lg object-cover"
              />
              <div className="text-lg font-bold">
                {product.attributes.brand}
              </div>

              <div className="text-sm text-[#666666]">
                {product.attributes.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p>
          Valgt {selectedProducts.length} av {products.length} produkter
        </p>
        <p>
          Totalt{" "}
          {selectedProducts.reduce(
            (acc, product) => acc + product.attributes.price,
            0,
          )}{" "}
          kr
        </p>
      </div>
      <Button>Opprett utbetaling</Button>
      <Button
        onClick={() => {
          mutate({
            id: seller.id,
            sales_method: "salgsmetode",
            productIds: selectedProducts.map((product) => product.id),
          });
        }}
      >
        Send kvittering
      </Button>
    </div>
  );
};

export default ProductList;
