import { postAuthRequest } from "@/utils/utils";
import { queryOptions } from "@tanstack/react-query";
import { getAuthData } from "./Utils";
import { Order } from "@/utils/types";

export const OrderQueries = {
  all: () => ["orders"],
  detail: (id: string | number, token: any) =>
    queryOptions({
      queryKey: [...OrderQueries.all(), id],
      queryFn: () => OrderMethods.getById(id, token),
    }),
  myOrders: (userId: string | number, token: any) =>
    queryOptions({
      queryKey: [...OrderQueries.all(), "user", userId],
      queryFn: () => OrderMethods.getByUserId(userId, token),
    }),
  createOrder: (data: any, token: any) =>
    queryOptions({
      queryKey: [...OrderQueries.all(), "create"],
      queryFn: () => OrderMethods.post(data, token),
    }),
};

const OrderMethods = {
  post: async (data: any, token: any) => {
    return postAuthRequest(data, "/orders", token);
  },
  getByUserId: async (id: any, token: any): Promise<Order[]> => {
    return getAuthData(
      `/orders?populate=*&filters[user][id][$eq]=${id}`,
      token,
    );
  },
  getById: async (id: any, token: any) => {
    return getAuthData(`/orders/${id}?populate=*`, token);
  },
};
