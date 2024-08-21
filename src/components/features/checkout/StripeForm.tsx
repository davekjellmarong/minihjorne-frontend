import React, { useTransition } from "react";
import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  AddressElement,
  LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import { clearCartInLocalStorage } from "@/utils/CartUtils";
import { CurrencyDollar, Pants, Truck } from "@phosphor-icons/react";
import { shippingPrice } from "@/utils/constants";
import { UserBackend } from "@/utils/types";
import Button from "@/components/common/buttons/Button";
import { updateAmountByShipping } from "@/serverActions/Stripe";
interface StripeFormProps {
  price: any;
  user: UserBackend | undefined;
  clientId: string;
}
const StripeForm = ({ price, user, clientId }: StripeFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isShipping, setIsShipping] = useState(true);
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
        return_url: user
          ? `${process.env.NEXT_PUBLIC_URL}/min-side/ordre?payment=success`
          : `${process.env.NEXT_PUBLIC_URL}/ordre-bekreftelse?payment=success`,
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

  const handleShippingChange = async (shipping: boolean) => {
    setIsLoading(true);
    updateAmountByShipping(shipping, clientId).then((response) => {
      if (response === "success") {
        setIsShipping(shipping);
        setIsLoading(false);
      } else {
        setMessage(response);
      }
    });
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
      className="my-14 flex w-full flex-col items-center gap-10"
    >
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => {
            handleShippingChange(true);
          }}
          size="small"
          type={`${isShipping ? "brand" : "outline"}`}
        >
          Sendes med post (99kr)
        </Button>
        <Button
          onClick={() => {
            handleShippingChange(false);
          }}
          size="small"
          type={`${isShipping ? "outline" : "brand"}`}
        >
          Hente selv i oslo (gratis)
        </Button>
      </div>
      <div className="">
        <h3 className="text-xl text-gray-600">Kontakt</h3>
        <LinkAuthenticationElement
          options={{
            defaultValues: {
              email: user ? user.email : "",
            },
          }}
        />
      </div>

      {isShipping && (
        <div className="">
          <h3 className="text-xl text-gray-600">Frakt</h3>
          <AddressElement
            options={{
              mode: "shipping",
              display: {
                name: "full",
              },
              fields: { phone: "always" },
              validation: {
                phone: {
                  required: "always",
                },
              },
              allowedCountries: ["NO"],
            }}
          />
        </div>
      )}
      <div className="">
        <h3 className="text-xl text-gray-600">Betaling</h3>
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
          <span className="text-xl font-light text-black">
            {" "}
            {isShipping ? shippingPrice : 0} kr
          </span>
        </div>
        <hr className="w-52 border" />
        <div className="flex gap-2">
          <CurrencyDollar size={24} color="gray" />
          <p className="w-24 text-gray-500">Total </p>
          <span className="text-xl font-light text-black">
            {" "}
            {isShipping ? price + shippingPrice : price} kr
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
