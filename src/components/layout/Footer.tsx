import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Smartphone  } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <img
              src="/logoblanc.png"
              alt="Maifelec"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold text-white tracking-tight">Maifelec</span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Votre expert de confiance pour tous vos besoins en électricité et climatisation dans les Alpes-Maritimes. Intervention rapide et travail soigné.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/climatisation" className="hover:text-primary transition-colors">Climatisation Mural</Link></li>
            <li><Link to="/climatisation" className="hover:text-primary transition-colors">Systèmes Gainables</Link></li>
            <li><Link to="/electricite" className="hover:text-primary transition-colors">Mise aux normes</Link></li>
            <li><Link to="/electricite" className="hover:text-primary transition-colors">Installation Bureaux</Link></li>
            <li><Link to="/electricite" className="hover:text-primary transition-colors">Maintenance Électrique</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Liens Rapides</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
            <li><Link to="/realisations" className="hover:text-primary transition-colors">Nos Réalisations</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Demander un devis</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Avis Clients</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">

            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary shrink-0" />
              <span>Nice, Cannes, Antibes et tout le 06</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <a href="tel:0982350792" className="hover:text-white transition-colors">
                09 82 35 07 92
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Smartphone size={18} className="text-primary shrink-0" />
              <a href="tel:0662792635" className="hover:text-white transition-colors">
                06 62 79 26 35
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <a href="mailto:contact.maifelec@gmail.com" className="hover:text-white transition-colors">
                contact.maifelec@gmail.com
              </a>
            </li>

          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} Maifelec. Tous droits réservés.</p>
        <div className="flex gap-6">
          <Link to="/mentions-legales" className="hover:text-white transition-colors">
            Mentions Légales
          </Link>
          <Link
            to="/politique-de-confidentialite"
            className="hover:text-white transition-colors"
          >
            Politique de Confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
