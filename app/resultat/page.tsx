const results = [
  {
    year: "2025",
    href: "https://resultscui.active.com/events/Holm%C3%B6loppet2025",
    type: "Extern resultatsida",
  },
  {
    year: "2024",
    href: "/media/resultat/2024/Resultat.pdf",
    type: "PDF",
  },
  {
    year: "2023",
    href: "/media/resultat/2023/Resultat.pdf",
    type: "PDF",
  },
];

export default function ResultatPage() {
  return (
    <main className="section-wrap">
      <p className="text-sm uppercase tracking-[0.25em] text-[#0074b9]">Arkiv</p>
      <h1 className="section-title mt-3">Resultat</h1>
      <p className="mt-6 max-w-3xl text-slate-600">
        Här hittar du resultat från Holmöloppet. Senaste år visas först.
      </p>

      <div className="mt-10 grid gap-4">
        {results.map((result) => (
          <a
            key={result.year}
            href={result.href}
            className="card flex items-center justify-between hover:border-[#0074b9]/70"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h2 className="font-display text-3xl font-bold uppercase text-slate-900">
                {result.year}
              </h2>
              <p className="text-sm text-slate-500">{result.type}</p>
            </div>
            <span className="text-sm font-semibold text-[#0074b9]">Öppna</span>
          </a>
        ))}
      </div>
    </main>
  );
}
