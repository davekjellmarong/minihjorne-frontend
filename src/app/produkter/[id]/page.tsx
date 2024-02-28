"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductRQ } from "@/utils/types";
import BackButton from "@/components/button/BackButton";
import ColorSquares from "@/components/color/ColorSquares";
import Loading from "@/components/loading/Loading";
import { GenderFemale, GenderMale, User } from "@phosphor-icons/react";
import {
  BaseballCap,
  Dress,
  Pants,
  Sneaker,
  TShirt,
} from "@phosphor-icons/react";
import Link from "next/link";
import AddToCartButtons from "@/components/button/AddToCartButtons";
import CarouselComponent from "@/components/carousel/Carousel";
import { queryTemplates } from "@/utils/constants";

interface ProductProps {
  product: ProductRQ;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { data } = useQuery<ProductRQ>({
    queryKey: ["product", params.id],
  });
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
  const {
    category,
    brand,
    colors,
    image,
    material,
    price,
    size,
    state,
    tags,
    user,
  } = data.data.attributes;
  return (
    <div className="flex flex-wrap w-full justify-center  overflow-hidden">
      <div className="w-full sm:w-1/2 relative">
        <div className="absolute z-10 top-4 left-8">
          <BackButton />
        </div>
        <Link
          href={`/profiler/${user.data.attributes.username}`}
          className="absolute z-10 top-4 right-4 flex border-2 rounded py-2 px-4 bg-white shadow border-transparent"
        >
          <p className="text-purple-500 text-sm">
            {user.data.attributes.username}
          </p>
          <User size={22} />
        </Link>
        <CarouselComponent>
          {image.data.map((image) => {
            return (
              <img
                key={image.id}
                className="w-full h-[500px] sm:h-[750px] object-contain overflow-hidden"
                src={`${image.attributes.url}`}
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
            colors={colors.data}
            // size="size-8"
          />
          {/* <span className="flex">{sexList[data.sex.name]}</span> */}
        </div>
        <div className="relative  flex w-full flex-col gap-3">
          <p className="text-3xl mt-8  font-semibold w-full text-center">
            {price} kr
          </p>
          <div className="flex w-full items-center justify-center mb-4">
            <Link
              href={`/produkter/?${queryTemplates.categoryQueryTemplate}${category.data.id}`}
              className=""
            >
              {category.data.attributes.name}
            </Link>
            {/* <span>{iconsList[data.category.icon]}</span> */}
          </div>
          {/* <div className="absolute flex w-full justify-end">
            <button className=" pt-4 pr-4">
              <XCircle size={26} />
            </button>
          </div> */}
        </div>

        <div className="w-full flex flex-col">
          <div className="py-8 px-12 w-full flex ">
            <p className="w-1/5 flex text-sm text-gray-500">
              Størrelse
              {/* <Tag size={22} /> */}
            </p>
            <Link
              href={`/produkter/?${queryTemplates.sizeQueryTemplate}${size.data.id}`}
              className="grow text-xl font-light text-center"
            >
              {" "}
              {size.data.attributes.number} / {size.data.attributes.text}
            </Link>
            <div className="w-1/5"></div>
          </div>
          <div className="py-8 px-12 w-full flex  bg-gray-100">
            <p className="w-1/5 flex text-sm text-gray-500">
              Merke
              {/* <Tag size={22} /> */}
            </p>
            <p className="grow text-xl font-light text-center">{brand}</p>
            <div className="w-1/5"></div>
          </div>
          <div className="py-8 px-12 w-full flex ">
            <p className="w-1/5 flex text-sm text-gray-500">
              Materiale
              {/* <Tag size={22} /> */}
            </p>
            <Link
              href={`/produkter/?${queryTemplates.materialQueryTemplate}${material.data.id}`}
              className="grow text-xl font-light text-center"
            >
              {" "}
              {material.data.attributes.name}
            </Link>
            <div className="w-1/5"></div>
          </div>
          <div className="py-8 px-12 w-full flex  bg-gray-100">
            <p className="w-1/5 flex text-sm text-gray-500">
              Tilstand
              {/* <Tag size={22} /> */}
            </p>
            <p className="grow text-xl font-light text-center">
              {" "}
              {state.data.attributes.name}
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
            {tags.data.map((tag) => {
              return (
                <Link
                  href={`/produkter/?${queryTemplates.tagQueryTemplate}${tag.id}`}
                  key={tag.id}
                >
                  {tag.attributes.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="w-full">
          <hr className=" mx-12 mt-6" />
        </div>
        <div className="flex w-full px-12 h-full mb-10 sm:mb-0 items-center justify-center">
          <AddToCartButtons product={data.data} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
