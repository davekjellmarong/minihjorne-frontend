import React, { Suspense } from "react";
import { cookies } from "next/headers";
import Loading from "@/components/molecules/loading/Loading";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { ProductQueries } from "@/reactQuery/ProductQueryFactory";

interface LayoutProps {
  children: any;
}
const Layout = async ({ children }: LayoutProps) => {
  const queryClient = new QueryClient();
  const cookieStore: any = cookies();

  const token = cookieStore.get("Token");
  await queryClient.prefetchQuery(ProductQueries.me_all(token.value));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </HydrationBoundary>
  );
};

export default Layout;
