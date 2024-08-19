"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCart } from "@/utils/CartUtils";
import StripeForm from "../../components/features/checkout/StripeForm";
import { useRouter } from "next/navigation";
import { AuthQueries } from "@/queryFactory/Auth";
import { PaymentMethods } from "@/queryFactory/Payment";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK as string);

const Page = () => {
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState("");
  let cart: any;
  if (typeof window !== "undefined") {
    cart = getCart();
  }

  const { mutate: createPayment } = useMutation({
    mutationFn: (values: any) => {
      return PaymentMethods.post(values);
    },
    onSuccess: (data) => {
      setClientSecret(data.clientSecret);
      console.log(data);
    },
    onError: (err: any) => {
      console.log(err);
      router.push("/handlekurv?handlekurv=feil");
    },
  });
  useEffect(() => {
    createPayment({
      data: {
        amount: cart.totalPrice,
        productsIds: cart.productIds,
        products: cart.items,
      },
    });
  }, []);
  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#7d6adf",
    },
  };
  const options: any = {
    clientSecret,
    appearance,
    business: "Minihjørne",
  };
  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripeForm price={cart.totalPrice} />
        </Elements>
      )}
    </>
  );
};

export default Page;
