import React from "react";
import { DeliveryBackend } from "@/utils/types";
import { UserMethods } from "@/queryFactory/User";
import InfoColoredBox from "@/components/UI/common/InfoColoredBox";

interface CurrentDeliveryProps {
  delivery: DeliveryBackend;
  token: string | undefined;
}

const CurrentDelivery = async ({ delivery, token }: CurrentDeliveryProps) => {
  const deliveryDetail = await UserMethods.getDelivery(delivery.id, token);
  return (
    <InfoColoredBox color="green" title="Din nåværende levering">
      <p>
        <strong>Post eller direkte?:</strong>{" "}
        {deliveryDetail.attributes.delivery_type.data.attributes.name}
      </p>
      <p>
        <strong>Beskrivelse:</strong> {deliveryDetail.attributes.description}
      </p>
    </InfoColoredBox>
  );
};

export default CurrentDelivery;
