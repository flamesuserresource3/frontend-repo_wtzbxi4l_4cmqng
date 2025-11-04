import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="beranda" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-600 via-emerald-500 to-emerald-400" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-xs uppercase tracking-wider">Duta Pariwisata • Lombok Timur</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
              Pesona Alam, Budaya, dan Keramahan Lombok Timur
            </h2>
            <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed">
              Mengangkat potensi wisata dari kaki Rinjani hingga pesisir selatan. Mari jelajahi destinasi terbaik dan cerita di baliknya.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#destinasi" className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-zinc-100 px-4 py-2 rounded-md font-medium transition">
                <MapPin size={18} /> Lihat Destinasi
              </a>
              <a href="#profil" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md font-medium transition">
                Tentang Kami
              </a>
            </div>
          </div>
          <div className="">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <img
                src="https://images.unsplash.com/photo-1583391733954-8f2b5f3906d9?q=80&w=1600&auto=format&fit=crop"
                alt="Lombok Timur landscape"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-sm">
                Panorama Lombok Timur
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg className="block w-full text-white" viewBox="0 0 1440 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 64L60 58.7C120 53 240 43 360 48C480 53 600 75 720 74.7C840 75 960 53 1080 37.3C1200 21 1320 11 1380 5.3L1440 0V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V64Z" />
      </svg>
    </section>
  );
}
