import { queryOptions } from "@tanstack/react-query";

import { apiUrl, fetchPublicData } from "@/utils/serverUtils";
import { Product, ProductBackend } from "@/utils/types";

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

export const fetchProductsFiltered = async (query: string) => {
  const baseUrl = apiUrl + "/products?populate=*&filters[sold][$eq]=false";
  const url = query?.length > 0 ? baseUrl + query : baseUrl;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const ProductsMethods = {
  getById: async (id: any): Promise<Product> => {
    return fetchPublicData(`/products/${id}?populate=*`);
  },
  getFiltered: async (query: string): Promise<ProductBackend[]> => {
    return fetchProductsFiltered(query);
  },
};
