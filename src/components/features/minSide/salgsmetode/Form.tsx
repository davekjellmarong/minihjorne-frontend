"use client";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";
import InfoColoredBox from "@/components/UI/common/InfoColoredBox";
import { SellerQueries } from "@/queryFactory/Seller";
import { UserQueries } from "@/queryFactory/User";
import { activateSalgsMetodeAndCreateDelivery } from "@/serverActions/ServerActions";
import { SalgsMetode, UserStatus } from "@/utils/Enums";
import { UserBackend } from "@/utils/types";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
interface FormProps {
  user: UserBackend;
}
const Form = () => {
  const queryClient = useQueryClient();
  const [selectedOption, setSelectedOption] = useState(0);
  const [animateAway, setAnimateAway] = useState(false);
  const [animateChosen, setAnimateChosen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
  const { mutate, isPending } = useMutation({
    mutationFn: activateSalgsMetodeAndCreateDelivery,
    onSuccess: () => {
      // setAnimateAway(true);
      // setAnimateChosen(true);
      toast.success("Salgsmetode lagret!");
      queryClient.invalidateQueries(SellerQueries.me(cookies.Token));
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
      <form action={mutate} className="w-full max-w-md space-y-6">
        <h1 className="mb-8 text-center text-2xl font-semibold">
          {animateChosen
            ? `Du har valgt ${selectedOption === SalgsMetode.FullService ? "full service pakke" : "selvregistrering"}`
            : "Velg Salgsmetode"}
        </h1>
        <div
          className={`flex flex-col items-center rounded-lg border border-gray-300 p-6 transition duration-700 ${
            selectedOption === SalgsMetode.Selvregistrering
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
            value={SalgsMetode.Selvregistrering}
            checked={selectedOption === SalgsMetode.Selvregistrering}
            onChange={handleOptionChange}
            className="size-7 rounded border-gray-300 bg-gray-100 text-brand-600 focus:ring-2 focus:ring-brand-500"
          />
        </div>

        <div
          className={`flex flex-col items-center rounded-lg border border-gray-300 p-6 transition duration-700 ${
            selectedOption === SalgsMetode.FullService
              ? animateChosen
                ? "-translate-y-36 scale-110  transform bg-brand-200 shadow-lg"
                : "bg-brand-200 shadow-lg"
              : animateAway
                ? "translate-x-full transform opacity-0"
                : ""
          }`}
        >
          <label className="mb-4 text-xl font-medium">Full service pakke</label>
          <p className="mb-4 text-center text-gray-600">
            La oss ta oss av alt - fra registrering til salg. 60% av salgsprisen
            går til Minihjørne.
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
            value={SalgsMetode.FullService}
            checked={selectedOption === SalgsMetode.FullService}
            onChange={handleOptionChange}
            className="size-7 rounded border-gray-300 bg-gray-100 text-brand-600 focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className="h-6 w-6 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
          />
          <label htmlFor="terms" className="text-sm">
            Jeg aksepterer{" "}
            <Link href="/selgervilkar" className="text-blue-500 underline">
              vilkårene
            </Link>
          </label>
        </div>
        <button
          type="submit"
          disabled={!termsAccepted || selectedOption === 0}
          className="w-full rounded-lg bg-brand-500 px-4 py-2 text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Velg{" "}
          {selectedOption === SalgsMetode.Selvregistrering
            ? "selvregistrering"
            : "full service pakke"}
        </button>
      </form>
    </div>
  );
};

export default Form;
