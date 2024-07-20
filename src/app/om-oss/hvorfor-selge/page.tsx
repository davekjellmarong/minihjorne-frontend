import Header from "@/components/features/omOss/Header";
import Step from "@/components/features/omOss/Step";
import React from "react";

const page = () => {
  return (
    <>
      <Header text="Hvorfor selge klær hos Minihjørne" />
      <p className="pb-6 text-center text-2xl">
        Finn.no, Loppeliten eller Minihjørne?
      </p>
      <p>
        Når det gjelder salg av barneklær, har man hovedsakelig hatt to metoder
        å velge mellom. Den ene er en online kjøp og salg plattform, som for
        eksempel Finn.no og Tise. Den andre er fysiske butikker som tar imot
        klærne dine og tilbyr deg din egen stand i butikken. Begge disse
        metodene har sine fordeler og ulemper. La oss ta en nærmere titt.
      </p>
      <div className="my-4">
        <Step header="Finn.no og Tise" description="" />
        <p>
          Dette er hvordan de fleste selger klærne sine, og begge er veldig
          populære av gode grunner. Men det er noen ting å huske på:
        </p>
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Prisforhandlinger:</b> Du må ofte forhandle om pris.
          </li>
          <li>
            <b>Betaling:</b> Du må håndtere betalingen selv.
          </li>
          <li>
            <b>Frakt:</b> Du må ordne med frakt.
          </li>
          <li>
            <b>Returer og klager:</b> Du er ansvarlig for returer og klager.
          </li>
          <li>
            <b>Kommunikasjon med potensielle kjøpere:</b> Du må selv håndtere
            kommunikasjonen.
          </li>
          <li>
            <b>Samle småkjøp:</b> Ved kjøp av enkeltplagg til lav pris kan
            fraktkostnadene raskt bli høye, da hver vare ofte har separate
            fraktkostnader.
          </li>
          <li>
            <b>Filtrering og søking:</b> Ikke optimalt for barneklær. For
            eksempel kan plagg som body og vinterdress mangle kategorier og være
            vanskelige å filtrere og søke etter.
          </li>
        </ul>
        <p className="my-4">
          Og husk at disse trinnene må gjentas for hvert plagg du vil selge.
          Hvis du har 40 plagg til salgs, kan dette bli ganske tidkrevende.
        </p>
      </div>
      <div className="my-4">
        <Step header="Fysiske butikker (f.eks. Loppeliten)" description="" />
        <p>
          Dette er en ny trend som har kommet til Norge, der fysiske butikker
          tar imot klærne dine og selger dem for deg. Dette er en flott tjeneste
          som løser flere av utfordringene med online plattformer, men det er
          også noen ting å tenke på:
        </p>
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Kø:</b> Kan variere, men i Oslo kan det ta opptil 1-2 måneder.
          </li>
          <li>
            <b>Begrenset antall plagg:</b> De fleste butikker tar imot et
            begrenset antall plagg.
          </li>
          <li>
            <b>Sortering av plagg i butikken:</b> Når du skal kjøpe en
            vinterdress i størrelse 90, må du ofte lete gjennom hele butikken.
          </li>
          <li>
            <b>Rekkevidde:</b> Butikken når kun kunder som er geografisk nær
            butikken.
          </li>
        </ul>
      </div>
      <div>
        <Step header="Minihjørne" description="" />
        <p>
          Minihjørne kombinerer det beste fra begge verdener. Vi er en online
          plattform som tar imot klærne dine og selger dem for deg. La oss se
          nærmere på alle punktene ovenfor:
        </p>
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Prisforhandlinger:</b> Vi tilbyr faste priser, så du slipper å
            forhandle.
          </li>
          <li>
            <b>Betaling:</b> Vi tar oss av betalingen for deg.
          </li>
          <li>
            <b>Frakt:</b> Vi håndterer frakten, så du trenger ikke å tenke på
            det.
          </li>
          <li>
            <b>Returer og klager:</b> Vi tar oss av dette, så du kan fokusere på
            andre ting.
          </li>
          <li>
            <b>Kommunikasjon med potensielle kjøpere:</b> Det er ingen
            kommunikasjon med kunder hos oss.
          </li>
          <li>
            <b>Filtrering og søking:</b> Vi har kategorier for alle barneklær
            som gjør det enkelt å søke og filtrere.
          </li>
          <li>
            <b>Samle småkjøp:</b> Kunder kan legge til flere plagg i en
            bestilling, noe som øker salgsmulighetene.
          </li>
          <li>
            <b>Kø:</b> Ingen kø hos oss. Dine klær blir lagt ut for salg med en
            gang.
          </li>
          <li>
            <b>Begrenset antall plagg:</b> Vi har ingen begresninger på antall
            plagg du kan selge.
          </li>
          <li>
            <b>Sortering av plagg i butikken:</b> Vi har søkefunksjoner som gjør
            det enkelt for kundene å finne det de leter etter.
          </li>
          <li>
            <b>Rekkevidde:</b> Vi har kunder over hele Norge.
          </li>
        </ul>
      </div>
    </>
  );
};
export default page;
