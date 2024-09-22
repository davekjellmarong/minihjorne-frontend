"use server";

import { UserMethods } from "@/queryFactory/User";
import { cookies } from "next/headers";
import { emailSchema, resetPasswordSchema } from "@/zod/Zod";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ProductsMethods } from "@/queryFactory/Product";
import { SellerMethods } from "@/queryFactory/Seller";
import { DeliveryMethods } from "@/queryFactory/Delivery";
const cookieStore: any = cookies();
const token = cookieStore.get("Token")?.value;

export const sendPasswordResetEmail = async (formdata: FormData) => {
  const email = formdata.get("email");
  try {
    emailSchema.parse(email);
  } catch (err) {
    if (err instanceof z.ZodError) {
      throw new Error(err.message);
    }
  }
  const response = await UserMethods.sendResetPasswordMail({ email: email });
  return response;
};

export const resetPassword = async (formdata: FormData) => {
  const data = Object.fromEntries(formdata.entries());
  try {
    resetPasswordSchema.parse(data);
  } catch (err) {
    if (err instanceof z.ZodError) {
      throw new Error(err.message);
    }
  }

  const { code, password, passwordConfirmation } = data;
  const response = await UserMethods.resetPassword({
    code: code,
    password: password,
    passwordConfirmation: passwordConfirmation,
  });
  return response;
};

export const updateUserSaleProfile = async (formdata: FormData) => {
  const header = formdata.get("header");
  const description = formdata.get("description");
  const payload = {
    data: {
      header: header,
      description: description,
    },
  };
  const user = await SellerMethods.getMe(token);
  const response = await SellerMethods.putFetch(
    payload,
    user.seller?.id,
    token,
  );
  if (response.id === user.seller?.id) {
    revalidatePath("/sellers/me");
    redirect("/min-side/selge/salgsprofil");
  } else {
    throw new Error("Error updating user sale profile");
  }
};

export const incrementProductViews = async (productId: number) => {
  const isBotCookie: any = cookies().get("isBot")?.value;
  if (isBotCookie === "false") {
    await ProductsMethods.incrementProductView(productId);
    return "Product view incremented";
  }
  return "Bot detected";
};

export const incrementProductAddedToCart = async (productId: number) => {
  const isBotCookie: any = cookies().get("isBot")?.value;
  if (isBotCookie === "false") {
    await ProductsMethods.incrementProductAddedToCart(productId);
    return "Product added to cart incremented";
  }
  return "Bot detected";
};

export const incrementSellerViews = async (sellerId: number) => {
  const isBotCookie: any = cookies().get("isBot")?.value;
  if (isBotCookie === "false") {
    await SellerMethods.incrementSellerView(sellerId);
    return "Seller view incremented";
  }
  return "Bot detected";
};

export const activateSalgsMetodeAndCreateDelivery = async (
  formdata: FormData,
) => {
  const salgsmetode = formdata.get("salgsmetode");
  const user = await SellerMethods.getMe(token);
  let currentDelivery = user.seller?.deliveries?.find(
    (delivery) => delivery.inProgress,
  );
  let seller = user.seller;
  if (!seller) {
    try {
      const payload = {
        data: {
          user: user.id,
          username: user.username,
        },
      };
      seller = await SellerMethods.createSeller(payload, token);
    } catch (error) {
      console.error("Error creating delivery:", error);
      throw error;
    }
  }
  if (!currentDelivery) {
    try {
      const payload = {
        data: {
          sales_method: salgsmetode,
          seller: seller?.id,
        },
      };
      currentDelivery = await DeliveryMethods.createDelivery(payload, token);
      revalidatePath("/sellers/me");
    } catch (error) {
      console.error("Error creating delivery:", error);
      throw error;
    }
  }
  return seller;
};

export const updateDelivery = async (formdata: FormData) => {
  const deliveryType = formdata.get("deliveryType");
  const description = formdata.get("description");
  const user = await SellerMethods.getMe(token);
  const currentDelivery = user.seller?.deliveries?.find(
    (delivery) => delivery.inProgress,
  );
  if (!currentDelivery) {
    throw new Error("No delivery found");
  }

  const payload = {
    data: {
      delivery_type: deliveryType,
      description: description,
    },
  };

  try {
    const response = await DeliveryMethods.updateDelivery(
      payload,
      currentDelivery.id,
      token,
    );
    revalidatePath("/sellers/me");
    return response;
  } catch (error) {
    console.error("Error creating delivery:", error);
    throw error;
  }
};

export const relateDeliveryProductsToSeller = async ({
  deliveryId,
  sellerId,
}: any) => {
  try {
    const response = await SellerMethods.relateDeliveryProductsToSeller(
      deliveryId,
      sellerId,
      token,
    );
    revalidatePath("/sellers/me");
    return response;
  } catch (error) {
    console.error("Error creating delivery:", error);
    throw error;
  }
};

export const updateBankAccountNumber = async (formdata: FormData) => {
  const bankAccountNumber = formdata.get("bankAccountNumber");
  console.log(bankAccountNumber);
  const user = await UserMethods.getMe(token);
  const payload = {
    bankAccountNumber: bankAccountNumber,
  };
  try {
    console.log(user);
    const response = await UserMethods.put(
      payload,
      user.id,
      process.env.STRAPI_ACCESS_TOKEN,
    );
    revalidatePath("/users/me?populate=*");
    return response;
  } catch (error) {
    console.error("Error creating delivery:", error);
    throw error;
  }
};
