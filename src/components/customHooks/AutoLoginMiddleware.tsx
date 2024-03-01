import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import React from "react";
import axios from "axios";
import { apiUrl } from "@/utils/constants";
interface AutoLoginMiddlewareProps {
  children: React.ReactNode;
}
const AutoLoginMiddleware = async ({ children }: AutoLoginMiddlewareProps) => {
  console.log("AutoLoginMiddleware starts");
  const cookieStore: any = cookies();
  console.log(cookieStore, "cookieStore");
  const token = cookieStore.get("Token");
  console.log(token, "token");
  if (!token) return <>{children}</>;

  const url = process.env.NEXT_PUBLIC_API_URL + "/users/me?populate=*";
  console.log(
    process.env.NEXT_PUBLIC_API_URL,
    "process.env.NEXT_PUBLIC_API_URL"
  );
  console.log(apiUrl, "apiUrl");

  const headers = {
    Authorization: `Bearer ${token.value}`,
  };
  const response = await axios.get(url, { headers });
  const queryClient = new QueryClient();
  queryClient.setQueryData(["login-user"], response.data);
  queryClient.setQueryData(["jwt"], token.value);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children};
    </HydrationBoundary>
  );
};

export default AutoLoginMiddleware;
