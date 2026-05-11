import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-wrap py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Image
              src="/logo/holmoloppet-logo.png"
              alt="Holmöloppet"
              width={360}
              height={120}
              className="h-14 w-auto"
            />
            <p className="mt-3 text-sm text-slate-600">
              Löpning och naturupplevelse på Holmön. Nästa lopp arrangeras 11 juli 2026.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Snabblänkar
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/anmalan" className="hover:text-[#0074b9]">
                  Anmälan
                </Link>
              </li>
              <li>
                <Link href="/pm" className="hover:text-[#0074b9]">
                  Info
                </Link>
              </li>
              <li>
                <Link href="/resa-boende" className="hover:text-[#0074b9]">
                  Resa & boende
                </Link>
              </li>
              <li>
                <Link href="/resultat" className="hover:text-[#0074b9]">
                  Resultat
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Kontakt</h3>
            <p className="mt-3 text-sm text-slate-600">
              E-post:{" "}
              <a className="text-[#0074b9] hover:text-[#005a91]" href="mailto:info@holmoloppet.se">
                info@holmoloppet.se
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
