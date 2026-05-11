"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteNav } from "@/lib/site-content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo/holmoloppet-logo-small.png"
            alt="Holmöloppet"
            width={160}
            height={36}
            priority
            className="h-auto w-40"
          />
        </Link>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
          className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-900 md:hidden"
        >
          Meny
        </button>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {siteNav.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#0074b9]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="hover:text-[#0074b9]">
                {item.label}
              </Link>
            ),
          )}
          <Link href="/anmalan" className="cta-button">
            Anmäl dig
          </Link>
        </nav>
      </div>

      {isOpen && (
        <nav id="mobile-menu" className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {siteNav.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#0074b9]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#0074b9]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link href="/anmalan" className="cta-button w-fit" onClick={() => setIsOpen(false)}>
              Anmäl dig
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
