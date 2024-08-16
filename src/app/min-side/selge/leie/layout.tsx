import React, { Suspense } from "react";
import Loading from "@/components/common/loading/Loading";
import { isFeatureFlagActive } from "@/utils/serverUtils";
import { FeatureFlagsEnum } from "@/utils/FeatureFlags";
import FreeRent from "@/components/features/minSide/leie/freeRent/FreeRent";

interface LayoutProps {
  children: any;
}
const Layout = async ({ children }: LayoutProps) => {
  const featureFlagActive = await isFeatureFlagActive(
    FeatureFlagsEnum.GRATIS_LEIE,
    process.env.FEATURE_FLAG_TOKEN,
  );

  if (featureFlagActive) {
    return (
      <Suspense>
        <FreeRent />;
      </Suspense>
    );
  }

  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default Layout;
