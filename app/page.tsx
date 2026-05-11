import Link from "next/link";
import Image from "next/image";

const distances = [
  { value: "16", unit: "KM", label: "Dam & herr" },
  { value: "7", unit: "KM", label: "Dam & herr" },
  { value: "2", unit: "KM", label: "Barn 7-12 år" },
];

const sponsorAssetVersion = "2026-05-08";

const sponsors = [
  {
    name: "Godishuset Umeå",
    href: "https://www.facebook.com/people/Godishuset-Ume%C3%A5/100054283940200/",
    src: `/sponsors/sponsor-godishuset---aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Blb3BsZS9Hb2Rpc2h1c2V0LVVtZSVDMyVBNS8xMDAwNTQyODM5NDAyMDAv---.png?v=${sponsorAssetVersion}`,
  },
  {
    name: "Intersport",
    href: "https://www.intersport.se/vara-butiker/umea-mariedal",
    src: `/sponsors/sponsor-intersport---aHR0cHM6Ly93d3cuaW50ZXJzcG9ydC5zZS92YXJhLWJ1dGlrZXIvdW1lYS1tYXJpZWRhbA==---.png?v=${sponsorAssetVersion}`,
  },
  {
    name: "Luma Teamwear",
    href: "https://lumateamwear.se/",
    src: `/sponsors/sponsor-luma---aHR0cHM6Ly9sdW1hdGVhbXdlYXIuc2Uv---.png?v=${sponsorAssetVersion}`,
  },
  {
    name: "Naturkompaniet",
    href: "https://www.naturkompaniet.se/",
    src: `/sponsors/sponsor-naturkompaniet---aHR0cHM6Ly93d3cubmF0dXJrb21wYW5pZXQuc2Uv---.png?v=${sponsorAssetVersion}`,
  },
  {
    name: "Novas Inn Holmön",
    href: "https://www.novasinn.se/novas-inn-holmon",
    src: `/sponsors/sponsor-novas---aHR0cHM6Ly93d3cubm92YXNpbm4uc2Uvbm92YXMtaW5uLWhvbG1vbg==---.png?v=${sponsorAssetVersion}`,
  },
  {
    name: "Pure",
    href: "https://pure.se",
    src: `/sponsors/sponsor-pure---aHR0cHM6Ly9wdXJlLnNl---.png?v=${sponsorAssetVersion}`,
  },
  {
    name: "Team Sportia Umeå",
    href: "https://umea.teamsportia.se/",
    src: `/sponsors/sponsor-team-sportia---aHR0cHM6Ly91bWVhLnRlYW1zcG9ydGlhLnNlLw==---.png?v=${sponsorAssetVersion}`,
  },
];

const infoHighlights = [
  {
    icon: "clock",
    title: "Schema",
    text: "Nummerlappsutdelning, starter, målgång och prisutdelning samlat på ett ställe.",
  },
  {
    icon: "document",
    title: "Regler",
    text: "Viktiga riktlinjer före och under loppet, inklusive säkerhet och ansvar.",
  },
  {
    icon: "map",
    title: "Tävlingsbanor",
    text: "Banlängder, markeringar, vägval och information om passager längs sträckan.",
  },
  {
    icon: "ferry",
    title: "Transport & service",
    text: "Resa till Holmön, parkering, vätskekontroller, omklädning och boende.",
  },
];

