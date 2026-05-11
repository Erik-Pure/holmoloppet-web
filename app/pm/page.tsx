import Link from "next/link";

import { sharedTravelStayContent } from "@/lib/site-content";

export default function PmPage() {
  return (
    <main className="section-wrap">
      <p className="text-sm uppercase tracking-[0.25em] text-[#0074b9]">Info</p>
      <h1 className="section-title mt-3">Info till Holmöloppet lördag 11 juli 2026</h1>
      <p className="mt-6 max-w-3xl text-slate-600">
        Plats: Byviken Holmön. Här finns all praktisk information inför
        tävlingsdagen.
      </p>

      <div className="mt-8 card">
        <p className="text-slate-700">
          Anmälan görs via vår anmälningssida. Ordinarie pris gäller fram till och
          med 6 juli. Därefter gäller förhöjd avgift med 100 kr (alltså 400 kr)
          till och med tävlingsdagen, lördag 11 juli. Vill man promenera anmäler man
          sig till klass 7 km.
        </p>
        <a
          href="https://dinkurs.se/holmoloppet2026"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-[#0074b9] hover:text-[#005a91]"
        >
          Anmälan görs här
        </a>
      </div>

      <div className="mt-6 grid gap-6">
        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">Klasser</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>16 km dam och herr, 300 kr</li>
            <li>7 km dam och herr, 300 kr</li>
            <li>2 km barn 7-12 år, gratis</li>
          </ul>
        </section>

        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">Schema</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>11:00-13:00 Nummerlappsutdelning och efteranmälan vid båtmuseet.</li>
            <li>13:15 Kort information ges vid startområdet på kajen.</li>
            <li>13:30 Gemensam start klass 16 km och 7 km på kajen i Byviken.</li>
            <li>13:40 Start barnklassen.</li>
            <li>
              Målgång och sekretariat vid Holmöns lanthandel där saft och bulle
              serveras efter genomfört lopp.
            </li>
            <li>16:00 Prisutdelning sker i direkt anslutning till målområdet.</li>
          </ul>
        </section>

        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">
            Tävlingsbanorna
          </h2>
          <p className="mt-4 text-slate-700">
            Tävlingsbanorna sträcker sig cirka 16, 7 eller 2 km och är rikligt
            markerade med snitslar. Skyltar med svarta pilar på vit bakgrund sitter
            uppe där banan byter riktning. Under tävlingsdagen kommer
            avspärrningsband och funktionärer att underlätta för de tävlande vid
            svårare passager.
          </p>
          <p className="mt-3 text-slate-700">
            Klass 7 km och 16 km springer samma slinga de första 6 km. Därefter
            beger sig de som springer 16 km söderut. Efter cirka 12 km på den längre
            slingan bjuds löparna på ett kortare vad, cirka 50 meter. Botten består
            av sand.
          </p>
        </section>

        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">
            Tidtagning och resultat
          </h2>
          <p className="mt-4 text-slate-700">
            Tidtagning sker digitalt med chip. Resultat kommer att anslås på
            lanthandelns anslagstavla, på holmoloppet.se under kvällen samt i
            Västerbottens-Kuriren och Folkbladet.
          </p>
        </section>

        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">
            Vätskekontroll och sjukvårdsutrustning
          </h2>
          <p className="mt-4 text-slate-700">
            Vätskekontroller kommer att finnas, minst två stycken: en efter cirka
            6 km och en efter cirka 13 km. Vid vätskekontrollerna finns vatten och
            sportdryck. Lättare sjukvårdsutrustning kommer att finnas på plats.
          </p>
        </section>

        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">
            Bruten tävling
          </h2>
          <p className="mt-4 text-slate-700">
            Deltagare som bryter anmäler detta till sekretariatet/tävlingsledningen.
          </p>
        </section>

        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">Parkering</h2>
          <p className="mt-4 text-slate-700">{sharedTravelStayContent.parking.text}</p>
        </section>

        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">Transport</h2>
          {sharedTravelStayContent.transport.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "mt-4 text-slate-700" : "mt-3 text-slate-700"}>
              {paragraph}
            </p>
          ))}
        </section>

        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">
            Omklädning, dusch och toaletter
          </h2>
          {sharedTravelStayContent.changingRooms.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-slate-700">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">
            Värdeförvaring
          </h2>
          <p className="mt-4 text-slate-700">
            Värdeförvaring finns i anslutning till sekretariatet. Värdeföremål
            återlämnas mot uppvisande av nummerlapp.
          </p>
        </section>

        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">Priser</h2>
          <p className="mt-4 text-slate-700">
            Priser delas ut till vinnarna i respektive klass och lottas även ut bland
            övriga deltagare.
          </p>
        </section>

        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">Boende</h2>
          {sharedTravelStayContent.accommodation.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-slate-700">
              {paragraph}
            </p>
          ))}
          <a
            href={sharedTravelStayContent.accommodation.linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-[#0074b9] hover:text-[#005a91]"
          >
            {sharedTravelStayContent.accommodation.linkLabel}
          </a>
        </section>

        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">
            Tävlingsledare
          </h2>
          <p className="mt-4 text-slate-700">
            Vid frågor kontakta tävlingsledningen på{" "}
            <a href="mailto:info@holmoloppet.se" className="text-[#0074b9] hover:text-[#005a91]">
              info@holmoloppet.se
            </a>
            .
          </p>
        </section>

        <section className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">
            Viktig information
          </h2>
          <p className="mt-4 text-slate-700">
            Allt tävlande sker på egen risk. Ingen återbetalning av anmälningsavgift.
            Vi rekommenderar Svedeas försäkring Startklar som täcker motions- och
            tävlingslopp i Sverige under ett helt år. I Startklar ingår också en
            olycksfallsförsäkring.
          </p>
          <a
            href="https://www.startklar.nu/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-[#0074b9] hover:text-[#005a91]"
          >
            Läs mer på startklar.nu
          </a>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/anmalan" className="cta-button">
          Anmäl dig
        </Link>
        <Link
          href="/resa-boende"
          className="rounded-full border border-slate-300 px-5 py-2.5 font-semibold text-slate-900 transition hover:border-[#0074b9] hover:text-[#0074b9]"
        >
          Resa & boende
        </Link>
      </div>
    </main>
  );
}
