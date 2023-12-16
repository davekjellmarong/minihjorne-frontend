"use client";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
const stripePromise = loadStripe(
  "pk_test_51JOhigA29RXGmicfdKhyh1kC7i8Psetyj3BNwoc7gFwus1AfgNeftLvr0w6hrPmNuWS1zogfahqR0YbjBcv2V9Y300D7TbsjW9"
);

const Page = () => {
  useAutoLogIn();
  return (
    <div>
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  );
};

export default Page;
