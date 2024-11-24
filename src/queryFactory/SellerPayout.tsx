import { create } from "domain";
import { getDataFetch, postData } from "./Utils";
import { Product } from "@/utils/types";

export const SellerPayoutQueries = {
  all: () => ["SellerPayouts"],
};

export const SellerPayoutMethods = {
  getBySellerId: async (id: any, token: any): Promise<any[]> => {
    return getDataFetch(
      `/seller-payouts?[populate]filters[seller][filters][id][$eq]=${id}`,
      token,
    );
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
};
