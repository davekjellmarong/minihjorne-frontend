"use client";
import { useStore } from "@/stateManagment/ZustandStore";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SuccessDialog from "./SuccessDialog";
import { useSearchParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { PaymentMethods } from "@/utils/utils";
import { CheckCircle, XCircle } from "@phosphor-icons/react";
import Cards from "./Cards";
import ActiveCard from "./ActiveCard";

const Abonnement = () => {
  const router = useRouter();
  const user = useStore((state) => state.user);
  const jwt = useStore((state) => state.jwt);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const searchParams = useSearchParams();
  const [planId, setPlanId] = useState(0);
  const payment = searchParams.get("payment");
  useEffect(() => {
    if (payment === "success") {
      setPaymentSuccess(true);
    }
  }, [payment]);
  const { data: paymentData } = useQuery({
    queryKey: ["payment-link"],
    queryFn: () => {
      return PaymentMethods.getSubscriptionPaymentLink(jwt, planId);
    },
    enabled: !!jwt && !!user && planId > 0,
  });
  useEffect(() => {
    if (paymentData?.url) {
      router.push(paymentData.url.url);
    }
  }, [paymentData]);

  if (!user)
    return (
      <div>
        <h1>Abonnement</h1>
        <p>Du må være logget inn for å se denne siden</p>
      </div>
    );

  return (
    <div>
      <SuccessDialog
        paymentSuccess={paymentSuccess}
        setPaymentSuccess={setPaymentSuccess}
      />
      {user.paid && (
        <div>
          <ActiveCard planId={user.plan.id} user={user} />
        </div>
      )}
      {!user.paid && (
        <div className="mt-8">
          <div className="flex justify-center">
            <p className="text-center text-2xl mb-12">
              Velg lengde på ditt abonnement
            </p>
          </div>
          <Cards setPlanId={setPlanId} />
        </div>
      )}
    </div>
  );
};

export default Abonnement;
