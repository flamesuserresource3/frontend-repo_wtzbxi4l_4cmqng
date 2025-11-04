import { Award, Users, Star } from "lucide-react";

export default function Highlights() {
  const items = [
    {
      icon: Award,
      title: "Prestasi",
      desc: "Membawa misi promosi pariwisata berkelanjutan dan budaya lokal ke tingkat nasional.",
    },
    {
      icon: Users,
      title: "Kolaborasi",
      desc: "Bersama komunitas, pelaku UMKM, dan pemerintah daerah memperkuat ekosistem wisata.",
    },
    {
      icon: Star,
      title: "Keunggulan",
      desc: "Mengutamakan hospitality, edukasi wisata, dan storytelling destinasi yang autentik.",
    },
  ];
  return (
    <section id="profil" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Profil & Nilai</h3>
          <p className="mt-3 text-zinc-600">
            Duta Pariwisata Lombok Timur hadir untuk mengenalkan pesona alam, budaya, dan keramahan masyarakat ke dunia.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-zinc-200 hover:shadow-lg transition bg-white">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center">
                <Icon size={20} />
              </div>
              <h4 className="mt-4 font-semibold text-lg">{title}</h4>
              <p className="mt-1 text-zinc-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
