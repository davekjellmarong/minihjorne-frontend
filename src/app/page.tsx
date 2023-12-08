"use client";
import Login from "@/components/login/Login";
import Register from "@/components/register/Register";
import { fetchPublicData } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
  // const data = fetchPublicData("/products");
  // console.log(data);
  const data = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchPublicData("/products"),
  });
  console.log(data);
  return <div>This is the home page</div>;
}
