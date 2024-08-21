import { queryOptions } from "@tanstack/react-query";
import { Product, ProductBackend, ProductsPagination } from "@/utils/types";
import {
  deleteData,
  getData,
  getProductsFiltered,
  getPublicData,
  postData,
  postPublicData,
  putData,
  putPublicData,
} from "./Utils";

export const ProductsMethods = {
  getById: async (id: any): Promise<Product> => {
    return getPublicData(`/products/${id}?populate=*`);
  },
  getFiltered: async (query: string): Promise<ProductsPagination> => {
    return getProductsFiltered(query);
  },
  put: async (id: string, data: any, token: any): Promise<Product> => {
    return putData(data, `/products/${id}`, token);
  },
  getByUserId: async (id: any): Promise<Product[]> => {
    return getPublicData(
      `/products?populate=*&sort=createdAt:desc&filters[sold][$eq]=false&filters[active][$eq]=true&filters[user][id][$eq]=${id}&pagination[page]=1&pagination[pageSize]=200`,
    );
  },
  getAllMyProducts: async (token: any): Promise<ProductBackend[]> => {
    return getData("/products/me/all", token);
  },
  delete: async (id: string, token: any): Promise<Product> => {
    return deleteData(`/products/${id}`, token);
  },
  getByOrderId: async (id: any, token: any): Promise<Product[]> => {
    return getData(`/products?populate=*&filters[order][id][$eq]=${id}`, token);
  },
  post: async (data: any, token: any) => {
    return postData(data, "/products", token);
  },
  incrementProductView: async (data: any, id: number) => {
    return putPublicData(data, `/products/${id}`);
  },
};

export const ProductQueries = {
  all: () => ["products"],
  detail: (id: string) =>
    queryOptions({
      queryKey: [...ProductQueries.all(), id],
      queryFn: () => ProductsMethods.getById(id),
    }),
  searchParamsTest: (query: string) =>
    queryOptions({
      queryKey: [...ProductQueries.all(), "test", query],
      queryFn: () => ProductsMethods.getFiltered(query),
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
