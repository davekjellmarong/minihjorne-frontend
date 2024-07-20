import React from "react";
import Nav from "./Nav";
import { navItemsPublic, navItemsAuth } from "./NavItems";
import { isFeatureFlagActive } from "@/utils/serverUtils";
import { FeatureFlagsEnum } from "@/utils/FeatureFlags";

const NavProvider = async ({ children }: any) => {
  const featureFlagActive = await isFeatureFlagActive(
    FeatureFlagsEnum.E_COMMERCE,
    process.env.FEATURE_FLAG_TOKEN,
  );

  let itemsPublic;
  let itemsAuth;
  if (!featureFlagActive) {
    console.log("Feature flag is not active");
    itemsPublic = navItemsPublic.filter((item) => item.path != "/handlekurv");
    itemsAuth = navItemsAuth.filter((item) => item.path !== "/handlekurv");
    console.log(itemsPublic);
  } else {
    itemsPublic = navItemsPublic;
    itemsAuth = navItemsAuth;
  }
  return (
    <>
      <Nav navItemsPublic={itemsPublic} navItemsAuth={itemsAuth} />
    </>
  );
};

export default NavProvider;
