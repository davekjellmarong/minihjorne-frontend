import { queryOptions } from "@tanstack/react-query";

import { apiUrl } from "@/utils/serverUtils";
import { Product, ProductBackend } from "@/utils/types";
import { getAuthData, getProductsFiltered, getPublicData } from "./Utils";

export const ProductQueries = {
  all: () => ["products"],
  detail: (id: string) =>
    queryOptions({
      queryKey: [...ProductQueries.all(), id],
      queryFn: () => ProductsMethods.getById(id),
    }),
  filtered: (query: string) =>
    queryOptions({
      queryKey: [...ProductQueries.all(), query],
      queryFn: () => ProductsMethods.getFiltered(query),
    }),
};

export const ProductsMethods = {
  getById: async (id: any): Promise<Product> => {
    return getPublicData(`/products/${id}?populate=*`);
  },
  getFiltered: async (query: string): Promise<ProductBackend[]> => {
    return getProductsFiltered(query);
  },
  //   getMyById: async (id: any): Promise<Product> => {
  //     return getAuthData(`/products/${id}?populate=*`);
  //   },
};
