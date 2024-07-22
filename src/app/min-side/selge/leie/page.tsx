"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { UserQueries } from "@/queryFactory/User";
import { AuthQueries } from "@/queryFactory/Auth";
import { PaymentQueries } from "@/queryFactory/Payment";
import SuccessDialog from "@/components/features/minSide/leie/SuccessDialog";
import ActiveCard from "@/components/features/minSide/leie/ActiveCard";
import Cards from "@/components/features/minSide/leie/Cards";

const Leie = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: user } = useSuspenseQuery(UserQueries.me(jwt));
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
    queryKey: PaymentQueries.subscriptionLink(jwt, planId).queryKey,
    queryFn: PaymentQueries.subscriptionLink(jwt, planId).queryFn,
    enabled: planId > 0,
  });
  useEffect(() => {
    if (paymentData?.url) {
      router.push(paymentData.url.url);
    }
  }, [paymentData]);

  if (!user)
    return (
      <div>
        <h1>Leie</h1>
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
      {!user?.paid && (
        <div className="mt-8">
          <div className="flex justify-center">
            <p className="mb-12 text-center text-2xl">
              Velg lengde på din leieperiode
            </p>
          </div>
          <Cards setPlanId={setPlanId} />
        </div>
      )}
    </div>
  );
};

export default Leie;
