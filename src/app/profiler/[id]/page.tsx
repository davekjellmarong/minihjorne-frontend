import TextSkeleton from "@/components/common/skeleton/TextSkeleton";
import SalgsprofilHeader from "@/components/features/minSide/salgsprofil/SalgsprofilHeader";
import Products from "@/components/features/product/Products";
import ProductsSkeleton from "@/components/features/product/ProductsSkeleton";
import { UserMethods } from "@/queryFactory/User";
import { Suspense } from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const userPromise = UserMethods.getById(params.id);
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
          <SalgsprofilHeader userPromise={userPromise} />
          <Products />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
