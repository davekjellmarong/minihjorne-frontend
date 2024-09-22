"use client";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Button from "@/components/common/buttons/Button";
import { updateUserSaleProfile } from "@/serverActions/ServerActions";
import { UserQueries } from "@/queryFactory/User";
import { useCookies } from "react-cookie";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import { SellerQueries } from "@/queryFactory/Seller";

const EditSalgsprofilForm = () => {
  const router = useRouter();
  const [cookie] = useCookies(["Token"]);
  const { data: user } = useSuspenseQuery(SellerQueries.me(cookie.Token));
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateUserSaleProfile,
    onSuccess: () => {
      toast.info(`Salgsprofil lagret`);
    },
    onError: (error) => {
      toast.error(`Noe gikk galt: ${error}`);
    },
  });
  return (
    <div className="flex flex-col items-center gap-3 p-8">
      <h1 className="text-xl font-bold">Rediger din salgsprofil</h1>
      <LoadingOverlay loading={isPending} />
      <form className="flex w-full flex-col gap-6" action={updateUser}>
        <div>
          <label htmlFor="header">Overskrift</label>
          <input
            type="text"
            id="header"
            name="header"
            defaultValue={user.seller?.header}
            className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            placeholder="Eks: Leon's lille butikk eller Babyklær 1-2 år."
            required
          />
        </div>
        <div>
          <label htmlFor="description">Beskrivelse</label>
          <textarea
            id="description"
            name="description"
            defaultValue={user.seller?.description}
            className="block h-56 w-full rounded-lg border border-gray-200 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            placeholder="Eks: Velkommen til min lille butikk. Her finner du klær til barn i alle aldre. 
            Jeg har klær fra kjente merker og klær som er laget av resirkulerte materialer.
            Håper du finner noe du liker."
            required
          />
        </div>
        <div className="flex gap-10">
          <Button
            type="outline"
            onClick={() => {
              router.back();
            }}
            className="grow"
          >
            Avbryt
          </Button>
          <Button submit className="grow">
            Lagre
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditSalgsprofilForm;
