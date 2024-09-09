"use client";
import React, { Suspense, useState } from "react";
import UserDropdown from "@/components/features/admin/Delivery/UserDropdown";
import { Button } from "@/components/UI/button";
import { Delivery, UserBackend } from "@/utils/types";
import Loading from "@/components/common/loading/Loading";
import { useMutation } from "@tanstack/react-query";
import { relateDeliveryProductsToUser } from "@/serverActions/ServerActions";
import { toast } from "react-toastify";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
interface HeaderProps {
  delivery: Delivery;
}
const Header = ({ delivery }: HeaderProps) => {
  const [selectedUser, setSelectedUser] = useState<UserBackend>();
  const { mutate, isPending } = useMutation({
    mutationFn: relateDeliveryProductsToUser,
    onSuccess: () => {
      toast.success("Levering og produkter er nå overført til ny bruker");
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
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      </Suspense>
      <div className="text-brand-500">
        Nåværende bruker:{" "}
        <span
          className={`text-xl font-semibold ${selectedUser ? "line-through" : ""}`}
        >
          {delivery.attributes.user.data.attributes.username}
        </span>
      </div>
      {selectedUser && (
        <>
          <div>
            <p>
              Ny bruker:
              <span className="text-xl font-semibold">
                {" "}
                {selectedUser.username}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <Button
              onClick={() => {
                mutate({
                  deliveryId: delivery.id,
                  userId: selectedUser.id,
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
