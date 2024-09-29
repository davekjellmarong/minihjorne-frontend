import { queryOptions } from "@tanstack/react-query";
import { Seller, SellerGetMe } from "@/utils/types";
import {
  getDataFetch,
  getPublicData,
  postData,
  postPublicEmptyData,
  putDataFetch,
} from "./Utils";

export const SellerQueries = {
  all: () => ["Sellers"],
  allSellers: () =>
    queryOptions({
      queryKey: SellerQueries.all(),
      queryFn: () => SellerMethods.getAll(),
    }),
  detail: (id: any) =>
    queryOptions({
      queryKey: [...SellerQueries.all(), id],
      queryFn: () => SellerMethods.getById(id),
      throwOnError: true,
    }),
  me: (token: any) =>
    queryOptions({
      queryKey: [...SellerQueries.all(), "me"],
      queryFn: () => SellerMethods.getMe(token),
      throwOnError: true,
    }),
};

export const SellerMethods = {
  getAll: async (): Promise<Seller[]> => {
    return getPublicData(
      "/sellers?filters[isActive][$eq]=true&populate[products][populate][0]=size&populate[products][populate][1]=image&populate[products][filters][sold][$eq]=false",
    );
  },
  getById: async (id: any): Promise<Seller> => {
    return getPublicData(`/sellers/${id}`);
  },
  getMe: async (token: any): Promise<SellerGetMe> => {
    return getDataFetch("/sellers/me", token);
  },
  createSeller: async (data: any, token: any) => {
    return postData(data, "/sellers", token);
  },
  putFetch: async (data: any, id: any, token: any) => {
    return putDataFetch(data, `/sellers/${id}`, token);
  },
  incrementSellerView: async (id: number) => {
    return postPublicEmptyData(`/seller/view/${id}`);
  },
  relateDeliveryProductsToSeller: async (
    deliveryId: any,
    sellerId: any,
    token: any,
  ) => {
    return postData({}, `/delivery/${deliveryId}/relate/${sellerId}`, token);
  },
};
