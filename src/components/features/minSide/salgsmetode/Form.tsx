"use client";
import Button from "@/components/common/buttons/Button";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import InfoColoredBox from "@/components/UI/common/InfoColoredBox";
import { activateSalgsMetode } from "@/serverActions/ServerActions";
import { UserStatus } from "@/utils/Enums";
import { UserBackend } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
interface FormProps {
  user: UserBackend;
}
const Form = ({ user }: FormProps) => {
  const [selectedOption, setSelectedOption] = useState(user.user_status.id);
  const [animateAway, setAnimateAway] = useState(false);
  const [animateChosen, setAnimateChosen] = useState(false);
  const [disableForm, setDisableForm] = useState(
    user.user_status.id != UserStatus.Member,
  );
  const { mutate, isPending } = useMutation({
    mutationFn: activateSalgsMetode,
    onSuccess: () => {
      setAnimateAway(true);
      setAnimateChosen(true);
      toast.success("Salgsmetode lagret!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleOptionChange = (e: any) => {
    setSelectedOption(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-6">
      <LoadingOverlay loading={isPending} />

      {disableForm ? (
        <>
          <InfoColoredBox title="Valgt Salgsmetode:" color="green">
            <p>
              {user.user_status.id === UserStatus.Selvregistrering
                ? "Selvregistrering: Du styrer salgsprosessen på egen hånd. 30% av salgsprisen går til Minihjørne."
                : "Full service pakke: Vi tar oss av alt. 60% av salgsprisen går til Minihjørne."}
            </p>
            <Link
              href={
                user.user_status.id === UserStatus.Selvregistrering
                  ? "/om-oss/selvregistrering"
                  : "/om-oss/full-service-pakke"
              }
              className="mt-2 inline-block text-brand-500 underline"
            >
              Les mer om din salgsmetode
            </Link>
          </InfoColoredBox>

          {/* <p className="mb-4 text-center text-red-500">
            Du har allerede valgt salgsmetoden{" "}
            {user.user_status.id === UserStatus.Selvregistrering
              ? "selvregistrering"
              : "full service pakke"} */}
          {/* todo - legg til endring av salgsmetode */}
          {/* . Vil du endre? */}
          {/* </p> */}
          {/* <Button onClick={() => setDisableForm(false)} type="outline">
            Ja, jeg vil endre
          </Button> */}
        </>
      ) : (
        <form action={mutate} className="w-full max-w-md space-y-6">
          <h1 className="mb-8 text-center text-2xl font-semibold">
            {animateChosen
              ? `Du har valgt ${selectedOption === UserStatus.FullService ? "full service pakke" : "selvregistrering"}`
              : "Velg Salgsmetode"}
          </h1>
          <div
            className={`flex flex-col items-center rounded-lg border border-gray-200 p-6 transition duration-700 ${
              selectedOption === UserStatus.Selvregistrering
                ? animateChosen
                  ? "translate-y-24 scale-110 transform bg-brand-200 shadow-lg"
                  : "bg-brand-200 shadow-lg"
                : animateAway
                  ? "translate-x-full transform opacity-0"
                  : ""
            }`}
          >
            <label className="mb-4 text-xl font-medium">Selvregistrering</label>
            <p className="mb-4 text-center text-gray-600">
              Registrer dine produkter selv og styr salgsprosessen på egen hånd.
              30% av salgsprisen går til Minihjørne.
            </p>
            <Link
              href="/om-oss/selvregistrering"
              type="button"
              className="mb-4 text-brand-500 underline"
            >
              Les mer om selvregistrering
            </Link>
            <input
              name="salgsmetode"
              type="checkbox"
              value={UserStatus.Selvregistrering}
              checked={selectedOption === UserStatus.Selvregistrering}
              onChange={handleOptionChange}
              className="size-7 rounded border-gray-300 bg-gray-100 text-brand-600 focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div
            className={`flex flex-col items-center rounded-lg border border-gray-200 p-6 transition duration-700 ${
              selectedOption === UserStatus.FullService
                ? animateChosen
                  ? "-translate-y-36 scale-110  transform bg-brand-200 shadow-lg"
                  : "bg-brand-200 shadow-lg"
                : animateAway
                  ? "translate-x-full transform opacity-0"
                  : ""
            }`}
          >
            <label className="mb-4 text-xl font-medium">
              Full service pakke
            </label>
            <p className="mb-4 text-center text-gray-600">
              La oss ta oss av alt - fra registrering til salg. 60% av
              salgsprisen går til Minihjørne.
            </p>
            <Link
              href="/om-oss/full-service-pakke"
              className="mb-4 text-brand-500 underline"
            >
              Les mer om full service pakke
            </Link>
            <input
              name="salgsmetode"
              type="checkbox"
              value={UserStatus.FullService}
              checked={selectedOption === UserStatus.FullService}
              onChange={handleOptionChange}
              className="size-7 rounded border-gray-300 bg-gray-100 text-brand-600 focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <button
            type="submit"
            disabled={!selectedOption}
            className="w-full rounded-lg bg-brand-500 px-4 py-2 text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Velg{" "}
            {selectedOption === UserStatus.Selvregistrering
              ? "selvregistrering"
              : "full service pakke"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
