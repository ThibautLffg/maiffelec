import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Jean-Pierre M.',
    location: 'Nice',
    text: 'Installation d\'une clim gainable parfaite. Travail propre, équipe ponctuelle et de très bon conseil. Je recommande vivement !',
    rating: 5,
  },
  {
    name: 'Sophie L.',
    location: 'Antibes',
    text: 'Mise aux normes du tableau électrique effectuée rapidement. Très professionnel et tarif transparent.',
    rating: 5,
  },
  {
    name: 'Marc D.',
    location: 'Cannes',
    text: 'Dépannage en urgence un samedi soir. Réactivité incroyable et problème résolu en 1h. Merci encore.',
    rating: 5,
  },
];

export default function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name || !email || !message) {
      setError('Merci de remplir au minimum votre nom, votre email et votre message.');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Une erreur est survenue lors de l'envoi.");
      }

      navigate('/merci');
    } catch (err: any) {
      setError(err.message || "Impossible d'envoyer votre message pour le moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="section-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6">Contactez-nous</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Une question ? Un projet ? Notre équipe est à votre écoute pour vous conseiller et vous accompagner dans vos travaux.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info & Form */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4">
                  <Phone size={20} />
                </div>
                <h4 className="font-bold mb-1">Téléphone</h4>
                <p className="text-slate-600 text-sm">06 62 79 26 35</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4">
                  <Mail size={20} />
                </div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-slate-600 text-sm">romain.maifelec@gmail.com</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm sm:col-span-2">
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4">
                  <MapPin size={20} />
                </div>
                <h4 className="font-bold mb-1">Zone d'intervention</h4>
                <p className="text-slate-600 text-sm">Tout le département des Alpes-Maritimes (06)</p>
              </div>
            </div>

            <div className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] text-white">
              <h3 className="text-2xl font-bold mb-8">Envoyez-nous un message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Nom</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Téléphone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none resize-none"
                  ></textarea>
                </div>
                {error && (
                  <p className="text-sm text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer ma demande'} <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="text-3xl mb-8">Ce que disent nos clients</h2>
            <div className="space-y-6">
              {reviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative"
                >
                  <Quote className="absolute top-6 right-8 text-slate-100" size={48} />
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{review.name}</h4>
                      <p className="text-xs text-slate-400">{review.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h4 className="font-bold mb-2">Note moyenne : 4.9/5</h4>
              <p className="text-sm text-slate-600 mb-4">Basé sur plus de 150 avis vérifiés sur Google et Pages Jaunes.</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
