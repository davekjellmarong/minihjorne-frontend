import Form from "@/components/features/minSide/levering/Form";
import CurrentDelivery from "@/components/features/minSide/levering/CurrentDelivery";
import { UserMethods } from "@/queryFactory/User";
import { UserBackend } from "@/utils/types";
import { cookies } from "next/headers";
import React from "react";

const LeveringPage = async () => {
  const token = cookies().get("Token")?.value;
  const user: UserBackend = await UserMethods.getMe(token);
  const currentDelivery = user.deliveries.find(
    (delivery) => !delivery.receivedFromSeller,
  );

  return (
    <div className="container mx-auto p-4">
      {currentDelivery ? (
        <CurrentDelivery delivery={currentDelivery} token={token} />
      ) : (
        <Form user={user} />
      )}
    </div>
  );
};

export default LeveringPage;
