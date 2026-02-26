import { motion } from 'motion/react';
import { Zap, Building2, ShieldAlert, Hammer, Settings, Users } from 'lucide-react';

const services = [
  {
    title: 'Installation Bureaux',
    description: 'Conception et réalisation de réseaux électriques pour espaces professionnels et tertiaires.',
    icon: Building2,
  },
  {
    title: 'Mise aux Normes',
    description: 'Mise en conformité NFC 15-100 pour assurer la Fiabilité de votre installation et de vos proches.',
    icon: ShieldAlert,
  },
  {
    title: 'Rénovation Totale',
    description: 'Remplacement complet de tableaux électriques, prises et luminaires pour vos projets de rénovation.',
    icon: Hammer,
  },
  {
    title: 'Maintenance & SAV',
    description: 'Contrats de maintenance préventive et dépannage rapide pour minimiser les interruptions.',
    icon: Settings,
  },
];

export default function Electricite() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="section-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6">Expertise Électrique</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              De l'habitat individuel aux plateaux de bureaux, nous assurons des installations électriques sûres, performantes et conformes aux dernières réglementations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Pro Section */}
      <section className="section-padding">
        <div className="bg-slate-100 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-4">
              <Users size={16} />
              Espace Professionnels
            </div>
            <h2 className="text-3xl md:text-4xl mb-6">Besoin d'un partenaire pour vos chantiers ?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Architectes, syndics, promoteurs : nous vous accompagnons dans vos projets avec une rigueur technique et un respect strict des délais.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Contactez notre pôle pro
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h4 className="font-bold mb-6">Demande de rappel pro</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom de l'entreprise"
                  className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none"
                />
                <input
                  type="email"
                  placeholder="Email professionnel"
                  className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none"
                />
                <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
                  Être rappelé
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
