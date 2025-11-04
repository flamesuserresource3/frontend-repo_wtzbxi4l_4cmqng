import { MapPin, Instagram } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-zinc-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-emerald-600 text-white grid place-items-center font-semibold">DL</div>
          <div>
            <p className="text-sm text-zinc-500 leading-none">Duta Pariwisata</p>
            <h1 className="text-base sm:text-lg font-semibold tracking-tight">Lombok Timur</h1>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#beranda" className="text-zinc-700 hover:text-emerald-600 transition-colors">Beranda</a>
          <a href="#profil" className="text-zinc-700 hover:text-emerald-600 transition-colors">Profil</a>
          <a href="#destinasi" className="text-zinc-700 hover:text-emerald-600 transition-colors">Destinasi</a>
          <a href="#kontak" className="text-zinc-700 hover:text-emerald-600 transition-colors">Kontak</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-zinc-100 text-zinc-600 hover:text-emerald-600 transition"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#destinasi"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-md text-sm transition"
          >
            <MapPin size={18} /> Jelajah
          </a>
        </div>
      </nav>
    </header>
  );
}
