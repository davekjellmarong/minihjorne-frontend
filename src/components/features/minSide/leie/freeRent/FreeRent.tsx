"use client";
import { AuthQueries } from "@/queryFactory/Auth";
import { UserQueries } from "@/queryFactory/User";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import Form from "./Form";
import { activeUserProfile } from "@/utils/ServerActions";
import FreeRentActivated from "./FreeRentActivated";

const FreeRent = () => {
  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: user } = useSuspenseQuery(UserQueries.me(jwt));

  const { mutate: updateUser } = useMutation({
    mutationFn: activeUserProfile,
    onSuccess: () => {
      toast.success("Gratis leie aktivert!");
    },
  });

  if (user.active) {
    return <FreeRentActivated />;
  }
  return (
    <div className="flex w-full items-center justify-center px-4 py-6">
      <div className="flex flex-col items-center gap-8">
        <div className="px-6 text-center text-3xl font-bold text-brand-400">
          Gratis leie til 1. oktober!
        </div>
        <Image
          src="/celebration.svg"
          alt="celebration"
          height={235}
          width={300}
          className="rounded-lg object-cover "
        />
        <p>
          Som en oppstartskampanje tilbyr vi gratis leie av plass på Minihjørne
          fram til 1. oktober. Dette betyr at du kan registrere og selge dine
          barneklær uten å betale leiepris frem til oktober!{" "}
          <Link href="/om-oss/priser" className="text-sm">
            (Vi tar kun en{" "}
            <span className="text-blue-500"> provisjon på 20%).</span> fra den
            totale salgssummen din
          </Link>
        </p>
        <p>
          Etter du har fått din gratis leie og har registrert dine produkter,
          kan du levere dine klær til oss. Når 1 oktober kommer kan du enten
          hente dine klær og få betalt for solgte produkter, eller du kan utvide
          leieperioden for 175kr i uken.{" "}
        </p>
        <form action={updateUser}>
          <Form />
        </form>
      </div>
    </div>
  );
};

export default FreeRent;
