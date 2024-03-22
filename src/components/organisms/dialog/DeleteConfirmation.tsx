import React from "react";
import Button from "../../atoms/Button";

interface DeleteConfirmationProps {
  setModal: (value: boolean) => void;
  handleYes: () => void;
}

export const DeleteConfirmation = ({
  setModal,
  handleYes,
}: DeleteConfirmationProps) => {
  return (
    <div className="flex h-full flex-col justify-center gap-6 text-center">
      <p className=" text-gray-600">
        Du holder på å permanent slette dette produktet.
      </p>
      <h3 className="text-xl font-bold">Er du sikker?</h3>
      <div className="flex justify-center gap-10">
        <Button type="outline" onClick={() => setModal(false)}>
          Avbryt
        </Button>
        <Button
          type="danger"
          icon="trash"
          onClick={() => {
            handleYes();
            setModal(false);
          }}
        >
          Slett
        </Button>
      </div>
    </div>
  );
};
