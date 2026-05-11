export default function MediaPage() {
  return (
    <main className="section-wrap">
      <p className="text-sm uppercase tracking-[0.25em] text-[#0074b9]">Media</p>
      <h1 className="section-title mt-3">Bilder & filmer</h1>
      <p className="mt-6 max-w-3xl text-slate-600">
        Ta del av filmer och bildmaterial från Holmöloppet.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <a
          href="https://youtu.be/HlFPI77qavY"
          className="card block hover:border-[#0074b9]/70"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="font-display text-2xl font-bold uppercase text-slate-900">Reklamfilm</h2>
          <p className="mt-3 text-slate-600">Se Holmöloppets officiella reklamfilm.</p>
        </a>
        <a
          href="https://photos.app.goo.gl/WGWQS61kaooC3zjw7"
          className="card block hover:border-[#0074b9]/70"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="font-display text-2xl font-bold uppercase text-slate-900">Bildgalleri</h2>
          <p className="mt-3 text-slate-600">Fler bilder från tidigare års lopp.</p>
        </a>
        <a
          href="https://youtube.com/@Holmoloppet"
          className="card block hover:border-[#0074b9]/70"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="font-display text-2xl font-bold uppercase text-slate-900">YouTube</h2>
          <p className="mt-3 text-slate-600">Fler filmer och uppdateringar från arrangören.</p>
        </a>
      </div>
    </main>
  );
}
