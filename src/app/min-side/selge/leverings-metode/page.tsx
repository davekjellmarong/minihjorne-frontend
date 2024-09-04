import Form from "@/components/features/minSide/levering/Form";
import CurrentDelivery from "@/components/features/minSide/levering/CurrentDelivery";
import { UserMethods } from "@/queryFactory/User";
import { UserBackend } from "@/utils/types";
import { cookies } from "next/headers";
import React from "react";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";

const LeveringPage = async () => {
  const token = cookies().get("Token")?.value;
  const user: UserBackend = await UserMethods.getMe(token);
  const currentDelivery = user.deliveries.find(
    (delivery) => delivery.inProgress,
  );

  if (!currentDelivery) {
    return (
      <div className="px-4">
        <ActionsColoredBox
          header="Du må velge salgsmetode"
          button="Velg salgsmetode"
          path="/min-side/selge/salgs-metode"
          color="green"
          image={true}
        >
          Du må velge salgsmetode før du velger leveringsmetode.
        </ActionsColoredBox>
      </div>
    );
  }
  const deliveryDetails = await UserMethods.getDelivery(
    currentDelivery?.id,
    token,
  );

  return (
    <div className="container mx-auto p-4">
      {currentDelivery && deliveryDetails.attributes.delivery_type.data ? (
        <CurrentDelivery delivery={currentDelivery} token={token} />
      ) : (
        <Form user={user} />
      )}
    </div>
  );
};

export default LeveringPage;
