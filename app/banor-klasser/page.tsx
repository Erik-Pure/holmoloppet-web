import Image from "next/image";

const courses = [
  {
    name: "2 km barnklass",
    details: "En kort och rolig bana för barn 7-12 år.",
    strava: "https://www.strava.com/segments/37236516",
    map: "/maps/klass2.png",
    alt: "Karta för 2 km barnklass",
  },
  {
    name: "7 km",
    details: "Snabb och varierad bana genom by och naturmiljö.",
    strava: "https://www.strava.com/segments/37236543",
    map: "/maps/klass7.png",
    alt: "Karta för 7 km",
  },
  {
    name: "16 km",
    details: "Klassisk Holmöloppssträcka med längre naturpartier.",
    strava: "https://www.strava.com/segments/37236557",
    map: "/maps/klass16.png",
    alt: "Karta för 16 km",
  },
  {
    name: "16 km - norra delen",
    details: "Detaljkarta för den norra delen av 16 km-banan.",
    map: "/maps/klass16-norra.png",
    alt: "Karta 16 km norra delen",
  },
  {
    name: "16 km - södra delen",
    details: "Detaljkarta för den södra delen av 16 km-banan.",
    map: "/maps/klass16-sodra.png",
    alt: "Karta 16 km södra delen",
  },
];

export default function BanorKlasserPage() {
  return (
    <main className="section-wrap">
      <p className="text-sm uppercase tracking-[0.25em] text-[#0074b9]">Loppet</p>
      <h1 className="section-title mt-3">Banor & klasser</h1>
      <p className="mt-6 max-w-3xl text-slate-600">
        Alla klasser startar vid väntkuren på kajen i Byviken och går i mål vid
        affären. Här hittar du kartor och en snabb sammanfattning av banorna.
      </p>

      <div className="mt-10 space-y-6">
        {courses.map((course) => (
          <article key={course.name} className="rounded-2xl border border-black bg-black p-6 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-start">
              <div>
                <h2 className="font-display text-4xl font-bold uppercase text-[#fec901]">
                  {course.name}
                </h2>
                <p className="mt-3 text-[#fec901]/85">{course.details}</p>
                {"strava" in course && course.strava ? (
                  <a
                    href={course.strava}
                    className="mt-5 inline-block text-sm font-semibold text-white hover:text-[#fec901]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visa Strava-segment
                  </a>
                ) : null}
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#fec901]/30">
                <Image
                  src={course.map}
                  alt={course.alt}
                  width={1400}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

