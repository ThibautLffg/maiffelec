import { motion } from 'motion/react';
import { Wind, CheckCircle2, Thermometer, Snowflake, LayoutGrid } from 'lucide-react';

const solutions = [
  {
    title: 'Split Mural',
    description: 'La solution classique et efficace pour climatiser une pièce unique. Design discret et performance énergétique.',
    features: ['Installation rapide', 'Silencieux', 'Filtration de l\'air', 'Contrôle WiFi'],
   image: '/public/pages/splitmuralgrand.jpg',
  },
  {
    title: 'Multi-Split',
    description: 'Une seule unité extérieure pour plusieurs unités intérieures. Idéal pour climatiser tout un appartement ou une maison.',
    features: ['Réglage par zone', 'Économie de place', 'Évolutif', 'Haute performance'],
    image: '/public/pages/multigrand.jpg',
  },
  {
    title: 'Gainable',
    description: 'Le summum du confort et de l\'esthétique. Système invisible intégré dans vos faux-plafonds.',
    features: ['Invisible', 'Confort homogène', 'Valorisation du bien', 'Ultra-silencieux'],
    image: '/public/pages/gainablegrand.jpeg',
  },
];

export default function Climatisation() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="section-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6">Solutions de Climatisation</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nous installons les meilleures marques (Daikin, Mitsubishi, Panasonic) pour vous garantir un confort thermique optimal été comme hiver dans tout le 06.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="space-y-24">
          {solutions.map((solution, idx) => (
            <div key={solution.title} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <h2 className="text-3xl mb-6">{solution.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <CheckCircle2 size={18} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
                  Demander une étude
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Maintenance */}
      <section className="section-padding bg-blue-600 text-white mb-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 text-white">Entretien & Dépannage</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Une climatisation bien entretenue consomme moins et dure plus longtemps. Nous proposons des contrats d'entretien annuels pour garantir la qualité de votre air.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/20 flex items-center gap-3">
                <Thermometer size={24} />
                <span>Contrôle de gaz</span>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/20 flex items-center gap-3">
                <Snowflake size={24} />
                <span>Nettoyage filtres</span>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/20 flex items-center gap-3">
                <LayoutGrid size={24} />
                <span>Désinfection</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl text-slate-900 shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Urgence Dépannage ?</h3>
            <p className="text-slate-600 mb-6 text-sm">
              Votre clim ne fait plus de froid ? Elle fuit ou fait du bruit ? Nos techniciens interviennent sous 4h dans le 06.
            </p>
            <a
              href="tel:0600000000"
              className="block w-full bg-primary text-white text-center py-4 rounded-xl font-bold hover:bg-blue-700 transition-all"
            >
              Appeler un technicien
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
