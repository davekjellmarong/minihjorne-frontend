import Image from "next/image";
import React from "react";

const OmOss = () => {
  return (
    <>
      <div className="flex flex-col items-center py-14 gap-6">
        <h1 className="text-3xl text-center px-10">
          La oss gjøre gjenbruk gøy og rimelig
        </h1>
        <Image
          className="w-full"
          src="/klær-gulvet.jpg"
          alt="logo"
          width={350}
          height={350}
        />
      </div>
      <div className="flex flex-col items-center px-10 gap-10 ">
        <div className="p">
          <div>
            <p className="text-purple-700 font-light text-sm">VÅR HISTORIE</p>
            <h2 className="text-2xl">
              En blanding av Finn.no og kjøp & salg butikker
            </h2>
          </div>
          <Image
            className="rounded-lg w-full"
            src="/bretter-forklet.jpg"
            alt="logo"
            width={350}
            height={350}
          />
          <p>
            Velkommen til Minihjørnet, ditt foretrukne reisemål for en
            fantastisk verden av barneklær og tilbehør. Hos oss handler vi ikke
            bare om å kle barna dine, men om å gi dem en unik stil og uttrykk
            som passer til deres personlighet. Vi tror på å skape magiske
            øyeblikk gjennom nøye kuraterte kolleksjoner av klær, leker og
            tilbehør som kombinerer komfort, kvalitet og estetikk. Vårt utvalg
            er plukket med omhu for å tilby deg det beste innen barnemote og
            design.
          </p>
          <br />
          <p>
            Minihjørnet er mer enn bare en butikk; det er et fellesskap av
            foreldre som deler lidenskapen for å kle opp barna sine med omtanke.
            Vår dedikerte team jobber hardt for å gi deg en sømløs
            handleopplevelse, fra trendy antrekk til leker som stimulerer
            fantasien. Vi legger vekt på å tilby ikke bare klær, men historier
            gjennom hvert plagg, og vi inviterer deg til å være en del av dette
            eventyret.
          </p>
        </div>
        <div>
          <p className="text-purple-700 font-light text-sm">HVEM ER VI?</p>
          <h2 className="text-2xl">Vi er foreldre som liker gjenbruk</h2>
          <Image
            src="/sokker-gulv.jpg"
            alt="logo"
            width={350}
            height={350}
            className="rounded-lg w-full"
          />
          <p>
            Vi er et dedikert team hos Minihjørnet, sammensatt av engasjerte
            enkeltpersoner som deler en felles kjærlighet for barnemote og
            foreldreskap. Vår visjon er å skape en unik plattform der
            kvalitetsklær og tilbehør kombineres med en personlig og varm
            kjøpeopplevelse. Vi tror på å bygge et fellesskap som verdsetter
            barns glede, utforsker kreativitet og deler entusiasmen for å skape
            minneverdige øyeblikk.
          </p>
          <br />
          <p>
            Vårt team er dedikert til å kuratere nøye utvalgte kolleksjoner, der
            hver vare gjenspeiler våre verdier om komfort, stil og lekenhet. Vi
            forstår at hvert barn er unikt, og derfor legger vi vekt på å tilby
            et variert utvalg som appellerer til ulike smaker og personligheter.
            Hos Minihjørnet tror vi på å være mer enn bare en butikk; vi er dine
            medreisende på reisen gjennom barndommens magi.
          </p>
        </div>
      </div>
    </>
  );
};

export default OmOss;
