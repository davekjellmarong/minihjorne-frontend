"use client";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";
import { clearCartInLocalStorage } from "@/utils/CartUtils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const OrderConfirmationPage = () => {
  const searchParams = useSearchParams().get("redirect_status");
  useEffect(() => {
    if (searchParams === "succeeded") {
      console.log("Payment succeeded!");
      clearCartInLocalStorage();
    }
  }, [searchParams]);

  return (
    <div className="m-4">
      <ActionsColoredBox
        header="Ordrebekreftelse"
        color="green"
        path="/"
        button="Tilbake til hovedsiden"
        image
      >
        <p className="mb-4 text-center text-lg">
          Takk for din bestilling! Vi har mottatt ordren din og behandler den
          nå.
        </p>

        <p className="mb-4 text-center">
          Du vil motta en bekreftelse på e-post når ordren din er sendt.
        </p>
        <p className="mb-4 text-center">
          Hvis du har spørsmål om bestillingen din, vennligst kontakt oss på{" "}
          <Link href="mailto:iselin@minihjorne.no" className="text-blue-500">
            iselin@minihjorne.no
          </Link>
          .
        </p>
      </ActionsColoredBox>
    </div>
  );
};

export default OrderConfirmationPage;
