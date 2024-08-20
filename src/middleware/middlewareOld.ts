import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { FeatureFlagsEnum } from "../utils/FeatureFlags";
import { getMe, isFeatureFlagActive } from "../utils/serverUtils";

export async function middlewareOld(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const admin = request.cookies.get("Admin");
  const token = request.cookies.get("Token");

  console.log("pathdsjknfdsnbfjkdsnfsdjhkn");
  if (admin?.value === "true" && token?.value) {
    const response = await getMe(token?.value);
    if (response.admin) {
      return NextResponse.next();
    }
  }
  const E_COMMERCE = request.cookies.get(
    `featureFlag_${FeatureFlagsEnum.E_COMMERCE}`,
  );
  if (E_COMMERCE?.value === "false")
    return NextResponse.redirect(
      new URL(`/kommer-snart?page=${path.slice(1)}`, request.url),
    );
  if (
    path.startsWith("/handlekurv") ||
    path.startsWith("/brukte-barne-klaer") ||
    path.startsWith("/checkout")
  ) {
    const featureFlagActive = await isFeatureFlagActive(
      FeatureFlagsEnum.E_COMMERCE,
      process.env.FEATURE_FLAG_TOKEN,
    );
    if (!featureFlagActive) {
      const response = NextResponse.redirect(
        new URL(`/kommer-snart?page=${path.slice(1)}`, request.url),
      );
      response.cookies.set(
        `featureFlag_${FeatureFlagsEnum.E_COMMERCE}`,
        "false",
        { expires: new Date(Date.now() + 1000 * 60 * 60 * 24) },
      );
      return response;
    } else {
      return NextResponse.next();
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/handlekurv/:path*",
    "/brukte-barne-klaer/:path*",
    "/checkout/:path*",
  ],
};
