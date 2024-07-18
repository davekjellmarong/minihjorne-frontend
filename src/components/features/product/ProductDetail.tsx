"use client";
import React from "react";
import { ProductBackend } from "@/utils/types";
import Loading from "@/components/common/loading/Loading";
import { User, XCircle } from "@phosphor-icons/react";
import Link from "next/link";
import ColorSquaresBackend from "@/components/features/filters/color/ColorSquaresBackend";
import CarouselComponent from "@/components/common/Carousel";

interface ProductProps {
  selectedProduct: ProductBackend | undefined;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProductDetail = ({ selectedProduct, setOpen }: ProductProps) => {
  // TO-DO : use suspense query
  if (!selectedProduct) return <Loading />;
  return (
    <div className="flex w-full flex-wrap justify-center overflow-hidden sm:max-h-[750px]  sm:flex-nowrap">
      <div className="relative w-full sm:w-1/2">
        <Link
          href={`profiler/${selectedProduct.user.username}`}
          className="absolute bottom-4 right-4 flex rounded border-2 border-transparent bg-white px-4 py-2 sm:bottom-auto sm:top-4"
        >
          <p className="text-sm text-purple-500">
            {selectedProduct.user.username}
          </p>
          <User size={22} />
        </Link>
        <CarouselComponent>
          {selectedProduct.image.map((image) => {
            return (
              <img
                key={image.id}
                className="h-[500px] w-full overflow-hidden object-cover sm:h-[750px]"
                src={`${image.url}`}
                height={200}
                width={200}
                alt=""
              />
            );
          })}
        </CarouselComponent>
      </div>
      <div className="relative flex w-full flex-col items-start overflow-hidden sm:w-1/2">
        <div className="absolute left-10 top-5">
          <ColorSquaresBackend colors={selectedProduct.colors} size="size-8" />
        </div>
        <div className="relative  flex w-full flex-col gap-3">
          <p className="mt-8 w-full  text-center text-3xl font-semibold">
            {selectedProduct.price} kr
          </p>
          <div className="mb-4 flex w-full items-center justify-center">
            <p className="">{selectedProduct.category.name}</p>
          </div>
          <div className="absolute flex w-full justify-end">
            <button className=" pr-4 pt-4" onClick={() => setOpen(false)}>
              <XCircle size={26} />
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="flex w-full px-12 py-8 ">
            <p className="flex w-1/5 text-sm text-gray-500">Størrelse</p>
            <p className="grow text-center text-xl font-light">
              {" "}
              {selectedProduct.size.number} / {selectedProduct.size.text}
            </p>
            <div className="w-1/5"></div>
          </div>
          <div className="flex w-full bg-gray-100 px-12  py-8">
            <p className="flex w-1/5 text-sm text-gray-500">Merke</p>
            <p className="grow text-center text-xl font-light">
              {selectedProduct.brand}
            </p>
            <div className="w-1/5"></div>
          </div>
          <div className="flex w-full px-12 py-8 ">
            <p className="flex w-1/5 text-sm text-gray-500">Materiale</p>
            <p className="grow text-center text-xl font-light">
              {" "}
              {selectedProduct.material?.name}
            </p>
            <div className="w-1/5"></div>
          </div>
          <div className="flex w-full bg-gray-100 px-12  py-8">
            <p className="flex w-1/5 text-sm text-gray-500">Tilstand</p>
            <p className="grow text-center text-xl font-light">
              {" "}
              {selectedProduct.state?.name}
            </p>
            <div className="w-1/5"></div>
          </div>
        </div>
        <div className="my-6 flex justify-center px-12">
          <div className=" mt-2 rounded border border-gray-200 bg-white px-12 py-2">
            {selectedProduct.tags.map((tag) => {
              return <p key={tag.id}>{tag.name}</p>;
            })}
          </div>
        </div>

        <div className="w-full">
          <hr className=" mx-12 mt-6" />
        </div>
        <div className="mb-10 flex h-full w-full items-center justify-center px-12 sm:mb-0"></div>
      </div>
    </div>
  );
};

export default ProductDetail;
