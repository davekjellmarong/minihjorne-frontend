import { Product, ProductBackend } from "@/utils/types";

export const getProductsStats = (products: ProductBackend[]) => {
  const productsSold = products.filter((product) => product.sold);

  const revenue = products.reduce((acc, product) => {
    if (product.sold) {
      return acc + product.price;
    }
    return acc;
  }, 0);
  const remainingRevenue = products.reduce((acc, product) => {
    if (!product.sold) {
      return acc + product.price;
    }
    return acc;
  }, 0);
  const possibleRevenue = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
  const remainingProducts = products.filter((product) => !product.sold);
  const productsSoldPercentage = (productsSold.length / products.length) * 100;
  const revenuePercentage = (revenue / possibleRevenue) * 100;
  return {
    productsSold: productsSold,
    revenue: revenue,
    remainingRevenue: remainingRevenue,
    possibleRevenue: possibleRevenue,
    remainingProducts: remainingProducts,
    productsSoldPercentage: productsSoldPercentage,
    revenuePercentage: revenuePercentage,
  };
};
