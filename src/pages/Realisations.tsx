import { motion } from 'motion/react';

const projects = [
  {
    title: 'Villa Contemporaine - Cannes',
    category: 'Climatisation Gainable',
    image: 'https://picsum.photos/seed/villa/800/600',
  },
  {
    title: 'Bureaux Start-up - Nice',
    category: 'Électricité Tertiaire',
    image: 'https://picsum.photos/seed/office/800/600',
  },
  {
    title: 'Appartement Haussmannien - Nice',
    category: 'Mise aux normes & Clim',
    image: 'https://picsum.photos/seed/apt/800/600',
  },
  {
    title: 'Commerce de Luxe - Monaco',
    category: 'Éclairage & Design',
    image: 'https://picsum.photos/seed/shop/800/600',
  },
  {
    title: 'Résidence Hôtelière - Antibes',
    category: 'Maintenance Climatisation',
    image: 'https://picsum.photos/seed/hotel/800/600',
  },
  {
    title: 'Maison Individuelle - Mougins',
    category: 'Installation Multi-split',
    image: 'https://picsum.photos/seed/house/800/600',
  },
];

export default function Realisations() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="section-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6">Nos Réalisations</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Découvrez quelques-uns de nos derniers chantiers réalisés avec soin dans tout le département des Alpes-Maritimes.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium bg-primary px-4 py-2 rounded-full text-xs">
                    Voir le projet
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-slate-500 text-sm">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {/* Placeholder for partner logos */}
          <span className="text-white font-bold text-xl">DAIKIN</span>
          <span className="text-white font-bold text-xl">MITSUBISHI</span>
          <span className="text-white font-bold text-xl">LEGRAND</span>
          <span className="text-white font-bold text-xl">SCHNEIDER</span>
          <span className="text-white font-bold text-xl">PANASONIC</span>
        </div>
      </section>
    </div>
  );
}
