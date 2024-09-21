import React from "react";
import { SellerGetMeDelivery } from "@/utils/types";
import InfoColoredBox from "@/components/UI/common/InfoColoredBox";

interface CurrentDeliveryProps {
  delivery: SellerGetMeDelivery;
}

const CurrentDelivery = async ({ delivery }: CurrentDeliveryProps) => {
  return (
    <InfoColoredBox color="green" title="Din nåværende levering">
      <p>
        <strong>Post eller direkte?:</strong> {delivery.delivery_type?.name}
      </p>
      <p>
        <strong>Beskrivelse:</strong> {delivery.description}
      </p>
    </InfoColoredBox>
  );
};

export default CurrentDelivery;
