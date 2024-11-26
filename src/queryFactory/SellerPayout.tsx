import { create } from "domain";
import { getDataFetch, postData, putData } from "./Utils";
import { Product, SellerPayout } from "@/utils/types";
import { markPayoutAsPaid } from "@/serverActions/ServerActions";

export const SellerPayoutQueries = {
  all: () => ["SellerPayouts"],
};

export const SellerPayoutMethods = {
  getBySellerId: async (id: any, token: any): Promise<SellerPayout[]> => {
    return getDataFetch(
      `/seller-payouts?filters[seller][id][$eq]=${id}&populate[sales_method]=*&populate[products][populate]=*`,
      token,
    );
  },
  getById: async (id: any, token: any): Promise<SellerPayout> => {
    return getDataFetch(`/seller-payouts/${id}?populate=*`, token);
  },
  sendReceipt: async (id: any, token: any): Promise<any> => {
    return postData({}, `/seller-payouts/${id}/receipt`, token);
  },
  createSellerPayout: async (data: any, token: any): Promise<any> => {
    return postData(data, "/seller-payouts", token);
  },
  getProductsBySellerId: async (id: any, token: any): Promise<Product[]> => {
    return getDataFetch(
      `/products?populate=*&sort=createdAt:desc&filters[sold][$eq]=true&filters[seller][id][$eq]=${id}`,
      token,
    );
  },
  markPayoutAsPaid: async (data: any, id: any, token: any): Promise<any> => {
    return putData(data, `/seller-payouts/${id}`, token);
  },
};
