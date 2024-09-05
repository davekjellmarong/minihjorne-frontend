import React from "react";
import InfoColoredBox from "@/components/UI/common/InfoColoredBox";
import { DeliveryType } from "@/utils/Enums";
import { UserMethods } from "@/queryFactory/User";
import { cookies } from "next/headers";
import LeveringsDager from "@/components/common/leveringsDager/LeveringsDager";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";

const LeverePage = async () => {
  const token = cookies().get("Token")?.value;
  const user = await UserMethods.getMe(token);

  const currentDelivery = user.deliveries.find(
    (delivery) => delivery.inProgress,
  );
  if (!currentDelivery) {
    return (
      <div className="px-4">
        <ActionsColoredBox
          header="Ingen levering funnet."
          color="yellow"
          path="/min-side/selge/leverings-metode"
          button="Tilbake til Min side"
        >
          Du må først velge om leveringen skal sendes til oss eller leveres
          direkte. Gå hit for å velge leveringsmetode.
        </ActionsColoredBox>
      </div>
    );
  }
  const deliveryDetails = await UserMethods.getDelivery(
    currentDelivery?.id,
    token,
  );
  if (!deliveryDetails) {
    return <div>Ingen levering funnet.</div>;
  }

  const deliveryType = deliveryDetails.attributes.delivery_type.data?.id;
  if (!deliveryType) {
    return (
      <div className="px-4">
        <ActionsColoredBox
          header="Ingen leveringmetode funnet."
          color="yellow"
          path="/min-side/selge/leverings-metode"
          button="Leveringsmetode"
        >
          Du må først velge om leveringen skal sendes til oss eller leveres
          direkte. Gå hit for å velge leveringsmetode.
        </ActionsColoredBox>
      </div>
    );
  }
  return (
    <div className="container ">
      {deliveryType === DeliveryType.Shipping ? (
        <div>
          <div>
            <p className="text-center text-sm">Leveringsmetode:</p>
            <p className="text-center text-2xl font-bold text-brand-500">
              Frakt
            </p>
          </div>
          <div className="py-6 ">
            <InfoColoredBox title="Skriv dette på pakken:" color="yellow">
              <div className="my-2 text-start font-bold">
                <p>Iselin Gamst Bernhart</p>
                <p>Kanonhallveien 12A</p>
                <p>0585 Oslo</p>
              </div>
              <p>Referanse: {user.id}</p>
            </InfoColoredBox>
          </div>
          <p className="mt-4">
            Hvis du trenger et mobilnummer til registreringen:
          </p>
          <p className="font-bold">469 479 22</p>
          <div className="mt-4">
            <p>
              Hva er en referanse? Referanse er ditt unike ID-nummer på
              Minihjørne. <strong>{user.id}</strong> er knyttet til din bruker{" "}
              <strong>{user.username}</strong>, og vi trenger dette for å kunne
              fullføre registreringen.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <p className="text-center text-sm">Leveringsmetode:</p>
            <p className="text-center text-2xl font-bold text-brand-500">
              Direkte levering
            </p>
          </div>
          <div className="py-6 ">
            <InfoColoredBox title="Lever klærne direkte" color="yellow">
              <div className="text-start">
                <p className="text-gray-700">
                  <strong>Adresse:</strong>
                  <br /> Kanonhallveien 12A, 0585 Oslo
                </p>
                <p className="text-gray-700">
                  <strong>Telefon:</strong>
                  <br /> 46947922
                </p>
              </div>
            </InfoColoredBox>
          </div>
          <LeveringsDager />
        </div>
      )}
    </div>
  );
};

export default LeverePage;
