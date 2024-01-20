"use client";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import HomeHeroImage from "@/components/heroImage/HomeHeroImage";
import Link from "next/link";

export default function Home() {
  useAutoLogIn();

  return (
    <div>
      <HomeHeroImage />
      <div className="flex justify-around my-10">
        <Link href="/produkter?kjønn=gutt">
          <div className="bg-boyOutM h-[250px] bg-cover rounded-lg cursor-pointer">
            <div className="backdrop-brightness-[0.7] h-full w-[175px] flex items-center justify-center hover:backdrop-brightness-100">
              <h3 className="text-lg text-white font-semibold">Gutt</h3>
            </div>
          </div>
        </Link>
        <Link href="/produkter?kjønn=jente">
          <div className="bg-girlBackM h-[250px] bg-cover rounded-lg cursor-pointer">
            <div className="backdrop-brightness-[0.7] h-full w-[175px] flex items-center justify-center hover:backdrop-brightness-100">
              <h3 className="text-lg text-white font-semibold">Jente</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
