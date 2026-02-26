import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Zap, Wind } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Climatisation', href: '/climatisation' },
  { name: 'Électricité', href: '/electricite' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg text-white group-hover:scale-110 transition-transform">
            <Zap size={24} className="fill-current" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn("text-xl font-bold tracking-tight", scrolled ? "text-slate-900" : "text-slate-900")}>
              Azur Élec & Clim
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary">
              Alpes-Maritimes 06
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === link.href ? 'text-primary' : 'text-slate-600'
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:0600000000"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            <Phone size={16} />
            06 00 00 00 00
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-lg font-medium py-2 border-b border-slate-50',
                  location.pathname === link.href ? 'text-primary' : 'text-slate-600'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:0600000000"
              className="flex items-center justify-center gap-2 bg-primary text-white p-4 rounded-xl font-bold mt-2"
            >
              <Phone size={20} />
              Appeler maintenant
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
