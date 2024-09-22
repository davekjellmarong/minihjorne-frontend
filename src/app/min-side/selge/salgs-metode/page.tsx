import React, { useState } from "react";
import Form from "@/components/features/minSide/salgsmetode/Form";
import { cookies } from "next/headers";
import { SalgsMetode } from "@/utils/Enums";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";
import { SellerMethods } from "@/queryFactory/Seller";

const page = async () => {
  const token = cookies().get("Token")?.value;
  const user = await SellerMethods.getMe(token);
  const activeDelivery = user.seller?.deliveries?.find(
    (delivery) => delivery.inProgress,
  );
  if (user && activeDelivery?.sales_method) {
    return (
      <div className="px-4">
        <ActionsColoredBox
          header={`Salgsmetode - ${activeDelivery.sales_method.name}`}
          color="green"
          button="Gå tilbake"
          path="/min-side"
          shadow={false}
        >
          {activeDelivery.sales_method.id === SalgsMetode.Selvregistrering
            ? "Selvregistrering: Du styrer salgsprosessen på egen hånd. 30% av salgsprisen går til Minihjørne."
            : "Full service pakke: Vi tar oss av alt. 60% av salgsprisen går til Minihjørne."}
        </ActionsColoredBox>
      </div>
    );
  }
  return (
    <>
      <Form />
    </>
  );
};

export default page;
