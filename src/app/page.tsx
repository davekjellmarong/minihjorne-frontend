"use client";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import Login from "@/components/login/Login";
import Register from "@/components/register/Register";
import { UserMethods, fetchPublicData } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
  useAutoLogIn();

  return <div>This is the home page</div>;
}
