import { SellerMethods } from "@/queryFactory/Seller";
import QuickLink from "./QuickLink";
import Product from "./Product";

const QuickList = async () => {
  const sellers = await SellerMethods.getAll();
  return (
    <section className="w-full bg-white py-12">
      <div className="grid gap-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
          <div className="grid gap-1 px-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Salgsprofiler
            </h1>
            <p className="text-muted-foreground">
              Utforsk noen av våre salgsprofiler.
            </p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {sellers?.slice(0, 6).map((profile) => (
            <div key={profile.id} className="group relative grid gap-4">
              <div className="grid gap-2 rounded-lg border border-gray-200 bg-white p-4">
                <QuickLink seller={{ data: profile }} />
                <div className="grid grid-cols-2 gap-4">
                  {/* Sort by randomWeight */}
                  {profile.attributes.products?.data
                    ?.slice(0, 2)
                    .map((product) => (
                      <Product key={product.id} product={product} />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default QuickList;
