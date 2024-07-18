"use client";
import Dialog from "@/components/common/dialog/Dialog";
import { CheckCircle } from "@phosphor-icons/react";
import React from "react";

interface SuccessDialogProps {
  paymentSuccess: boolean;
  setPaymentSuccess: (paymentSuccess: boolean) => void;
}
const SuccessDialog = ({
  paymentSuccess,
  setPaymentSuccess,
}: SuccessDialogProps) => {
  return (
    <>
      <Dialog
        open={paymentSuccess}
        setOpen={setPaymentSuccess}
        height="h-[300px]"
      >
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <CheckCircle className="text-green-500" size={100} />
          <h1 className="text-2xl">Betalingen var vellykket</h1>
          <p className="mx-6 text-center">
            Du har nå et aktivt abbonement. Din leie-periode starter etter du
            har levert klærne dine hos oss
          </p>
        </div>
      </Dialog>
    </>
  );
};

export default SuccessDialog;
