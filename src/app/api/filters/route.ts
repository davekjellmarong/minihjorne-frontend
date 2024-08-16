import { FilterMethodsCached } from "@/queryFactory/Filter";

export async function GET() {
  console.log("START ROUTE HANDLER");
  const colors = await FilterMethodsCached.getColors();
  const materials = await FilterMethodsCached.getMaterials();
  const sizes = await FilterMethodsCached.getSizes();
  const sexes = await FilterMethodsCached.getSexes();
  const tags = await FilterMethodsCached.getTags();
  const categories = await FilterMethodsCached.getCategories();
  const categoryTypes = await FilterMethodsCached.getCategoryTypes();
  const states = await FilterMethodsCached.getStates();
  const defects = await FilterMethodsCached.getDefects();
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
  return Response.json(data);
}
