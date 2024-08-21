import TextSkeleton from "@/components/common/skeleton/TextSkeleton";
import SalgsprofilHeader from "@/components/features/minSide/salgsprofil/SalgsprofilHeader";
import Products from "@/components/features/product/Products";
import ProductsSkeleton from "@/components/features/product/ProductsSkeleton";
import SalgsProfilProducts from "@/components/features/product/SalgsProfilProducts";
import { UserMethods } from "@/queryFactory/User";
import { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const userData = await UserMethods.getById(id);

  return {
    title: `Salgsprofil - Brukte Barneklær | Minihjørne - ${userData.username}`,
    description: `Se salgsprofilen til ${userData.username} på Minihjørne. Oppdag brukte barneklær fra pålitelige selgere.`,
  };
}

const Page = async ({ params }: { params: { id: string } }) => {
  return (
    <div className={`flex h-full w-full items-center justify-center`}>
      <div className="relative m-3 flex w-full flex-col items-center gap-6 rounded bg-white px-4 py-10 text-center  shadow-2xl">
        <Suspense
          fallback={
            <div className="px-1">
              <TextSkeleton heading />
              <TextSkeleton />
              <TextSkeleton />
              <ProductsSkeleton />
            </div>
          }
        >
          <SalgsprofilHeader id={params.id} />
          <SalgsProfilProducts id={params.id} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
