import { queryOptions } from "@tanstack/react-query";
import {
  AllFilters,
  Category,
  CategoryType,
  Color,
  Defect,
  Material,
  Sex,
  Size,
  State,
  Tag,
} from "@/utils/types";
import { getPublicData, getPublicDataFetch, getRouteHandler } from "./Utils";

export const FilterQueries = {
  all: () => ["filters"],
  colors: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "colors"],
      queryFn: () => FilterMethods.getColors(),
      staleTime: Infinity,
    }),
  materials: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "materials"],
      queryFn: () => FilterMethods.getMaterials(),
      staleTime: Infinity,
    }),
  sizes: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "sizes"],
      queryFn: () => FilterMethods.getSizes(),
      staleTime: Infinity,
    }),
  tags: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "tags"],
      queryFn: () => FilterMethods.getTags(),
      staleTime: Infinity,
    }),
  categories: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "categories"],
      queryFn: () => FilterMethods.getCategories(),
      staleTime: Infinity,
    }),
  categoryTypes: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "categoryTypes"],
      queryFn: () => FilterMethods.getCategoryTypes(),
      staleTime: Infinity,
    }),
  sexes: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "sexes"],
      queryFn: () => FilterMethods.getSexes(),
      staleTime: Infinity,
    }),
  defects: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "defects"],
      queryFn: () => FilterMethods.getDefects(),
      staleTime: Infinity,
    }),
  states: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "states"],
      queryFn: () => FilterMethods.getStates(),
      staleTime: Infinity,
    }),
};
export const FilterQueriesCached = {
  allFilter: () =>
    queryOptions({
      queryKey: ["filters", "all"],
      queryFn: () => FilterMethodsCached.getAll(),
      staleTime: Infinity,
    }),
};
export const FilterMethods = {
  getColors: async (): Promise<Color[]> => {
    return getPublicData("/colors");
  },
  getMaterials: async (): Promise<Material[]> => {
    return getPublicData("/materials");
  },
  getSizes: async (): Promise<Size[]> => {
    return getPublicData("/sizes");
  },
  getTags: async (): Promise<Tag[]> => {
    return getPublicData("/tags");
  },
  getCategories: async (): Promise<Category[]> => {
    return getPublicData("/categories?populate=*");
  },
  getSexes: async (): Promise<Sex[]> => {
    return getPublicData("/sexes");
  },
  getDefects: async (): Promise<Defect[]> => {
    return getPublicData("/defects");
  },
  getCategoryTypes: async (): Promise<CategoryType[]> => {
    return getPublicData("/category-types?populate=*");
  },
  getStates: async (): Promise<State[]> => {
    return getPublicData("/states");
  },
};
export const FilterMethodsCached = {
  getAll: async (): Promise<AllFilters> => {
    return getRouteHandler("/api/filters");
  },
  getColors: async (): Promise<Color[]> => {
    return getPublicDataFetch("/colors");
  },
  getMaterials: async (): Promise<Material[]> => {
    return getPublicDataFetch("/materials");
  },
  getSizes: async (): Promise<Size[]> => {
    return getPublicDataFetch("/sizes");
  },
  getTags: async (): Promise<Tag[]> => {
    return getPublicDataFetch("/tags");
  },
  getCategories: async (): Promise<Category[]> => {
    return getPublicDataFetch("/categories?populate=*");
  },
  getSexes: async (): Promise<Sex[]> => {
    return getPublicDataFetch("/sexes");
  },
  getDefects: async (): Promise<Defect[]> => {
    return getPublicDataFetch("/defects");
  },
  getCategoryTypes: async (): Promise<CategoryType[]> => {
    return getPublicDataFetch("/category-types?populate=*");
  },
  getStates: async (): Promise<State[]> => {
    return getPublicDataFetch("/states");
  },
};
