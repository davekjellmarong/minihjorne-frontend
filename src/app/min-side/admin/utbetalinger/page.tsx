import Sellers from "@/components/features/admin/Utbetalinger/Sellers";
import { Button } from "@/components/UI/button";
import React, { Suspense } from "react";

const page = async () => {
  return (
    <div className="flex flex-col  gap-4">
      <h1 className="text-2xl font-bold">Utbetalinger</h1>
      <Button className="bg-[#7d6adf] text-white hover:bg-[#6c5bcd] dark:bg-[#9b8eff] dark:text-[#1a1b1e] dark:hover:bg-[#8577f0]">
        Lag utbetaling
      </Button>

      <Suspense fallback={<div>Loading...</div>}>
        <Sellers />
      </Suspense>
    </div>
  );
};

export default page;
