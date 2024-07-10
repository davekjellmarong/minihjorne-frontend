import React from "react";
import { useEffect, useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
  AddressElement,
} from "@stripe/react-stripe-js";
import { clearCartInLocalStorage } from "@/utils/CartUtils";
import { CurrencyDollar, Pants, Truck } from "@phosphor-icons/react";

const StripeForm = ({ price }: any) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret",
    );

    if (!clientSecret) {
      return;
    }

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }: any) => {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            clearCartInLocalStorage();
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${process.env.NEXT_PUBLIC_URL}/min-side/ordre`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: any = {
    layout: "tabs",
    defaultValues: {
      cvc: 555,
    },
  };
  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="my-14 flex w-full flex-col items-center gap-16"
    >
      <div className="w-[400px]">
        <h3 className="text-xl">Frakt</h3>
        <AddressElement
          options={{
            mode: "shipping",
            fields: { phone: "always" },
            allowedCountries: ["NO"],
            defaultValues: {
              // address: {
              //   line1: "Kanohallveien 12a",
              //   city: "Oslo",
              //   postal_code: "0585",
              //   country: "NO",
              // },
              // name: "Dave Marong",
              // phone: "+4798765432",
            },
          }}
        />
      </div>
      <div className="w-[400px]">
        <h3 className="text-xl">Betaling</h3>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Pants size={24} color="gray" />
          <p className="w-24 text-gray-500">Varer </p>
          <span className="text-xl font-light text-black">{price} kr </span>
        </div>
        <div className="flex gap-2">
          <Truck size={24} color="gray" />
          <p className="w-24 text-gray-500">Frakt </p>
          <span className="text-xl font-light text-black"> 159 kr</span>
        </div>
        <hr className="w-52 border" />
        <div className="flex gap-2">
          <CurrencyDollar size={24} color="gray" />
          <p className="w-24 text-gray-500">Total </p>
          <span className="text-xl font-light text-black">
            {" "}
            {price + 159} kr
          </span>
        </div>
      </div>
      <button
        className="mt-8 w-[400px] rounded-md bg-purple-600 p-4 text-white"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isLoading ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Betal nå"
          )}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default StripeForm;
