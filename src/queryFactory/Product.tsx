import { queryOptions } from "@tanstack/react-query";
import { Product, ProductBackend, ProductsPagination } from "@/utils/types";
import {
  deleteData,
  getData,
  getProductsFiltered,
  getProductsFilteredByViews,
  getPublicData,
  postData,
  postPublicEmptyData,
  putData,
} from "./Utils";

export const ProductsMethods = {
  getById: async (id: any): Promise<Product> => {
    return getPublicData(`/products/${id}?populate=*`);
  },
  getFiltered: async (query: string): Promise<ProductsPagination> => {
    return getProductsFiltered(query);
  },
  getFilteredByViews: async (): Promise<ProductsPagination> => {
    return getProductsFilteredByViews();
  },
  put: async (id: string, data: any, token: any): Promise<Product> => {
    return putData(data, `/products/${id}`, token);
  },
  getByUserId: async (id: any, pageSize?: number): Promise<Product[]> => {
    let page = 200;
    if (pageSize) {
      page = pageSize;
    }
    return getPublicData(
      `/products?populate=*&sort=createdAt:desc&filters[sold][$eq]=false&filters[active][$eq]=true&filters[user][id][$eq]=${id}&pagination[page]=1&pagination[pageSize]=${page}`,
    );
  },
  getBySellerId: async (id: any, pageSize?: number): Promise<Product[]> => {
    let page = 200;
    if (pageSize) {
      page = pageSize;
    }
    return getPublicData(
      `/products?populate=*&sort=createdAt:desc&filters[sold][$eq]=false&filters[active][$eq]=true&filters[seller][id][$eq]=${id}&pagination[page]=1&pagination[pageSize]=${page}`,
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
  incrementProductView: async (id: number) => {
    return postPublicEmptyData(`/product/view/${id}`);
  },
  incrementProductAddedToCart: async (id: number) => {
    return postPublicEmptyData(`/product/addToCart/${id}`);
  },
  adminGetAllProducts: async (
    token: any,
    page: number,
    pagesize: number,
  ): Promise<Product[]> => {
    return getData(
      `/products?pagination[page]=${page}&pagination[pageSize]=${pagesize}&populate=size&populate=image&filters[sold][$eq]=false`,
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
  searchParamsTest: (query: string) =>
    queryOptions({
      queryKey: [...ProductQueries.all(), "test", query],
      queryFn: () => ProductsMethods.getFiltered(query),
    }),
  filteredViews: (query: string) =>
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
  sellerId: (id: string) =>
    queryOptions({
      queryKey: [...ProductQueries.all(), "seller", id],
      queryFn: () => ProductsMethods.getBySellerId(id),
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
