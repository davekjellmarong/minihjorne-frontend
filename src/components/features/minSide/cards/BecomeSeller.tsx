import { Button } from "@/components/UI/button";
import Link from "next/link";
import React from "react";

const BecomeSeller = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-[#7d6adf]">
          Registrer deg som selger
        </div>
      </div>
      <div className="text-sm text-[#7d6adf]">
        Bli selger gratis - vi tar kun provision på salg.
      </div>

      <Link href="/min-side/selge/salgs-metode">
        <Button
          variant="outline"
          className="w-full border-[#7d6adf] text-[#7d6adf] hover:bg-[#7d6adf] hover:text-white"
        >
          Start nå
        </Button>
      </Link>
    </div>
    // <div className="space-y-4 rounded-lg bg-[#7d6adf] p-4 text-white shadow-md">
    //   <div className="flex items-center justify-between">
    //     <div className="text-lg font-bold">Registrer deg som selger</div>
    //   </div>
    //   <div className="text-sm">
    //     Bli selger gratis - vi tar kun provision på salg.
    //   </div>
    //   <Button
    //     variant="default"
    //     className="w-full bg-white text-[#7d6adf] hover:bg-[#7d6adf] hover:text-white"
    //   >
    //     Registrer deg
    //   </Button>
    // </div>
  );
};

export default BecomeSeller;
