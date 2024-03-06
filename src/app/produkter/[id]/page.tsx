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
import { ProductQueries } from "@/queryFactory/ProductQueryFactory";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { data: product } = useQuery(ProductQueries.detail(params.id));
  if (!product) return <Loading />;
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
  } = product.attributes;
  return (
    <div className="flex w-full flex-wrap justify-center  overflow-hidden">
      <div className="relative w-full sm:w-1/2">
        <div className="absolute left-8 top-4 z-10">
          <BackButton />
        </div>
        <Link
          href={`/profiler/${user.data.id}`}
          className="absolute right-4 top-4 z-10 flex rounded border-2 border-transparent bg-white px-4 py-2 shadow"
        >
          <p className="text-sm text-purple-500">
            {user.data.attributes.username}
          </p>
          <User size={22} />
        </Link>
        <CarouselComponent>
          {image.data.map((image) => {
            return (
              <img
                key={image.id}
                className="h-[500px] w-full overflow-hidden object-contain sm:h-[750px]"
                src={`${image.attributes.url}`}
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
          <ColorSquares
            colors={colors.data}
            // size="size-8"
          />
          {/* <span className="flex">{sexList[data.sex.name]}</span> */}
        </div>
        <div className="relative  flex w-full flex-col gap-3">
          <p className="mt-8 w-full  text-center text-3xl font-semibold">
            {price} kr
          </p>
          <div className="mb-4 flex w-full items-center justify-center">
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

        <div className="flex w-full flex-col">
          <div className="flex w-full px-12 py-8 ">
            <p className="flex w-1/5 text-sm text-gray-500">
              Størrelse
              {/* <Tag size={22} /> */}
            </p>
            <Link
              href={`/produkter/?${queryTemplates.sizeQueryTemplate}${size.data.id}`}
              className="grow text-center text-xl font-light"
            >
              {" "}
              {size.data.attributes.number} / {size.data.attributes.text}
            </Link>
            <div className="w-1/5"></div>
          </div>
          <div className="flex w-full bg-gray-100 px-12  py-8">
            <p className="flex w-1/5 text-sm text-gray-500">
              Merke
              {/* <Tag size={22} /> */}
            </p>
            <p className="grow text-center text-xl font-light">{brand}</p>
            <div className="w-1/5"></div>
          </div>
          <div className="flex w-full px-12 py-8 ">
            <p className="flex w-1/5 text-sm text-gray-500">
              Materiale
              {/* <Tag size={22} /> */}
            </p>
            <Link
              href={`/produkter/?${queryTemplates.materialQueryTemplate}${material.data.id}`}
              className="grow text-center text-xl font-light"
            >
              {" "}
              {material.data.attributes.name}
            </Link>
            <div className="w-1/5"></div>
          </div>
          <div className="flex w-full bg-gray-100 px-12  py-8">
            <p className="flex w-1/5 text-sm text-gray-500">
              Tilstand
              {/* <Tag size={22} /> */}
            </p>
            <p className="grow text-center text-xl font-light">
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
        <div className="my-6 flex justify-center px-12">
          <div className=" mt-2 rounded border border-gray-200 bg-white px-12 py-2">
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
        <div className="mb-10 flex h-full w-full items-center justify-center px-12 sm:mb-0">
          <AddToCartButtons product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
