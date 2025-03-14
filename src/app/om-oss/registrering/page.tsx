import React from "react";
import Header from "@/components/features/omOss/Header";
import Image from "next/image";
import Step from "@/components/UI/Step";
import BottomLinks from "@/components/UI/omOss/BottomLinks";

export const metadata = {
  title: "Minihjørne - Registrering av produkter",
  description:
    "Lær hvordan du registrerer produkter på Minihjørne med noen enkle steg.",
};

const RegisteringProductsPage = () => {
  return (
    <>
      <Header text="Registrering av produkter" />
      <section className="flex flex-col gap-6">
        <p className="text-lg">
          Følg disse stegene for å registrere dine barneklær på Minihjørne:
        </p>
        <Step number="1" title="Ta bilder med telefonen">
          <p>Ta klare og detaljerte bilder av klærne med telefonen din.</p>
          <Image
            src="https://res.cloudinary.com/dylzaicv5/image/upload/v1726312151/StaticAssets/Registrering-1_uvtiqr.jpg"
            alt="Ta bilder med telefonen"
            width={600}
            height={400}
            className="mt-4 rounded-md"
          />
        </Step>
        <Step number="2" title="Gå til 'Min side' / 'Last opp'">
          <p>Naviger til «Min side» og velg «Last opp».</p>
          <Image
            src="https://res.cloudinary.com/dylzaicv5/image/upload/v1726312150/StaticAssets/Registrering-2_vwhyge.jpg"
            alt="Gå til 'Min side' / 'Last opp'"
            width={600}
            height={400}
            className="mt-4 rounded-md"
          />
        </Step>
        <Step number="3" title="Last opp bilder, velg opptil 3 per produkt">
          <p>
            Velg opptil 3 bilder per produkt for å gi kjøperne en god
            presentasjon av varen.
          </p>
          <Image
            src="https://res.cloudinary.com/dylzaicv5/image/upload/v1726312151/StaticAssets/Registrering-3_qqk9ej.jpg"
            alt="Last opp bilder"
            width={600}
            height={400}
            className="mt-4 rounded-md"
          />
        </Step>
        <Step number="4" title="Fyll ut informasjon om produktet">
          <p>
            Marker avkrysningsbokser for farge, plaggtype, tilstand, størrelse,
            pris, kjønn, og merke.
          </p>
          <Image
            src="https://res.cloudinary.com/dylzaicv5/image/upload/v1726312150/StaticAssets/Registrering-4_ahv5ur.jpg"
            alt="Fyll ut informasjon om produktet"
            width={600}
            height={400}
            className="mt-4 rounded-md"
          />
        </Step>
        <Step number="5" title="Trykk 'Lagre', og last opp neste produkt">
          <p>
            Når all informasjon er utfylt, trykk «Lagre» for å fullføre. Du kan
            deretter laste opp neste produkt.
          </p>
          <Image
            src="https://res.cloudinary.com/dylzaicv5/image/upload/v1726312150/StaticAssets/Registrering-5_w5uofu.jpg"
            alt="Trykk 'Lagre'"
            width={600}
            height={400}
            className="mt-4 rounded-md"
          />
        </Step>
      </section>

      <BottomLinks
        prevLink={{ to: "/om-oss/selvregistrering", text: "Selvregistrering" }}
        nextLink={{
          to: "/om-oss/full-service-pakke",
          text: "Full service pakke",
        }}
      />
    </>
  );
};

export default RegisteringProductsPage;
