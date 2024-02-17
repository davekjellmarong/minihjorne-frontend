import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Products from "./PageConsumer";
import { fetchProducts, fetchPublicData } from "@/utils/utils";
import { apiUrl } from "@/utils/constants";

export default async function ProductsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: () => {
      const url = apiUrl + "/products";
      fetch(url).then((res) => {
        console.log(res);
        return res;
      });
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Products />
    </HydrationBoundary>
  );
}
