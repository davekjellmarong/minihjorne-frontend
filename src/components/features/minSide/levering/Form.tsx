"use client";
import Button from "@/components/common/buttons/Button";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import InfoColoredBox from "@/components/UI/common/InfoColoredBox";
import { updateDelivery } from "@/serverActions/ServerActions";
import { DeliveryType } from "@/utils/Enums";
import { UserBackend } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface FormProps {
  user: UserBackend;
}
const Form = ({ user }: FormProps) => {
  const [description, setDescription] = useState("");
  const [deliveryType, setDeliveryType] = useState<
    DeliveryType.InPerson | DeliveryType.Shipping | 0
  >(0);

  const { mutate, isPending } = useMutation({
    mutationFn: updateDelivery,
    onSuccess: () => {
      toast.success("Levering lagret!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4">
      <LoadingOverlay loading={isPending} /> {/* Set loading state as needed */}
      <div className="mb-6 ">
        <h1 className="text-center text-2xl font-semibold">Levering</h1>
        <p>{user.user_status.type}</p>
      </div>
      <div className="pb-6">
        <InfoColoredBox title="Adresse informasjon:" color="secondary">
          <div className="text-start">
            <p>Kanonhallveien 12A</p>
            <p>0585 Oslo</p>
            <p>Iselin Malene Gamst Bernhart</p>
            <p>Tlf: 46947922</p>
          </div>
        </InfoColoredBox>
      </div>
      <form action={mutate} className="w-full max-w-md space-y-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium">
            Hvordan ønsker du å levere klærne?
          </label>

          <div className="flex flex-col space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="deliveryType"
                value={DeliveryType.InPerson}
                checked={deliveryType === DeliveryType.InPerson}
                onChange={(e) => setDeliveryType(DeliveryType.InPerson)}
                className="form-radio h-6 w-6 border-gray-300 text-brand-600 focus:ring-brand-500"
              />
              <span className="ml-2 text-sm">Levering i person</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="deliveryType"
                value={DeliveryType.Shipping}
                checked={deliveryType === DeliveryType.Shipping}
                onChange={(e) => setDeliveryType(DeliveryType.Shipping)}
                className="form-radio h-6 w-6 border-gray-300 text-brand-600 focus:ring-brand-500"
              />
              <span className="ml-2 text-sm">Frakt</span>
            </label>
          </div>
        </div>

        <textarea
          value={description}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Noe du vil legge til? "
          className="w-full rounded-lg border border-gray-300 p-2 focus:ring-brand-500"
          rows={5}
        />

        <Button
          submit
          disabled={!deliveryType}
          className="w-full rounded-lg bg-brand-500 px-4 py-2 text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Lagre leverings metode
        </Button>
      </form>
    </div>
  );
};

export default Form;
