"use client";
import React, { Suspense, useState } from "react";
import UserDropdown from "@/components/features/admin/Delivery/UserDropdown";
import { Button } from "@/components/UI/button";
import { Delivery, Seller, UserBackend } from "@/utils/types";
import Loading from "@/components/common/loading/Loading";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import { relateDeliveryProductsToSeller } from "@/serverActions/ServerActions";
interface HeaderProps {
  delivery: Delivery;
}
const Header = ({ delivery }: HeaderProps) => {
  const [selectedSeller, setSelectedSeller] = useState<Seller>();
  const { mutate, isPending } = useMutation({
    mutationFn: relateDeliveryProductsToSeller,
    onSuccess: () => {
      toast.success("Levering og produkter er nå overført til ny selger");
    },
    onError: (error) => {
      const message = JSON.parse(error.message);
      toast.error(message[0].message);
    },
  });
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
      <LoadingOverlay loading={isPending} />
      <h1 className="text-2xl font-bold">Levering {delivery.id}</h1>
      <Suspense fallback={<Loading />}>
        <UserDropdown
          selectedSeller={selectedSeller}
          setSelectedSeller={setSelectedSeller}
        />
      </Suspense>
      <div className="text-brand-500">
        Nåværende bruker:{" "}
        <span
          className={`text-xl font-semibold ${selectedSeller ? "line-through" : ""}`}
        >
          {delivery.attributes.seller.data.attributes.username}
        </span>
      </div>
      {selectedSeller && (
        <>
          <div>
            <p>
              Ny bruker:
              <span className="text-xl font-semibold">
                {" "}
                {selectedSeller.attributes.username}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <Button
              onClick={() => {
                mutate({
                  deliveryId: delivery.id,
                  sellerId: selectedSeller.id,
                });
              }}
              className="bg-brand-500 text-white"
            >
              Overfør produkter og levering
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
