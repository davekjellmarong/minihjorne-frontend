"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ProductBackend, ProductRQ } from "@/utils/types";
import { ProductsMethods } from "@/utils/utils";
import { baseUrl } from "@/utils/constants";
import BackButton from "@/components/button/BackButton";
import ColorSquares from "@/components/color/ColorSquares";
import Loading from "@/components/loading/Loading";
import {
  GenderFemale,
  GenderMale,
  GenderNeuter,
  Tag,
  User,
  XCircle,
} from "@phosphor-icons/react";
import {
  BaseballCap,
  Dress,
  Pants,
  Sneaker,
  TShirt,
} from "@phosphor-icons/react";
import Link from "next/link";
import AddToCartButtons from "@/components/button/AddToCartButtons";
import ColorSquaresBackend from "@/components/color/ColorSquaresBackend";
import CarouselComponent from "@/components/carousel/Carousel";

interface ProductProps {
  product: ProductRQ;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { data } = useQuery<ProductRQ>({
    queryKey: ["product", params.id],
  });
  console.log(data?.data.attributes.user.data.attributes.username);
  if (!data) return <Loading />;
  console.log(data.data);
  const iconsList: any = {
    BaseballCap: <BaseballCap size={22} />,
    Dress: <Dress size={22} />,
    Pants: <Pants size={22} />,
    Sneaker: <Sneaker size={22} />,
    TShirt: <TShirt size={22} />,
  };
  const sexList: any = {
    Unisex: (
      <>
        <GenderMale color="blue" size={28} />
        <GenderFemale color="red" size={28} />
      </>
    ),
    Gutt: <GenderMale color="blue" size={28} />,
    Jente: <GenderFemale color="red" size={28} />,
  };

  return (
    <div className="flex flex-wrap sm:flex-nowrap w-full sm:max-h-[750px] justify-center  overflow-hidden">
      <div className="w-full sm:w-1/2 relative">
        <Link
          href={`profiler/${data?.data.attributes.user.data.attributes.username}`}
          className="absolute sm:top-4 bottom-4 sm:bottom-auto right-4 flex border-2 rounded py-2 px-4 bg-white border-transparent"
        >
          <p className="text-purple-500 text-sm">
            {data?.data.attributes.user.data.attributes.username}
          </p>
          <User size={22} />
        </Link>
        <CarouselComponent>
          {data?.data.attributes.image.data.map((image) => {
            return (
              <img
                key={image.id}
                className="w-full h-[500px] sm:h-[750px] object-cover overflow-hidden"
                src={`${image.attributes.previewUrl}`}
                height={200}
                width={200}
                alt=""
              />
            );
          })}
        </CarouselComponent>
      </div>
      <div className="w-full sm:w-1/2 relative flex flex-col items-start overflow-hidden">
        <div className="absolute top-5 left-10">
          <ColorSquares
            colors={data.data.attributes.colors.data}
            // size="size-8"
          />
          {/* <span className="flex">{sexList[data.sex.name]}</span> */}
        </div>
        <div className="relative  flex w-full flex-col gap-3">
          <p className="text-3xl mt-8  font-semibold w-full text-center">
            {data.data.attributes.price} kr
          </p>
          <div className="flex w-full items-center justify-center mb-4">
            <p className="">
              {data.data.attributes.category.data.attributes.name}
            </p>
            {/* <span>{{iconsList[data.category.icon]} }</span> */}
          </div>
          <div className="absolute flex w-full justify-end">
            <button className=" pt-4 pr-4">
              <XCircle size={26} />
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="py-8 px-12 w-full flex ">
            <p className="w-1/5 flex text-sm text-gray-500">
              Størrelse
              {/* <Tag size={22} /> */}
            </p>
            <p className="grow text-xl font-light text-center">
              {" "}
              {data.data.attributes.size.data.attributes.number} /{" "}
              {data.data.attributes.size.data.attributes.text}
            </p>
            <div className="w-1/5"></div>
          </div>
          <div className="py-8 px-12 w-full flex  bg-gray-100">
            <p className="w-1/5 flex text-sm text-gray-500">
              Merke
              {/* <Tag size={22} /> */}
            </p>
            <p className="grow text-xl font-light text-center">
              {data.data.attributes.brand}
            </p>
            <div className="w-1/5"></div>
          </div>
          <div className="py-8 px-12 w-full flex ">
            <p className="w-1/5 flex text-sm text-gray-500">
              Materiale
              {/* <Tag size={22} /> */}
            </p>
            <p className="grow text-xl font-light text-center">
              {" "}
              {data.data.attributes.material.data.attributes.name}
            </p>
            <div className="w-1/5"></div>
          </div>
          <div className="py-8 px-12 w-full flex  bg-gray-100">
            <p className="w-1/5 flex text-sm text-gray-500">
              Tilstand
              {/* <Tag size={22} /> */}
            </p>
            <p className="grow text-xl font-light text-center">
              {" "}
              {data.data.attributes.state.data.attributes.name}
            </p>
            <div className="w-1/5"></div>
          </div>
          {/* <div className="py-8 px-12 w-full flex bg-gray-100">
            <p className="w-1/5 flex text-sm text-gray-500">
              Farger
              <Tag size={22} />
            </p>
            <p className="grow text-xl font-light text-center">
              {" "}
              {data.colors[0]?.name}
            </p>
            <div className="w-1/5"></div>
          </div> */}
        </div>
        <div className="px-12 my-6 flex justify-center">
          <div className=" bg-white py-2 px-12 mt-2 rounded border border-gray-200">
            {data.data.attributes.tags.data.map((tag) => {
              return <p key={tag.id}>{tag.attributes.name}</p>;
            })}
          </div>
        </div>

        <div className="w-full">
          <hr className=" mx-12 mt-6" />
        </div>
        <div className="flex w-full px-12 h-full mb-10 sm:mb-0 items-center justify-center">
          {/* <AddToCartButtons product={product} /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
