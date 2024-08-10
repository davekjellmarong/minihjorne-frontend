"use client";
import React, { useState } from "react";
import Button from "@/components/common/buttons/Button";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const ResetPasswordPage: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const code: any = searchParams.get("code");
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Legg til logikk for å tilbakestille passordet her

    setNewPassword("");
    setConfirmPassword("");
    setIsSubmitting(false);
    toast.success("Passordet ditt er tilbakestilt!");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center px-4">
      <h1 className="mb-6 text-3xl font-bold">Tilbakestill Passord</h1>
      <LoadingOverlay loading={isSubmitting} />
      <form
        className="w-full max-w-md rounded bg-white px-8 pb-8 pt-6"
        onSubmit={handleSubmit}
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
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="newPassword"
            type="password"
            placeholder="Skriv inn nytt passord"
            value={newPassword}
            onChange={handleNewPasswordChange}
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
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="confirmPassword"
            type="password"
            placeholder="Bekreft nytt passord"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
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
