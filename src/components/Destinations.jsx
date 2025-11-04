import { MapPin } from "lucide-react";

const DESTINATIONS = [
  {
    name: "Bukit Pergasingan",
    location: "Sembalun",
    image:
      "https://images.unsplash.com/photo-1607269901370-9f1a1e5fed3e?q=80&w=1600&auto=format&fit=crop",
    blurb:
      "Spot sunrise ikonik dengan panorama sawah Sembalun dan siluet Rinjani yang megah.",
  },
  {
    name: "Pantai Pink",
    location: "Sekaroh",
    image:
      "https://images.unsplash.com/photo-1519683109079-d5f539e1544a?q=80&w=1600&auto=format&fit=crop",
    blurb:
      "Pasir berwarna kemerahan yang unik, air sebening kristal, dan suasana tenang.",
  },
  {
    name: "Tiu Kelep & Sendang Gile",
    location: "Senaru",
    image:
      "https://images.unsplash.com/photo-1602526432607-b60fba269e9d?q=80&w=1600&auto=format&fit=crop",
    blurb:
      "Air terjun nan sejuk di kaki Rinjani, trek ramah pemula dengan pemandangan hijau.",
  },
];

export default function Destinations() {
  return (
    <section id="destinasi" className="py-16 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Destinasi Unggulan</h3>
            <p className="mt-2 text-zinc-600 max-w-2xl">
              Rangkuman tempat terbaik yang wajib kamu masukkan ke rencana perjalanan saat singgah di Lombok Timur.
            </p>
          </div>
          <a href="#kontak" className="hidden sm:inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium">
            Rekomendasi rute
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <article key={d.name} className="group rounded-xl overflow-hidden bg-white border border-zinc-200 hover:shadow-xl transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-black/50 text-white text-xs px-2 py-1 rounded-md">
                  <MapPin size={14} /> {d.location}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-lg">{d.name}</h4>
                <p className="mt-1 text-sm text-zinc-600 leading-relaxed">{d.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
