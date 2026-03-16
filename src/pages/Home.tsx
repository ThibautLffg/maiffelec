import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wind, Zap, ShieldCheck, Clock, ArrowRight, Star } from 'lucide-react';
import { Phone } from 'lucide-react';

const services = [
  {
    title: 'Climatisation',
    description: 'Installation et maintenance de systèmes split, multi-split et gainables.',
    icon: Wind,
    link: '/climatisation',
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Électricité',
    description: 'Installation tertiaire, mise aux normes et rénovation complète.',
    icon: Zap,
    link: '/electricite',
    color: 'bg-amber-50 text-amber-600',
  },
];

const stats = [
  { label: 'Années d\'expérience', value: '15+' },
  { label: 'Projets réalisés', value: '500+' },
  { label: 'Clients satisfaits', value: '100%' },
  { label: 'Interventions / an', value: '200+' },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
  <div className="absolute inset-0 z-0">
    <img
      src="/clim.avif"
      alt="Electrician working"
      className="w-full h-full object-cover brightness-[0.3]"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />
  </div>

  <div className="section-padding relative z-10 w-full">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* TEXTE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/30">
          Expert Électricité & Climatisation - 06
        </span>

        <h1 className="text-5xl md:text-5xl text-white mb-6 leading-[1.1]">
        Dépannages Électriques <br />
          <span className="text-primary">Rapides dans le 06</span>  
        </h1>

        {/* <p className="text-lg text-slate-300 mb-10 leading-relaxed">
          Interventions rapides à Nice, Cannes, Antibes et dans toutes les Alpes-Maritimes.
          De l'installation à la maintenance, nous assurons votre sérénité.
        </p> */}
        <p className="text-lg text-slate-300 mb-10 leading-relaxed">
        Chez MAIFELEC, nous mettons notre expertise au service de vos installations électriques et de vos solutions de climatisation à Nice, Cannes, Antibes et dans toutes les Alpes-Maritimes.

        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">

        <a
          href="tel:0982350792"
          className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/80 transition-all text-center shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Phone size={16} />
          09 82 35 07 92
        </a>

          <Link
            to="/contact"
            className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all text-center"
          >
            Demande d'intervention
          </Link>

        </div>
      </motion.div>


      {/* STATS */}
      <div className="grid grid-cols-2 gap-6 max-w-md lg:justify-self-end">

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
          <div className="text-4xl font-extrabold text-white mb-2">
            500+
          </div>
          <p className="text-white font-medium text-sm whitespace-nowrap">
            Interventions réalisées
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
          <div className="text-4xl font-extrabold text-white mb-2 ">
            15+
          </div>
          <p className="text-white font-medium text-sm whitespace-nowrap">
            Années d'expérience
          </p>
        </div>

</div>

    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Nos Domaines d'Expertise</h2>
          <p className="text-slate-600">
            Nous proposons des solutions complètes et personnalisées pour les particuliers et les professionnels du 06.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                En savoir plus <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
<section className="section-padding">
  <div className="max-w-4xl mx-auto text-center mb-16">
    <h2 className="text-3xl md:text-4xl mb-6">Interventions Rapides</h2>
    <p className="text-slate-600 leading-relaxed">
      Chez <strong>MAIFELEC</strong>, nous mettons notre expertise au service de vos installations électriques et de vos solutions de climatisation.
      Spécialisée dans les travaux d'électricité générale et l'installation de systèmes de climatisation, notre entreprise accompagne
      particuliers et professionnels dans tous leurs projets, en neuf comme en rénovation.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8 ">
    <div className="bg-primary/5 p-8 rounded-3xl shadow-sm border border-slate-100 text-center ">
      <h3 className="text-xl font-bold mb-3  ">Installations Fiables</h3>
      <p className="text-slate-600 text-sm">
        Nous réalisons des installations performantes et conformes aux normes en vigueur pour garantir sécurité et durabilité.
      </p>
    </div>

    <div className="bg-primary/5 p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
      <h3 className="text-xl font-bold mb-3">Expertise & Conseil</h3>
      <p className="text-slate-600 text-sm">
        Grâce à notre savoir-faire et à notre sens du détail, nous vous accompagnons dans le choix des meilleures solutions pour votre projet.
      </p>
    </div>

    <div className="bg-primary/5 p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
      <h3 className="text-xl font-bold mb-3">Service Professionnel</h3>
      <p className="text-slate-600 text-sm">
        De l'étude du projet jusqu'à la réalisation des travaux, nous assurons un service sérieux, réactif et transparent.
      </p>
    </div>
  </div>
</section>

      {/* Why Us Section */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/pages/gainablegrand.jpeg"
                alt="Our team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">15+</p>
              <p className="text-sm font-medium opacity-80">Années d'expérience</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl mb-8">Pourquoi choisir MAIFELEC ?</h2>
            <div className="space-y-8">
              {[
                { title: 'Réactivité Immédiate', desc: 'Intervention d\'urgence 7j/7 dans tout le département des Alpes-Maritimes.', icon: Clock },
                { title: 'Garantie Décennale', desc: 'Toutes nos installations sont couvertes par une assurance décennale pour votre tranquillité.', icon: ShieldCheck },
                { title: 'Expertise Certifiée', desc: 'Nos techniciens sont formés aux dernières normes et technologies du marché.', icon: Star },
              ].map((item) => (
                <div key={item.title} className="flex gap-6 items-center">
                 <div className="bg-slate-100 w-14 h-14 flex items-center justify-center rounded-2xl shrink-0 text-primary group-hover:scale-110 transition-transform">
  <item.icon size={24} />
</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-emerald-100 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/25 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl text-white mb-6">Prêt à démarrer votre projet ?</h2>
            <p className="text-slate-400 mb-10">
              Contactez-nous aujourd'hui pour une étude personnalisée et un devis gratuit sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/80 transition-all"
              >
                Obtenir mon devis gratuit
              </Link>
              <a
                href="tel:0600000000"
                className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all"
              >
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
