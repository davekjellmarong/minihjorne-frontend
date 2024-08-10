"use client";
import Button from "@/components/common/buttons/Button";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import React from "react";
import { useFormStatus } from "react-dom";

const GlemtPassordForm = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <LoadingOverlay loading={pending} />
      <input type="text" required />
      <Button submit disabled={pending}>
        Send meg mail
      </Button>
    </>
  );
};

export default GlemtPassordForm;
