import Form from "@/components/features/minSide/levering/Form";
import CurrentDelivery from "@/components/features/minSide/levering/CurrentDelivery";
import { cookies } from "next/headers";
import React from "react";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";
import { SellerMethods } from "@/queryFactory/Seller";

const LeveringPage = async () => {
  const token = cookies().get("Token")?.value;
  const user = await SellerMethods.getMe(token);
  const currentDelivery = user.seller?.deliveries?.find(
    (delivery) => delivery.inProgress,
  );
  if (!currentDelivery) {
    return (
      <div className="">
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

  return (
    <div className="container mx-auto p-4">
      {currentDelivery && currentDelivery.delivery_type ? (
        <CurrentDelivery delivery={currentDelivery} />
      ) : (
        <Form currentDelivery={currentDelivery} />
      )}
    </div>
  );
};

export default LeveringPage;
