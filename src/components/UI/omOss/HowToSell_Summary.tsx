import Image from "next/image";
import Link from "next/link";
import LesMer from "@/components/common/buttons/LesMer";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

const HowToSell_Summary = () => {
  return (
    <div className="flex flex-col gap-8 py-6 text-center">
      <p className="text-xl font-semibold text-gray-800">
        Selge klær på Minihjørne.no?
      </p>
      <div>
        <div className="flex flex-col items-center rounded-md p-6 ">
          <Image
            src="/account.svg"
            alt="Lag en bruker"
            className="mb-4 max-w-80 rounded"
            width={150}
            height={150}
          />
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            1. Lag en bruker
          </h2>
          <p className="text-sm text-gray-600">
            Lag deg en bruker hos oss, helt gratis.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <ArrowDown size={26} color="gray" />
      </div>

      <div>
        {/* Register Clothes Section */}
        <div className="flex flex-col items-center rounded-md p-6 ">
          <Image
            src="/register.svg"
            alt="Registrer klærne"
            className="mb-4 max-w-80 rounded"
            width={150}
            height={150}
          />
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            2. Registrer klærne
          </h2>
          <p className="text-sm text-gray-600">
            Ta bilder av plaggene du vil selge, last opp og registrer dine klær.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <ArrowDown size={26} color="gray" />
      </div>

      {/* Delivery Section */}
      <div>
        <div className="flex flex-col items-center rounded-md p-6 ">
          <Image
            src="/deliver.svg"
            alt="Levering"
            className="mb-4 max-w-80 rounded"
            width={150}
            height={150}
          />
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            3. Levering
          </h2>
          <p className="text-sm text-gray-600">
            Lever klærne direkte til oss eller send dem med posten. Når vi har
            mottatt dine produkter, publiserer vi dem på nettsiden.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center">
        <LesMer href="/om-oss/selvregistrering" />
        <Link
          className="mt-4 flex w-60 justify-center rounded-lg bg-brand-400 px-4 py-4 text-white"
          href="/auth"
        >
          Prøv oss, helt gratis!
        </Link>
      </div>
    </div>
  );
};

export default HowToSell_Summary;
