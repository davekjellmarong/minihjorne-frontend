"use client";
import React, { useState } from "react";
import Button from "@/components/common/buttons/Button";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { resetPassword } from "@/utils/ServerActions";

const ResetPasswordPage: React.FC = () => {
  const searchParams = useSearchParams();
  const code: any = searchParams.get("code");
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      router.push("/auth");
      toast.success("Ditt passord er nå endret");
    },
    onError: (error: z.ZodError) => {
      const message = JSON.parse(error.message);
      toast.error(message[0].message);
    },
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center px-4">
      <h1 className="mb-6 text-3xl font-bold">Tilbakestill Passord</h1>
      <LoadingOverlay loading={isPending} />
      <form
        className="w-full max-w-md rounded bg-white px-8 pb-8 pt-6"
        action={mutate}
      >
        <div className="mb-6">
          <input type="hidden" name="code" value={code} />
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="newPassword"
          >
            Nytt Passord
          </label>
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            id="newPassword"
            type="password"
            name="password"
            placeholder="Skriv inn nytt passord"
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="confirmPassword"
          >
            Bekreft Passord
          </label>
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            id="confirmPassword"
            type="password"
            name="passwordConfirmation"
            placeholder="Bekreft nytt passord"
          />
        </div>
        <div className="flex items-center justify-center">
          <Button submit>Tilbakestill Passord</Button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
