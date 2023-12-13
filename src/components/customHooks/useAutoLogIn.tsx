"use client";
import { UserMethods } from "@/utils/utils";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useCookies } from "react-cookie";

const useAutoLogIn = () => {
  const queryClient = useQueryClient();
  const [cookies] = useCookies(["Token"]);
  console.log(cookies.Token);

  const me = useQuery({
    queryKey: ["me"],
    queryFn: () => UserMethods.getMe(cookies.Token),
    enabled: !!cookies?.Token,
  });
  if (me?.data && cookies.Token) {
    queryClient.setQueryData(["login-user"], me.data);
    queryClient.setQueryData(["jwt"], cookies.Token);
  }
};

export default useAutoLogIn;
