"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface UserData {
  username: string;
  id: number;
  email: string;
}
const MinSide = () => {
  const { data, isLoading } = useQuery<UserData>({ queryKey: ["user"] });
  if (!isLoading && data) {
    return <div>Velkommen, {data?.username}</div>;
  }
};

export default MinSide;
