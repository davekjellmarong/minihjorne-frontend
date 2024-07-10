import { postAuthRequest } from "@/utils/utils";
import { queryOptions } from "@tanstack/react-query";
import { getAuthData } from "./Utils";
import { Order } from "@/utils/types";

export const PaymentQueries = {
  all: () => ["payments"],
  subscriptionLink: (jwt: any, planId: number) =>
    queryOptions({
      queryKey: [PaymentQueries.all(), "subscriptionLink", planId],
      queryFn: () => {
        return PaymentMethods.getSubscriptionPaymentLink(jwt, planId);
      },
    }),
};

const PaymentMethods = {
  post: async (data: any, token: any) => {
    return postAuthRequest(data, "/payments", token);
  },
  getSubscriptionPaymentLink: async (token: any, planId: number) => {
    return getAuthData(`/payments/subscription?planId=${planId}`, token);
  },
};
