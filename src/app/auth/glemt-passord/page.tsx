"use client";
import Button from "@/components/common/buttons/Button";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import { sendPasswordResetEmail } from "@/utils/ServerActions";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

const GlemtPassordPage: React.FC = () => {
  const { mutate: resetPasswordMail, isPending } = useMutation({
    mutationFn: sendPasswordResetEmail,
    onSuccess: () => {
      toast.success("Gratis leie aktivert!");
    },
    onError: (error: any) => {
      // console.log(error);
      // console.log(JSON.parse(error.message));
      // console.log(JSON.parse(error.message[0].message));
      // toast.error(JSON.parse(error.message[0].message));
    },
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">Glemt Passord</h1>
      <LoadingOverlay loading={isPending} />
      <form action={resetPasswordMail} className="flex flex-col items-center">
        <input type="email" required name="email" />
        <Button submit>Send meg mail</Button>
      </form>
      <p className="mt-4 text-gray-500">
        Vi vil sende deg en e-post med instruksjoner for å tilbakestille
        passordet ditt.
      </p>
    </div>
  );
};

export default GlemtPassordPage;
