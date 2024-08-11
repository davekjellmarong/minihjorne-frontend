"use client";
import Button from "@/components/common/buttons/Button";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import { sendPasswordResetEmail } from "@/utils/ServerActions";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import { z } from "zod";

const GlemtPassordPage: React.FC = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: sendPasswordResetEmail,
    onSuccess: () => {
      toast.success("Mail med instruksjoner er sendt til deg");
    },
    onError: (error: z.ZodError) => {
      const message = JSON.parse(error.message);
      toast.error(message[0].message);
    },
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">Glemt Passord</h1>
      <LoadingOverlay loading={isPending} />
      <form action={mutate} className="flex flex-col items-center gap-4">
        <label
          htmlFor="email"
          className="m-2 block text-sm font-medium text-gray-900 "
        >
          Email
          <input
            type="email"
            required
            name="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          />
        </label>
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
