"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/UI/label";
import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import { updateBankAccountNumber } from "@/serverActions/ServerActions";
import { UserBackend } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
interface FormProps {
  user: UserBackend;
  initialBankAccountNumber: string | undefined;
}
const Form = ({ user, initialBankAccountNumber }: FormProps) => {
  const { mutate, isPending } = useMutation({
    mutationFn: updateBankAccountNumber,
    onSuccess: () => {
      toast.success("Ditt kontonummer er lagret");
      setIsEditMode(false);
    },
    onError: (error) => {
      const message = JSON.parse(error.message);
      toast.error(message[0].message);
    },
  });
  const [bankAccountNumber, setBankAccountNumber] = useState(
    initialBankAccountNumber || "",
  );
  const [confirmBankAccount, setConfirmBankAccount] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  useEffect(() => {
    if (bankAccountNumber != confirmBankAccount) {
      setErrorMessage("Bankkontonummer matcher ikke");
    } else {
      setErrorMessage(null);
    }
  }, [bankAccountNumber, confirmBankAccount]);

  return (
    <>
      {initialBankAccountNumber && !isEditMode && (
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-500">Ditt lagrede bankkonto nr:</p>
          <p className="text-lg text-gray-700">{initialBankAccountNumber}</p>
          <Button
            className="bg-brand-400"
            onClick={() => {
              setIsEditMode(true);
            }}
          >
            Endre kontonummer
          </Button>
        </div>
      )}
      {isEditMode && (
        <form className="space-y-4" action={mutate}>
          <LoadingOverlay loading={isPending} />
          <div>
            <Label htmlFor="bankAccountNumber">Bankkonto</Label>
            <Input
              id="bankAccountNumber"
              name="bankAccountNumber"
              type="text"
              value={bankAccountNumber}
              onChange={(e) => setBankAccountNumber(e.target.value)}
              placeholder="Skriv inn ditt bankkontonummer"
              required
              min={6}
            />
          </div>
          <div>
            <Label htmlFor="confirmBankAccount">Bekreft Bankkonto Nummer</Label>
            <Input
              id="confirmBankAccount"
              type="text"
              value={confirmBankAccount}
              onChange={(e) => setConfirmBankAccount(e.target.value)}
              placeholder="Bekreft ditt bankkontonummer"
              required
              min={6}
            />
          </div>
          {errorMessage && (
            <div className="text-sm text-red-500">{errorMessage}</div>
          )}
          <Button
            disabled={errorMessage !== null}
            type="submit"
            className="w-full bg-[#7d6adf] text-white hover:bg-[#6553c8]"
          >
            Save
          </Button>
        </form>
      )}
    </>
  );
};

export default Form;
