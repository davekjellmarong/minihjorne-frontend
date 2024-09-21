"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { AuthQueries } from "@/queryFactory/Auth";
import { UserQueries } from "@/queryFactory/User";
import Image from "next/image";
import Link from "next/link";
import { Question } from "@phosphor-icons/react";
import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import { ImageMethods } from "@/queryFactory/Upload";
import { useStore } from "@/stateManagment/ZustandStore";
import { SellerQueries } from "@/queryFactory/Seller";

interface ImageUploaderProps {
  setImages: any;
  setModal: any;
}

const ImageUploader = ({ setImages, setModal }: ImageUploaderProps) => {
  const hideNav = useStore((state) => state.hideNav);
  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: user } = useSuspenseQuery(SellerQueries.me(jwt));
  const sellerId = user.seller?.id;
  const [loading, setLoading] = useState(false);

  const { mutate: uploadImages } = useMutation({
    mutationFn: (values: any) => {
      const formData = new FormData(values.target.form);
      return ImageMethods.uploadImages(formData, jwt);
    },
    onSuccess: (data) => {
      setImages(data);
      setLoading(false);
      setModal(true);
      hideNav();
    },
    onError: (error) => {
      toast.error("Failed to upload images");
      setLoading(false);
    },
    onMutate: () => {
      setLoading(true);
    },
  });
  return (
    <div className="relative flex flex-col items-center gap-6 pb-10 pt-16 text-center">
      <LoadingOverlay loading={loading} />
      <>
        {/* <Link
          href="/min-side/selge/last-opp/tips"
          className="absolute left-4 top-4 flex items-center"
        >
          <Question size={32} weight="thin" color="blue" />
        </Link> */}
        <p className="text-lg text-brand-800">Last opp nye produkt bilder</p>
        <Image
          src="/addFiles.svg"
          width={200}
          height={200}
          alt=""
          className="pr-10"
        />
      </>

      <div className="flex flex-col items-center justify-center">
        <form onSubmit={uploadImages} encType="multipart/form-data">
          <input
            className="file:mr-4 file:cursor-pointer file:rounded file:border-0 file:bg-violet-500 
            file:px-8 file:py-6
            file:text-lg file:font-semibold
            file:text-white file:shadow-lg"
            type="file"
            name="files"
            multiple
            onChange={uploadImages}
          />
          <input type="hidden" name="ref" value="api::seller.seller" />
          <input type="hidden" name="refId" value={sellerId} />
          <input type="hidden" name="field" value="productImages" />
        </form>
      </div>
    </div>
  );
};

export default ImageUploader;
