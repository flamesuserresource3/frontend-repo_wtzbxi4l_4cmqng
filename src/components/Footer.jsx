import { Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="kontak" className="bg-white border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-emerald-600 text-white grid place-items-center font-semibold">DL</div>
            <div>
              <p className="text-sm text-zinc-500 leading-none">Duta Pariwisata</p>
              <h2 className="text-base font-semibold">Lombok Timur</h2>
            </div>
          </div>
          <p className="mt-3 text-sm text-zinc-600 max-w-sm">
            Menginspirasi wisata yang berkelanjutan dan berdaya bagi masyarakat lokal.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Kontak</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li className="flex items-center gap-2"><Phone size={16} className="text-emerald-600" /> +62 812-3456-7890</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-emerald-600" /> hello@lomboktimur.explore</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Ikuti Kami</h3>
          <div className="mt-3 flex items-center gap-3">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-zinc-200 hover:border-emerald-600 hover:text-emerald-700 transition text-sm">
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Duta Pariwisata Lombok Timur. Semua hak cipta dilindungi.
      </div>
    </footer>
  );
}
