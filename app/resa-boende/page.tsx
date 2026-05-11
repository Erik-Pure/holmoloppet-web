import { sharedTravelStayContent } from "@/lib/site-content";

export default function ResaBoendePage() {
  const { transport, parking, accommodation, changingRooms } = sharedTravelStayContent;

  return (
    <main className="section-wrap">
      <p className="text-sm uppercase tracking-[0.25em] text-[#0074b9]">Planera resan</p>
      <h1 className="section-title mt-3">Resa & boende</h1>
      <p className="mt-6 max-w-3xl text-slate-600">
        För att få en bra tävlingsupplevelse är det viktigt att planera resan i god
        tid. Holmön nås via färja, och vissa avgångar blir snabbt fullbokade under
        sommaren.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="card md:col-span-2">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">Transport</h2>
          {transport.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={index === 0 ? "mt-4 text-slate-700" : "mt-3 text-slate-700"}
            >
              {paragraph}
            </p>
          ))}
        </article>

        <article className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">Parkering</h2>
          <p className="mt-4 text-slate-700">{parking.text}</p>
        </article>

        <article className="card">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">Boende</h2>
          {accommodation.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-slate-700">
              {paragraph}
            </p>
          ))}
          <a
            className="mt-4 inline-block text-sm font-semibold text-[#0074b9] hover:text-[#005a91]"
            href={accommodation.linkHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {accommodation.linkLabel}
          </a>
        </article>

        <article className="card md:col-span-2">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">
            Omklädning, dusch och toaletter
          </h2>
          {changingRooms.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-slate-700">
              {paragraph}
            </p>
          ))}
        </article>

        <article className="card md:col-span-2">
          <h2 className="font-display text-3xl font-bold uppercase text-slate-900">För publik</h2>
          <p className="mt-4 text-slate-700">
            Ta gärna med familj och vänner. Holmön erbjuder natur, bad och fina
            utflyktsmöjligheter under tävlingshelgen.
          </p>
        </article>
      </div>
    </main>
  );
}
