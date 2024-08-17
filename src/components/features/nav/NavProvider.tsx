import React from "react";
import Nav from "./Nav";
import { navItemsPublic, navItemsAuth } from "./NavItems";
import { isFeatureFlagActive } from "@/utils/serverUtils";
import { FeatureFlagsEnum } from "@/utils/FeatureFlags";
import { cookies } from "next/headers";

const NavProvider = async () => {
  const featureFlagActive = await isFeatureFlagActive(
    FeatureFlagsEnum.E_COMMERCE,
    process.env.FEATURE_FLAG_TOKEN,
  );
  const cookieStore: any = cookies();
  const admin = cookieStore.get("Admin");

  let itemsPublic;
  let itemsAuth;
  if (admin?.value === "true") {
    itemsPublic = navItemsPublic;
    itemsAuth = navItemsAuth;
  } else if (!featureFlagActive) {
    itemsPublic = navItemsPublic.filter((item) => item.path != "/handlekurv");
    itemsAuth = navItemsAuth.filter((item) => item.path !== "/handlekurv");
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
