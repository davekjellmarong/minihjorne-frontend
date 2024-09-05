import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/features/omOss/Header";
import BottomLinks from "@/components/UI/omOss/BottomLinks";
import LinkButton from "@/components/common/buttons/LinkButton";
import SubHeader from "@/components/features/omOss/SubHeader";

export const metadata = {
  title: "Minihjørne - Hva er en Salgsprofil?",
  description:
    "Lær hva en salgsprofil er, og hvordan du kan bruke den til å selge dine barneklær på Minihjørne.",
};

const SalgsprofilPage = () => {
  const profiles = [
    {
      username: "Iselin",
      id: 3,
      url: "https://res.cloudinary.com/dylzaicv5/image/upload/v1725090918/StaticAssets/iselin_uxatfg.png",
    },
    {
      username: "Lina Mathilde Olsen",
      id: 4,
      url: "https://res.cloudinary.com/dylzaicv5/image/upload/v1725090918/StaticAssets/linemathilde_hzzcbm.png",
    },
    {
      username: "AnetteMari",
      id: 2,
      url: "https://res.cloudinary.com/dylzaicv5/image/upload/v1725090918/StaticAssets/anette_jubfqb.png",
    },
  ];

  return (
    <>
      <Header text="Hva er en Salgsprofil?" />

      <section className="">
        <p className="text-lg">
          En salgsprofil på Minihjørne er din personlige side hvor alle dine
          klær som er til salgs blir samlet. Her kan du som selger få en
          dedikert plass for å vise frem klærne dine på en profesjonell og
          tiltalende måte. Du kan enkelt tilpasse profilen ved å legge til en
          overskrift og en beskrivelse som gir potensielle kjøpere et innblikk i
          hvem du er og hva du selger. Dette gjør det enklere for kjøpere å
          finne og kjøpe produktene dine.
        </p>
        <div>
          <SubHeader>Eksempler på Salgsprofiler</SubHeader>
          <p className="text-lg">
            Nedenfor ser du tre eksempler på salgsprofiler fra våre selgere.
            Disse viser hvordan profilen din kan se ut og gir deg en idé om
            hvordan du kan presentere dine egne produkter.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center gap-6">
          {profiles.map((profile) => (
            <div key={profile.id} className="relative w-full">
              <LinkButton size="small" to={`/salgsprofiler/${profile.id}`}>
                {profile.username}
              </LinkButton>
              <Image
                src={profile.url}
                alt={`${profile.username}`}
                width={400}
                height={300}
                objectFit="cover"
                className="mx-auto"
              />
            </div>
          ))}
        </div>
      </section>

      <BottomLinks
        prevLink={{
          to: "/om-oss/full-service-pakke",
          text: "Full service pakke",
        }}
        nextLink={{ to: "/om-oss/levering", text: "Levere klær" }}
      />
    </>
  );
};

export default SalgsprofilPage;
