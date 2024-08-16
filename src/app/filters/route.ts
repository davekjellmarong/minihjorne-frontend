import { FilterMethodsCached } from "@/queryFactory/Filter";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("START ROUTE HANDLER");

  const {
    colors,
    materials,
    sizes,
    sexes,
    tags,
    categories,
    categoryTypes,
    states,
    defects,
  } = await FilterMethodsCached.getAll();
  const data = {
    colors,
    materials,
    sizes,
    sexes,
    tags,
    categories,
    categoryTypes,
    states,
    defects,
  };
  console.log("END ROUTE HANDLER");
  return NextResponse.json(data);
}
