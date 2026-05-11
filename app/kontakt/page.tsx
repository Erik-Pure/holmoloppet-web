export default function KontaktPage() {
  return (
    <main className="section-wrap">
      <p className="text-sm uppercase tracking-[0.25em] text-[#0074b9]">Kontakt</p>
      <h1 className="section-title mt-3">Kontakta Holmöloppet</h1>
      <p className="mt-6 max-w-3xl text-slate-600">
        Har du frågor om anmälan, tävlingsdagen, resa eller boende? Skicka ett mail
        så hjälper vi dig vidare.
      </p>

      <div className="mt-10 card max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">E-post</p>
        <a
          href="mailto:info@holmoloppet.se"
          className="mt-2 inline-block text-xl font-semibold text-[#0074b9] hover:text-[#005a91]"
        >
          info@holmoloppet.se
        </a>
      </div>
    </main>
  );
}
