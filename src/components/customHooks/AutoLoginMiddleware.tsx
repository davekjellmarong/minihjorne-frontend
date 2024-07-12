import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import React from "react";
import axios from "axios";
import { redirect } from "next/navigation";
import { NextURL } from "next/dist/server/web/next-url";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import { AuthQueries } from "@/reactQuery/AuthQueryFactory";

interface AutoLoginMiddlewareProps {
  children: React.ReactNode;
}
const AutoLoginMiddleware = async ({ children }: AutoLoginMiddlewareProps) => {
  const cookieStore: any = cookies();
  const token = cookieStore.get("Token");
  if (!token || token?.value?.length === 0) {
    console.log("No token autologin middleware");
    return <>{children}</>;
  }

  const url = process.env.NEXT_PUBLIC_API_URL + "/users/me?populate=*";

  const headers = {
    Authorization: `Bearer ${token.value}`,
  };
  const response = await axios.get(url, { headers }).catch((error) => {
    console.error("Error fetching data:", error.response.data);
    return error;
  });

  if (response instanceof Error) {
    // redirect("/auth?redirect=/min-side/");
    return <>{children}</>;
  }
  const queryClient = new QueryClient();
  queryClient.setQueryData(UserQueries.me(token).queryKey, response.data);
  queryClient.setQueryData(AuthQueries.jwt().queryKey, token.value);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default AutoLoginMiddleware;
