"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PaymentMethods } from "@/utils/utils";
import { getCart } from "@/utils/CartUtils";
import CheckoutForm from "./CheckoutForm";
import { useRouter } from "next/navigation";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK as string);

const Page = () => {
  useAutoLogIn();
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState("");
  let cart: any;
  if (typeof window !== "undefined") {
    cart = getCart();
  }

  const { data: jwt } = useQuery({
    queryKey: ["jwt"],
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
