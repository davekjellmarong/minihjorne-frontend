import Sellers from "@/components/features/admin/Utbetalinger/Sellers";
import { Button } from "@/components/UI/button";
import React, { Suspense } from "react";

const page = async () => {
  return (
    <div className="flex flex-col  gap-4">
      <h1 className="text-2xl font-bold">Utbetalinger</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Sellers />
      </Suspense>
    </div>
  );
};

export default page;
