"use server";
import { shippingPrice } from "@/utils/constants";
const stripe = require("stripe")(process.env.STRIPE_SK);

export const updateAmountByShipping = async (shipping: boolean, id: string) => {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(id);

    const originalAmount = Number(paymentIntent.metadata.shippingFreeAmount);
    let updatedAmount = 0;
    if (shipping) {
      updatedAmount = originalAmount + shippingPrice * 100;
    } else {
      updatedAmount = originalAmount;
    }
    await stripe.paymentIntents.update(id, {
      amount: updatedAmount,
    });
    return "success";
  } catch (error) {
    console.error(error);
    return "Error. Could not update amount";
  }
};
