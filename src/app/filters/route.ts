import { FilterMethodsCached } from "@/queryFactory/Filter";
import { NextResponse } from "next/server";

export async function GET() {
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
  return NextResponse.json(data);
}
