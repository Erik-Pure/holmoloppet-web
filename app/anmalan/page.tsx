const prices = [
  "16 km dam och herr: 300 kr",
  "7 km dam och herr: 300 kr",
  "2 km barn 7-12 år: gratis",
];

export default function AnmalanPage() {
  return (
    <main className="section-wrap">
      <p className="text-sm uppercase tracking-[0.25em] text-[#0074b9]">Deltagande</p>
      <h1 className="section-title mt-3">Anmälan</h1>
      <p className="mt-6 max-w-3xl text-slate-600">
        Anmälan till Holmöloppet 2026 är öppen. Välj klass, fyll i dina uppgifter och
        bekräfta din plats.
      </p>

      <div className="mt-10 card">
        <h2 className="font-display text-2xl font-bold uppercase text-slate-900">Avgifter</h2>
        <ul className="mt-4 space-y-2 text-slate-600">
          {prices.map((price) => (
            <li key={price}>{price}</li>
          ))}
        </ul>
        <a
          className="cta-button mt-8 inline-block"
          href="https://dinkurs.se/holmoloppet2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gå till anmälan
        </a>
      </div>
    </main>
  );
}
