import { queryOptions } from "@tanstack/react-query";

import { Product, ProductBackend } from "@/utils/types";
import {
  deleteData,
  getAuthData,
  getProductsFiltered,
  getPublicData,
  putData,
} from "./Utils";

export const ProductsMethods = {
  getById: async (id: any): Promise<Product> => {
    return getPublicData(`/products/${id}?populate=*`);
  },
  getFiltered: async (query: string): Promise<ProductBackend[]> => {
    return getProductsFiltered(query);
  },
  put: async (id: string, data: any, token: any): Promise<Product> => {
    return putData(`/products/${id}`, token, data);
  },
  getAllMyProducts: async (token: any): Promise<ProductBackend[]> => {
    return getAuthData("/products/me/all", token);
  },
  delete: async (id: string, token: any): Promise<Product> => {
    return deleteData(`/products/${id}`, token);
  },
};

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
  me_all: (jwt: any) =>
    queryOptions({
      queryKey: [...ProductQueries.all(), "me", "all"],
      queryFn: () => ProductsMethods.getAllMyProducts(jwt),
    }),
};
