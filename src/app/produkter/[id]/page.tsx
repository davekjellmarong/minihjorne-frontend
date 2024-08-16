import React from "react";
import ColorSquares from "@/components/features/filters/color/ColorSquares";
import {
  GenderFemale,
  GenderIntersex,
  GenderMale,
  User,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { queryTemplates } from "@/utils/constants";
import { ProductsMethods } from "@/queryFactory/Product";
import "react-multi-carousel/lib/styles.css";
import BackButton from "@/components/common/buttons/BackButton";
import AddToCartButtons from "@/components/common/buttons/AddToCartButtons";
import Image from "next/image";
import ProductFieldRow from "@/components/features/product/ProductFieldRow";
import { isBrand_link, isDefect, isMaterial, isTag } from "@/utils/types";
import CarouselComponent from "@/components/common/Carousel";
import "../../../styles/FieldRow.css";

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const product = await ProductsMethods.getById(params.id);

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
    sex,
    category_type,
    defects,
    brand_link,
  } = product.attributes;
  return (
    <div className="flex w-full flex-wrap justify-center  overflow-hidden">
      <div className="relative w-full sm:w-1/2">
        <div className="absolute left-8 top-4 z-10">
          <BackButton />
        </div>
        <Link
          href={`/profiler/${user.data.id}`}
          className="absolute right-4 top-4 z-10 flex rounded border-2 border-transparent bg-white px-4 py-2 shadow-lg"
        >
          <p className="text-sm text-purple-500">
            {user.data.attributes.username}
          </p>
          <User size={22} />
        </Link>
        <CarouselComponent>
          {image.data.map((image) => {
            return (
              <Image
                key={image.id}
                className="h-[500px] w-full overflow-hidden object-contain sm:h-[750px] sm:w-[500px]"
                src={`${image.attributes.url}`}
                height={500}
                width={200}
                alt=""
              />
            );
          })}
        </CarouselComponent>
      </div>
      <div className="relative flex w-full flex-col items-start overflow-hidden sm:w-1/2">
        <div className="flex w-full justify-between px-4 py-2">
          <div className="">
            <ColorSquares size="small" colors={colors.data} />
          </div>
          <div className=" flex w-full flex-col gap-3">
            <p className="mt-6 w-full  text-center text-3xl font-semibold">
              {price} kr
            </p>
            <div className="mb-4 flex w-full items-center justify-center">
              <Link
                href={`/produkter/?${queryTemplates.categoryQueryTemplate}${category.data.id}&pagination[page]=1`}
                className=""
              >
                {category_type.data.attributes.name} /{" "}
                {category.data.attributes.name}
              </Link>
            </div>
          </div>
          <div>
            <Link
              href={`/produkter/?${queryTemplates.sexQueryTemplate}${sex.data.id}&pagination[page]=1`}
              className="flex items-center"
            >
              {sex.data.attributes.name === "Gutt" && (
                <GenderMale size={28} color="blue" />
              )}
              {sex.data.attributes.name === "Jente" && (
                <GenderFemale size={28} color="red" />
              )}
              {sex.data.attributes.name === "Unisex" && (
                <GenderIntersex size={28} />
              )}
              <p className="text-sm text-gray-700">
                {sex.data.attributes.name}
              </p>
            </Link>
          </div>
        </div>

        <div className=" flex w-full flex-col">
          <ProductFieldRow
            label="Størrelse"
            value={size.data.attributes.number}
            queryParam={`${queryTemplates.sizeQueryTemplate}${size.data.id}`}
          />
          {brand && (
            <ProductFieldRow
              label="Merke"
              value={brand}
              queryParam={`${queryTemplates.brand_linkQueryTemplate}${brand}`}
            />
          )}
          {isBrand_link(brand_link.data) && (
            <ProductFieldRow
              label="Merke"
              value={brand_link.data.attributes.name}
              queryParam={`${queryTemplates.brand_linkQueryTemplate}${brand_link}`}
            />
          )}

          {isMaterial(material.data) && (
            <ProductFieldRow
              label="Tesktil"
              value={material.data.attributes.name}
              queryParam={`${queryTemplates.materialQueryTemplate}${material.data?.id}`}
            />
          )}
          <ProductFieldRow
            label="Tilstand"
            value={state.data.attributes.name}
            queryParam={`${queryTemplates.stateQueryTemplate}${state.data.id}`}
          />
          {isDefect(defects.data) && (
            <ProductFieldRow
              label="Feil"
              value={defects.data.attributes.type}
              queryParam={`${queryTemplates.defectQueryTemplate}${defects.data.id}`}
            />
          )}
        </div>
        {isTag(tags.data) && (
          <div className="my-6 w-full px-12 ">
            <div className="mt-2 flex justify-center rounded border border-gray-200 bg-white px-12 py-2">
              {tags.data?.map((tag) => {
                return (
                  <Link
                    href={`/produkter/?${queryTemplates.tagQueryTemplate}${tag.id}&pagination[page]=1`}
                    key={tag.id}
                  >
                    {tag.attributes.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
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
