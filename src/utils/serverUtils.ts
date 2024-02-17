export const fetchProductsFiltered = async (query: string) => {
  let data;
  if (query?.length > 0) {
    data = await fetchPublicData(
      "/products?populate=*&filters[sold][$eq]=false" + query
    );
  } else {
    data = await fetchPublicData(
      "/products?populate=*&filters[sold][$eq]=false"
    );
  }
  return data;
};

export const fetchPublicData = async (query: string) => {
  try {
    const url = apiUrl + query;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const ServerProductMethods = {
  getById: async (id: any) => {
    return fetchPublicData(`/products/${id}?populate=*`);
  },
};
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
