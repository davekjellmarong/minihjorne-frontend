import Link from "next/link";
import Image from "next/image";
import { ProductsMethods } from "@/queryFactory/Product";
import CarouselComponent from "@/components/common/Carousel";
import ColorSquares from "@/components/features/filters/color/ColorSquares";
import AddToCartButtons from "@/components/common/buttons/AddToCartButtons";
import QuickLink from "@/components/features/salgsprofil/QuickLink";
import BackButton from "@/components/common/buttons/BackButton";

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
    seller,
    category_type,
    defects,
  } = product.attributes;

  const sellerProducts = await ProductsMethods.getBySellerId(
    seller.data.id,
    20,
  );

  const randomProductSort = sellerProducts
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  return (
    <div className=" mx-auto rounded-lg bg-white pb-8">
      <div className="flex flex-col items-start gap-6">
        <div className=" w-full rounded-lg px-4 pb-4">
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <div className="absolute left-3 top-3 z-10 flex items-center gap-2">
                <BackButton />
              </div>
              <CarouselComponent>
                {image.data.map((image) => {
                  return (
                    <Image
                      key={image.id}
                      className="h-[500px] w-full overflow-hidden rounded-lg object-contain sm:h-[750px] sm:w-[500px]"
                      src={`${image.attributes.url}`}
                      height={500}
                      width={200}
                      alt=""
                    />
                  );
                })}
              </CarouselComponent>
              <div className="mt-4 flex flex-col">
                <div className="text-2xl font-bold">Kr {price}</div>
                <div className="text-sm text-gray-500">
                  Størrelse: {size.data.attributes.number}
                </div>
              </div>
              <div className="mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <ColorSquares
                    size="small"
                    colors={colors.data}
                    direction="row"
                  />
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-gray-500">Merke: {brand}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-gray-500">
                      Plagg: {category_type.data.attributes.name} /{" "}
                      {category.data.attributes.name}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-gray-500">
                      Tilstand: {state.data.attributes.name}
                    </div>
                  </div>
                  {tags.data.length > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-gray-500">
                        Tema: {tags.data[0].attributes.name}
                      </div>
                    </div>
                  )}
                  {material.data?.length > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-gray-500">
                        Materiale:
                        {material.data[0].attributes.name}
                      </div>
                    </div>
                  )}
                  {defects.data.length > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-gray-500">
                        Avvik: {defects.data[0].attributes.type}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <AddToCartButtons product={product} />
            </div>
            <div>
              <QuickLink seller={seller} />
              <div className="mt-4">
                <h3 className="font-bold">
                  Se andre klær fra {seller.data.attributes.username}
                </h3>
                <div className="mt-2 grid grid-cols-2 gap-4 ">
                  {randomProductSort.map((product) => {
                    return (
                      <Link
                        key={product.id}
                        href={`/brukte-barne-klaer/${product.id}`}
                        className="block"
                        prefetch={false}
                      >
                        <Image
                          src={`${product.attributes.image.data[0].attributes.formats.medium.url}`}
                          alt=""
                          width={150}
                          height={150}
                          className="w-full rounded-lg object-cover"
                          style={{ aspectRatio: "150/150", objectFit: "cover" }}
                        />
                        <p className="mt-2 text-sm font-medium">
                          {product.attributes.category.data.attributes.name}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
