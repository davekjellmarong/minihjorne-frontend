import { queryOptions } from "@tanstack/react-query";
import { Product, ProductBackend, ProductsPagination } from "@/utils/types";
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
  getFiltered: async (query: string): Promise<ProductsPagination> => {
    return getProductsFiltered(query);
  },
  put: async (id: string, data: any, token: any): Promise<Product> => {
    return putData(`/products/${id}`, token, data);
  },
  getByUserId: async (id: any): Promise<Product[]> => {
    return getPublicData(
      `/products?populate=*&sort=createdAt:desc&filters[sold][$eq]=false&filters[active][$eq]=true&filters[user][id][$eq]=${id}`,
    );
  },
  getAllMyProducts: async (token: any): Promise<ProductBackend[]> => {
    return getAuthData("/products/me/all", token);
  },
  delete: async (id: string, token: any): Promise<Product> => {
    return deleteData(`/products/${id}`, token);
  },
  getByOrderId: async (id: any, token: any): Promise<Product[]> => {
    return getAuthData(
      `/products?populate=*&filters[order][id][$eq]=${id}`,
      token,
    );
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
  userId: (id: string) =>
    queryOptions({
      queryKey: [...ProductQueries.all(), "user", id],
      queryFn: () => ProductsMethods.getByUserId(id),
    }),
  me_all: (jwt: any) =>
    queryOptions({
      queryKey: [...ProductQueries.all(), "me", "all"],
      queryFn: () => ProductsMethods.getAllMyProducts(jwt),
    }),
  orderId: (id: any, jwt: any) =>
    queryOptions({
      queryKey: [...ProductQueries.all(), "order", id],
      queryFn: () => ProductsMethods.getByOrderId(id, jwt),
    }),
};
