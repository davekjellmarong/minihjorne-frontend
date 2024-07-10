import React, { Suspense } from "react";
import Breadcrumb from "../../components/organisms/minSide/Breadcrumb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Loading from "@/components/molecules/loading/Loading";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { UserQueries } from "@/reactQuery/UserQueryFactory";

interface LayoutProps {
  children: any;
}
const Layout = async ({ children }: LayoutProps) => {
  const queryClient = new QueryClient();
  const cookieStore: any = cookies();

  const token = cookieStore.get("Token");

  if (!token || token?.value?.length === 0) {
    console.log("No token layout");
    redirect("/auth?redirect=/min-side/");
  }
  await queryClient.prefetchQuery(UserQueries.me(token.value));

  return (
    <>
      <Breadcrumb />
      <div className="relative">
        <div className="absolute left-0 top-0 z-10 hidden">
          <div className="block">
            <button className="flex items-center rounded px-3 py-2 ">
              <svg
                className={`} h-8 w-8 fill-current`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="">
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </HydrationBoundary>
        </div>
      </div>
    </>
  );
};

export default Layout;