function InfoIcon({ type }: { type: string }) {
  const commonProps = {
    className: "h-6 w-6 text-[#0074b9]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (type === "clock") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </svg>
    );
  }

  if (type === "document") {
    return (
      <svg {...commonProps}>
        <path d="M8 3h6l4 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
        <path d="M14 3v4h4" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    );
  }

  if (type === "map") {
    return (
      <svg {...commonProps}>
        <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
        <path d="M9 4v14M15 6v14" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M3 13c4 0 6-2 9-2s5 2 9 2" />
      <path d="M4 15h16" />
      <path d="M7 11.5V9.5a2.5 2.5 0 0 1 5 0v2" />
      <path d="M12 9.5V8.7a2.8 2.8 0 0 1 5.6 0v2.8" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative min-h-[78vh] overflow-hidden bg-white">
        <div className="absolute inset-0 bg-white">
          <iframe
            className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] min-h-[56.25vw] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/HlFPI77qavY?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&playlist=HlFPI77qavY&start=25&showinfo=0&rel=0"
            title="Holmöloppet bakgrundsvideo"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
          {/* Dark overlay for readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-transparent" />
          {/* White fade into page background (no hard seam) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
        </div>

        <div className="section-wrap relative z-10 flex min-h-[78vh] flex-col justify-center py-24">
          <h1 className="font-display max-w-4xl whitespace-nowrap text-6xl font-bold uppercase leading-none text-white md:text-8xl">
            11 juli 2026
          </h1>
          <p className="mt-4 text-xl font-semibold text-white md:text-3xl">
            Löp och upplev natursköna Holmön
          </p>
          <p className="mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
            Holmöloppet är ett lopp med hav, skog och bymiljö i fokus. Välj 16 km
            eller 7 km, eller spring barnklassen på 2 km.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/anmalan" className="cta-button">
              Anmäl dig
            </Link>
            <Link
              href="/pm"
              className="rounded-full border border-white/40 px-5 py-2.5 font-semibold text-white transition hover:border-[#0074b9] hover:text-[#0074b9]"
            >
              Info
            </Link>
          </div>
        </div>
      </section>

      <section className="section-wrap pt-10">
        <div className="space-y-14 md:space-y-20">
          <div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.src}
                  href={sponsor.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-20 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 hover:border-[#0074b9]/40"
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.name}
                    width={220}
                    height={80}
                    unoptimized
                    className="max-h-12 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <article className="card">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <h3 className="font-display text-4xl font-bold uppercase text-slate-900 md:text-5xl">
                  Banor & klasser
                </h3>
                <p className="mt-4 max-w-xl text-slate-600">
                  Jämför distanserna och välj den sträcka som passar dig bäst.
                  Härifrån går du vidare till kartor, banbeskrivningar och
                  Strava-segment.
                </p>
                <Link
                  href="/banor-klasser"
                  className="mt-6 inline-flex w-fit text-sm font-semibold text-[#0074b9] hover:text-[#005a91]"
                >
                  Till banor & klasser
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {distances.map((distance) => (
                  <div
                    key={distance.value}
                    className="flex h-80 min-w-0 flex-col items-center rounded-2xl border border-black/80 bg-black p-6 shadow-sm"
                  >
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#fec901]/85 md:text-base">
                      {distance.label}
                    </p>
                    <p className="font-display mt-8 text-center whitespace-nowrap text-[6rem] leading-none text-[#fec901] sm:text-[6.8rem] md:text-[7.6rem] lg:text-[8.2rem] xl:text-[8.8rem]">
                      {distance.value}
                    </p>
                    <p className="font-display mt-2 text-center text-4xl leading-none text-[#fec901] md:text-5xl">
                      {distance.unit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <section className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="font-display text-4xl font-bold uppercase text-slate-900 md:text-5xl">
                  Info i korthet
                </h3>
                <p className="mt-3 max-w-3xl text-slate-600">
                  Från schema och regler till banupplägg och praktisk information.
                </p>
              </div>
              <Link href="/pm" className="inline-flex w-fit text-sm font-semibold text-[#0074b9] hover:text-[#005a91]">
                Läs all information
              </Link>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="grid sm:grid-cols-2">
                {infoHighlights.map((item, index) => (
                  <div
                    key={item.title}
                    className={`p-7 md:p-8 ${
                      index % 2 === 0 ? "sm:border-r sm:border-slate-200" : ""
                    } ${index < 2 ? "border-b border-slate-200" : ""}`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0074b9]/30 bg-[#0074b9]/10">
                      <InfoIcon type={item.icon} />
                    </div>
                    <h4 className="mt-4 font-display text-3xl uppercase text-slate-900">{item.title}</h4>
                    <p className="mt-3 text-slate-600">{item.text}</p>
                    <Link
                      href="/pm"
                      className="mt-4 inline-flex text-sm font-semibold text-[#0074b9] hover:text-[#005a91]"
                    >
                      Läs mer
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div>
              <h3 className="font-display text-4xl font-bold uppercase text-slate-900 md:text-5xl">
                Resa & boende
              </h3>
              <p className="mt-3 max-w-3xl text-slate-600">
                Planera transport, färjetider och boende i god tid inför tävlingshelgen.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="grid lg:grid-cols-[1fr_1.1fr]">
                <div className="relative min-h-[360px] overflow-hidden border-b border-slate-200 lg:border-b-0 lg:border-r">
                  <Image
                    src="/images/holmon.jpg"
                    alt="Holmön med hav och natur"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <p className="absolute bottom-5 left-5 right-5 text-3xl font-bold leading-tight text-white">
                    Smidig resa och vistelse på Holmön
                  </p>
                </div>

                <div className="grid sm:grid-cols-2">
                  <div className="p-7 md:p-8 sm:border-r sm:border-slate-200 border-b border-slate-200">
                    <h4 className="text-3xl text-slate-900">Transport</h4>
                    <p className="mt-3 text-slate-600">
                      Färjetider, parkering i Norrfjärden och tips för att resa hållbart.
                    </p>
                  </div>
                  <div className="p-7 md:p-8 border-b border-slate-200">
                    <h4 className="text-3xl text-slate-900">Boende</h4>
                    <p className="mt-3 text-slate-600">
                      Tältplatser och boende under tak via lokala alternativ på Holmön.
                    </p>
                  </div>
                  <div className="p-7 md:p-8 sm:col-span-2">
                    <h4 className="text-3xl text-slate-900">Mer praktisk info</h4>
                    <p className="mt-3 text-slate-600">
                      Läs mer om resa, boende och hur du planerar din tävlingshelg.
                    </p>
                    <Link
                      href="/resa-boende"
                      className="mt-4 inline-flex rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-[#0074b9] hover:border-[#0074b9] hover:text-[#005a91]"
                    >
                      Till resa & boende
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <article className="relative overflow-hidden rounded-3xl border border-slate-200">
            <Image
              src="/images/holmonlopare.png"
              alt="Löpare i Holmöloppet"
              width={1920}
              height={720}
              className="h-[280px] w-full object-cover md:h-[320px]"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15" />

            <div className="absolute inset-0 flex items-start p-6 md:p-10">
              <div className="max-w-lg text-white">
                <h3 className="font-display text-5xl font-bold uppercase leading-none md:text-6xl">
                  Resultat
                </h3>
                <p className="mt-4 text-base text-white/90 md:text-lg">
                  Hitta årets resultat och bläddra vidare i resultatarkivet från tidigare år.
                </p>
                <Link
                  href="/resultat"
                  className="mt-12 inline-flex rounded-xl border border-white/50 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Se resultat
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-wrap border-t border-slate-200 pt-14">
        <div className="card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase text-slate-900">
              Anmälan är öppen
            </h2>
            <p className="mt-2 text-slate-600">
              Anmäl dig idag och säkra din startplats till sommarens lopp på Holmön.
            </p>
          </div>
          <Link href="/anmalan" className="cta-button w-fit">
            Till anmälan
          </Link>
        </div>
      </section>
    </main>
  );
}
