"use client";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import { Button } from "@/components/UI/button";
import { Checkbox } from "@/components/UI/checkbox";
import { Tabs, TabsList, TabsTrigger } from "@/components/UI/tabs";
import { createSellerPayout } from "@/serverActions/ServerActions";
import { salesMethodPercent } from "@/utils/constants";
import { SalgsMetode } from "@/utils/Enums";
import { Delivery, Product, Seller } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
interface ProductListProps {
  products: Product[];
  seller: Seller;
  deliveries: Delivery[];
}
const ProductList = ({ deliveries, seller }: ProductListProps) => {
  const [salesMethod, setSalesMethod] = useState<
    SalgsMetode.FullService | SalgsMetode.Selvregistrering
  >(SalgsMetode.Selvregistrering);
  const [selectedTab, setSelectedTab] = useState<
    "Full service" | "Selvregistrering"
  >("Selvregistrering");
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
  const { mutate, isPending } = useMutation({
    mutationFn: createSellerPayout,
    onSuccess: () => {
      setSelectedProducts([]);
    },
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
      <LoadingOverlay loading={isPending} />
      <div className="space-y-4 rounded-lg  p-4">
        <h2 className="text-xl font-bold text-[#333333] dark:text-[#f0f0f0]">
          Leveringer
        </h2>
        <Tabs
          value={selectedTab}
          onValueChange={(value) => {
            if (value === "Full service") {
              setSalesMethod(SalgsMetode.FullService);
              setSelectedTab("Full service");
            } else {
              setSalesMethod(SalgsMetode.Selvregistrering);
              setSelectedTab("Selvregistrering");
            }
          }}
          className="mb-6"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Full service">Full Service</TabsTrigger>
            <TabsTrigger value="Selvregistrering">Selvregistrering</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="space-y-4">
          {deliveries.map((delivery) => (
            <div
              key={delivery.id}
              className="rounded-lg border border-[#e5e5e5] bg-brand-50 p-4 dark:border-[#2c2c2c] dark:bg-[#2c2c2c]"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-[#333333] dark:text-[#f0f0f0]">
                  Levering {delivery.id}
                </div>
                <div className="text-sm text-[#666666] dark:text-[#b0b0b0]">
                  {delivery.attributes.inProgress ? "In Progress" : ""}
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm text-[#666666] dark:text-[#b0b0b0]">
                  Salgsmetode:{" "}
                  {delivery.attributes.sales_method.data.attributes.name}
                </div>
              </div>
              {delivery.attributes.sales_method.data.id === salesMethod && (
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {delivery.attributes.products.data.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between rounded-lg border border-[#e5e5e5] bg-white p-4 dark:border-[#2c2c2c] dark:bg-[#2c2c2c]"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={product.attributes.image.data[0].attributes.url}
                          alt="Product image"
                          width={50}
                          height={50}
                          className="rounded-md"
                          style={{ aspectRatio: "50/50", objectFit: "cover" }}
                        />
                        <div className="text-lg font-bold text-[#333333] dark:text-[#f0f0f0]">
                          {product.attributes.brand}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm text-[#666666] dark:text-[#b0b0b0]">
                          kr {product.attributes.price}
                        </div>
                        <Checkbox
                          onCheckedChange={(e) =>
                            handleCheckboxChange(e, product)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="text-sm text-[#666666] dark:text-[#b0b0b0]">
          {selectedProducts.length} produkter valgt
        </div>
        <div className="text-sm text-[#666666] dark:text-[#b0b0b0]">
          Total: kr{" "}
          {selectedProducts.reduce(
            (acc, product) => acc + product.attributes.price,
            0,
          )}
        </div>
        <Button
          onClick={() => {
            const totalPrice = selectedProducts.reduce(
              (acc, product) => acc + product.attributes.price,
              0,
            );
            const minihjornePercent =
              salesMethod === SalgsMetode.FullService
                ? salesMethodPercent.Minihjorne.FullService
                : salesMethodPercent.Minihjorne.Selvregistrering;
            const payoutPercent =
              salesMethod === SalgsMetode.FullService
                ? salesMethodPercent.Seller.FullService
                : salesMethodPercent.Seller.Selvregistrering;
            mutate({
              sellerId: seller.id,
              salesMethod: salesMethod,
              productIds: selectedProducts.map((product) => product.id),
              minihjornePrice: (minihjornePercent * totalPrice).toFixed(0),
              payoutPrice: (payoutPercent * totalPrice).toFixed(0),
              totalPrice: totalPrice.toFixed(0),
            });
          }}
          className="bg-[#7d6adf] text-white hover:bg-[#6653c9] dark:bg-[#9b8eff] dark:text-[#1a1b1e] dark:hover:bg-[#8273e6]"
        >
          Opprett utbetaling
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
