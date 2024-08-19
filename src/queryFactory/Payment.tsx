import { queryOptions } from "@tanstack/react-query";
import { getData, postData, postPublicData } from "./Utils";
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

export const PaymentMethods = {
  post: async (data: any) => {
    return postPublicData(data, "/payments");
  },
  getSubscriptionPaymentLink: async (token: any, planId: number) => {
    return getData(`/payments/subscription?planId=${planId}`, token);
  },
};
