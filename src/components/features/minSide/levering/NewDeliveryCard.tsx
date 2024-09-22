import { SellerMethods } from "@/queryFactory/Seller";
import { cookies } from "next/headers";
import React from "react";
import Card from "../cards/Card";
const NewDeliveryCard = async () => {
  const token = cookies().get("Token")?.value;
  const user = await SellerMethods.getMe(token);
  const currentDelivery = user.seller?.deliveries?.find(
    (delivery) => delivery.inProgress,
  );
  if (user.seller && currentDelivery) {
    return null;
  }
  return (
    <>
      <Card
        header="Registrer levering"
        description="Hvis du vil selge mer produkter, må du registrere en ny levering."
        button="Registrer levering"
        href="/min-side/selge/salgs-metode"
        border
      />
    </>
  );
};

export default NewDeliveryCard;
