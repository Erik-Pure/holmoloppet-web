export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type QuickLink = {
  href: string;
  title: string;
  text: string;
};

/** Delas mellan /pm och /resa-boende (transport, parkering, boende, service vid vistelse). */
export const sharedTravelStayContent = {
  transport: {
    paragraphs: [
      "Ta dig gärna ut till ön dag eller dagar innan. Har du egen båt är du välkommen till gästhamnen. För ett hållbart resande till färjeläget i Norrfjärden kan du ta dig med buss eller cykel. Tar du bil, samåk gärna med dina löparvänner.",
      "Väljer du att åka ut med färjan på tävlingsdagen, se till att vara i god tid. Det går två ordinarie turer, se Trafikverkets hemsida. Vid fullsatt färja (159 passagerare) vänder den direkt för att hämta resterande. Alla deltagare bör oavsett hinna till start i god tid.",
    ],
  },
  parking: {
    text: "Gratis parkeringsplatser finns på fastlandssidan vid färjeläget i Norrfjärden.",
  },
  accommodation: {
    paragraphs: [
      "Vi rekommenderar deltagare att komma ut innan tävlingsdagen. Det finns gott om tältplatser. Vill man bo under tak, sök boende via visitholmon.com.",
    ],
    linkHref: "https://www.visitholmon.com",
    linkLabel: "Besök visitholmon.com",
  },
  changingRooms: {
    paragraphs: [
      "Vi har tyvärr inte tillgång till omklädningsrum eller duschar. Toaletter och viss omklädningsmöjlighet finns dock i anslutning till hamnområdet. Havet är ofta varmt så här års, särskilt efter loppet, så ta gärna med badkläder.",
    ],
  },
} as const;

export const siteNav: NavItem[] = [
  { label: "Banor", href: "/banor-klasser" },
  { label: "Info", href: "/pm" },
  { label: "Resa & boende", href: "/resa-boende" },
  { label: "Resultat", href: "/resultat" },
  { label: "Media", href: "/media" },
  {
    label: "Shop",
    href: "https://wearhaus.se/sv/publika-klubbshopar/klubbshop-holmons-utvecklingsforum-holmoloppet/",
    external: true,
  },
  { label: "Kontakt", href: "/kontakt" },
];

export const homeQuickLinks: QuickLink[] = [
  {
    href: "/anmalan",
    title: "Anmälan",
    text: "Säkra din plats till Holmöloppet 11 juli 2026. 16 km, 7 km eller barnklass 2 km.",
  },
  {
    href: "/pm",
    title: "Info",
    text: "All praktisk information om tävlingsdagen, tider, regler, service och säkerhet.",
  },
  {
    href: "/resa-boende",
    title: "Resa & boende",
    text: "Planera resan till Holmön med transporttips, parkering och boendealternativ.",
  },
  {
    href: "/banor-klasser",
    title: "Banor & klasser",
    text: "Se kartor och bansträckning för samtliga klasser, med länkar till Strava-segment.",
  },
  {
    href: "/resultat",
    title: "Resultat",
    text: "Hitta årets resultat och bläddra i tidigare års resultatarkiv.",
  },
  {
    href: "/media",
    title: "Media",
    text: "Reklamfilmer, bildgalleri och material från tidigare år.",
  },
];

// Placeholder for future Sanity integration.
// Replace static exports above with CMS data in one place.
