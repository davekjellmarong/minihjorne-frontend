"use server";

import { UserMethods } from "@/queryFactory/User";
import { cookies } from "next/headers";
import { emailSchema, resetPasswordSchema } from "@/zod/Zod";
import { z } from "zod";
import { PlanEnum, SalgsMetode, UserStatus } from "@/utils/Enums";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ProductsMethods } from "@/queryFactory/Product";

const cookieStore: any = cookies();
const token = cookieStore.get("Token").value;

export const activeUserProfile = async (cool: any) => {
  const user = await UserMethods.getMe(token);
  const payload = {
    active: true,
    paid: true,
    activeUntil: new Date("2024-10-01T00:00:00Z").toISOString(),
    activatedDate: new Date(),
    plan: PlanEnum.Free_July_To_October,
  };
  const response = await UserMethods.put(
    payload,
    user.id,
    process.env.UPDATE_USER_TOKEN,
  );
  return response;
};

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
  const data = {
    header: header,
    description: description,
  };
  const user = await UserMethods.getMe(token);
  const response = await UserMethods.putFetch(data, user.id, token);
  if (response.id === user.id) {
    revalidatePath("/users/me?populate=*");
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

export const incrementUserViews = async (userId: number) => {
  const isBotCookie: any = cookies().get("isBot")?.value;
  if (isBotCookie === "false") {
    await UserMethods.incrementUserView(userId);
    return "User view incremented";
  }
  return "Bot detected";
};

export const activateSalgsMetodeAndCreateDelivery = async (
  formdata: FormData,
) => {
  const salgsmetode = formdata.get("salgsmetode");
  const user = await UserMethods.getMe(token);
  let currentDelivery = user.deliveries.find((delivery) => delivery.inProgress);
  if (!currentDelivery) {
    try {
      const payload = {
        data: {
          sales_method: salgsmetode,
          user: user.id,
        },
      };
      currentDelivery = await UserMethods.createDelivery(payload, token);
      console.log(currentDelivery);
      // revalidatePath("/users/me?populate=*");
    } catch (error) {
      console.error("Error creating delivery:", error);
      throw error;
    }
  }
  const payload = {
    user_status:
      salgsmetode === String(SalgsMetode.Selvregistrering)
        ? UserStatus.Selvregistrering
        : UserStatus.FullService,
  };
  const response = await UserMethods.putFetch(
    payload,
    user.id,
    process.env.UPDATE_USER_TOKEN,
  );
  if (response.id === user.id) {
    revalidatePath("/users/me?populate=*");
  } else {
    throw new Error("Error updating user status");
  }
  return response;
};

export const updateDelivery = async (formdata: FormData) => {
  const deliveryType = formdata.get("deliveryType");
  const description = formdata.get("description");
  const user = await UserMethods.getMe(token);
  const currentDelivery = user.deliveries.find(
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
    const response = await UserMethods.updateDelivery(
      payload,
      currentDelivery.id,
      token,
    );
    revalidatePath("/users/me?populate=*");
    return response;
  } catch (error) {
    console.error("Error creating delivery:", error);
    throw error;
  }
};

export const relateDeliveryProductsToUser = async ({
  deliveryId,
  userId,
}: any) => {
  try {
    const response = await UserMethods.relateDeliveryProductsToUser(
      deliveryId,
      userId,
      token,
    );
    revalidatePath("/users/me?populate=*");
    return response;
  } catch (error) {
    console.error("Error creating delivery:", error);
    throw error;
  }
};
