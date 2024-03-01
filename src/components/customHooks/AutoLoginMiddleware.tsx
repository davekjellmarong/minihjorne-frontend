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
  const cookieStore: any = cookies();
  const token = cookieStore.get("Token");
  console.log(token);
  if (!token) return <>{children}</>;
  console.log("AutoLoginMiddleware");
  const url = apiUrl + "/users/me?populate=*";

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
