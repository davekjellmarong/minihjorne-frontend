"use client";
import { UserMethods } from "@/utils/utils";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useCookies } from "react-cookie";

const useAutoLogIn = () => {
  const queryClient = useQueryClient();
  const [cookies] = useCookies(["Token"]);
  const me = useQuery({
    queryKey: ["me"],
    queryFn: () => UserMethods.getMe(cookies.Token),
    enabled: !!cookies?.Token,
  });
  const user = useQuery({
    queryKey: ["login-user"],
  });
  if (user?.data) return;
  if (me?.data && cookies.Token) {
    queryClient.setQueryData(["login-user"], me.data);
    queryClient.setQueryData(["jwt"], cookies.Token);
  }
};

export default useAutoLogIn;
