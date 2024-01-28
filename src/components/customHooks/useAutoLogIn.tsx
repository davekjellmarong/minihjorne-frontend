"use client";
import { useStore } from "@/stateManagment/ZustandStore";
import { UserMethods } from "@/utils/utils";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

const useAutoLogIn = () => {
  const setUserZ = useStore((state) => state.setUserZ)
  const userZ = useStore((state) => state.user)

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

  console.log(user.data);
  console.log(me.data);
  useEffect(() => {
  if (user?.data) return;
  if (userZ) return;
  if (me?.data && cookies.Token) {
      setUserZ(me.data);
      queryClient.setQueryData(["login-user"], me.data);
      queryClient.setQueryData(["jwt"], cookies.Token);
  }
  }, [me, cookies, setUserZ, queryClient]);
};

export default useAutoLogIn;
