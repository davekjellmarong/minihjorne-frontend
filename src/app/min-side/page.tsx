import React, { Suspense } from "react";
import Menu from "@/components/features/minSide/Menu";
import Header from "@/components/features/minSide/Header";
import OnboardingSteps from "@/components/features/minSide/OnboardingSteps";

const MinSide = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 bg-brand-200 pb-24 pt-4">
        <Suspense
          fallback={
            <div className="flex flex-col items-center">
              <div className="mb-4 flex justify-center">
                <span className="animate-pulse rounded-full border border-gray-300 bg-white px-8 py-6 text-center text-5xl shadow-sm">
                  ?
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="mb-2 h-6 w-32 animate-pulse bg-white text-center text-lg font-semibold"></p>
                <p className="h-4 w-48 animate-pulse bg-white text-center text-sm"></p>
              </div>
            </div>
          }
        >
          <OnboardingSteps />
          <Header />
        </Suspense>
      </div>
      <Menu />
    </div>
  );
};
export default MinSide;
