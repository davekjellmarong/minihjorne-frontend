"use client";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Checkout from "./Checkout";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PaymentMethods } from "@/utils/utils";
import {
  getCart,
  getItemsFromLocalStorage,
  getSavedProductIds,
} from "@/utils/CartUtils";
import { Check } from "@phosphor-icons/react";
import CheckoutForm from "./CheckoutForm";
import { useRouter } from "next/navigation";
// NEXT_PUBLIC_STRIPE_PK
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK as string);

const Page = () => {
  useAutoLogIn();
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState("");
  let cart: any;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    cart = getCart();
  }

  const { data: jwt } = useQuery({
    queryKey: ["jwt"],
    // queryFn: () => {
    //   return localStorage.getItem("jwt");
    // },
  });
  const { mutate: createPayment, isPaused: loading } = useMutation({
    mutationFn: (values: any) => {
      return PaymentMethods.post(values, jwt);
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
    if (jwt) {
      createPayment({
        data: {
          amount: cart.totalPrice,
          productsIds: cart.productIds,
          products: cart.items,
        },
      });
    }
  }, [jwt]);
  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#7d6adf",
    },
  };
  const options: any = {
    clientSecret,
    appearance,
    business: "Mini Hjørne",
  };
  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm price={cart.totalPrice} />
        </Elements>
      )}
    </div>
  );
};

export default Page;
