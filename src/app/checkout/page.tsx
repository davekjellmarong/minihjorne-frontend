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
} from "@/components/cart/Utils";
import { Check } from "@phosphor-icons/react";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51JOhigA29RXGmicfdKhyh1kC7i8Psetyj3BNwoc7gFwus1AfgNeftLvr0w6hrPmNuWS1zogfahqR0YbjBcv2V9Y300D7TbsjW9"
);

const Page = () => {
  useAutoLogIn();
  const [clientSecret, setClientSecret] = useState("");
  const cart = getCart();

  const { data: jwt } = useQuery({
    queryKey: ["jwt"],
    queryFn: () => {
      return localStorage.getItem("jwt");
    },
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
  };
  const options: any = {
    clientSecret,
    appearance,
  };
  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Page;
