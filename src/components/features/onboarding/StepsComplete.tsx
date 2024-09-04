import React from "react";
import { UserBackend } from "@/utils/types";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";
import InfoColoredBox from "@/components/UI/common/InfoColoredBox";
import { UserMethods } from "@/queryFactory/User";
import { cookies } from "next/headers";

interface SelvregistreringCompleteProps {
  user: UserBackend;
}

const StepsComplete = async ({ user }: SelvregistreringCompleteProps) => {
  const token = cookies().get("Token")?.value;
  const currentDelivery = user.deliveries.find(
    (delivery) => delivery.inProgress,
  );
  const deliveryDetails = await UserMethods.getDelivery(
    currentDelivery?.id,
    token,
  );
  if (currentDelivery?.receivedFromSeller) {
    return (
      <div className="px-4">
        <InfoColoredBox
          title="Gratulerer! Alle trinn er fullført."
          color="green"
          image={true}
        >
          Dine klær er mottatt på lageret og vil snart bli publisert på
          nettsiden!
        </InfoColoredBox>
      </div>
    );
  } else {
    return (
      <div className="px-4">
        <ActionsColoredBox
          header={`Du er ferdig med "${deliveryDetails.attributes.sales_method.data.attributes.name}"!`}
          button="Les mer om levering"
          path="/min-side/selge/levere"
          color="green"
          image={true}
        >
          Nå gjenstår det bare å levere klærne dine. Dersom du allerede har
          sendt dem, vennligst vent til vi har mottatt dem på lageret.
          <br />
          <br />
          Hvis du vil laste opp flere klær, kan du fortsatt gjøre det.
        </ActionsColoredBox>
      </div>
    );
  }
};

export default StepsComplete;
