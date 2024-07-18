"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import ColorSquares from "@/components/features/filters/color/ColorSquares";
import Loading from "@/components/common/loading/Loading";
import { User } from "@phosphor-icons/react";
import Link from "next/link";
import { queryTemplates } from "@/utils/constants";
import { ProductQueries } from "@/reactQuery/ProductQueryFactory";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BackButton from "@/components/common/buttons/BackButton";
import AddToCartButtons from "@/components/common/buttons/AddToCartButtons";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  // TO-DO use suspsenseQuery
  const { data: product } = useQuery(ProductQueries.detail(params.id));
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  if (!product) return <Loading />;
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
        <Carousel showDots responsive={responsive}>
          {image.data.map((image) => {
            return (
              <img
                key={image.id}
                className="h-[500px] w-full overflow-hidden object-contain sm:h-[750px] sm:w-[500px]"
                src={`${image.attributes.url}`}
                height={200}
                width={200}
                alt=""
              />
            );
          })}
        </Carousel>
      </div>
      <div className="relative flex w-full flex-col items-start overflow-hidden sm:w-1/2">
        <div className="absolute left-10 top-5">
          <ColorSquares colors={colors.data} />
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
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div className="flex w-full px-12 py-8 ">
            <p className="flex w-1/5 text-sm text-gray-500">Størrelse</p>
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
            <p className="flex w-1/5 text-sm text-gray-500">Merke</p>
            <p className="grow text-center text-xl font-light">{brand}</p>
            <div className="w-1/5"></div>
          </div>
          <div className="flex w-full px-12 py-8 ">
            <p className="flex w-1/5 text-sm text-gray-500">Materiale</p>
            <Link
              href={`/produkter/?${queryTemplates.materialQueryTemplate}${material.data?.id}`}
              className="grow text-center text-xl font-light"
            >
              {" "}
              {material.data?.attributes.name}
            </Link>
            <div className="w-1/5"></div>
          </div>
          <div className="flex w-full bg-gray-100 px-12  py-8">
            <p className="flex w-1/5 text-sm text-gray-500">Tilstand</p>
            <p className="grow text-center text-xl font-light">
              {" "}
              {state.data.attributes.name}
            </p>
            <div className="w-1/5"></div>
          </div>
        </div>
        <div className="my-6 flex justify-center px-12">
          <div className=" mt-2 rounded border border-gray-200 bg-white px-12 py-2">
            {tags.data?.map((tag) => {
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
        <div className="mb-10 mt-4 flex h-full w-full items-center justify-center px-12 sm:mb-0">
          <AddToCartButtons product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
