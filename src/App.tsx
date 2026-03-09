import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Climatisation from './pages/Climatisation';
import Electricite from './pages/Electricite';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';
import Merci from './pages/Merci';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/climatisation" element={<Climatisation />} />
            <Route path="/electricite" element={<Electricite />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/merci" element={<Merci />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route
              path="/politique-de-confidentialite"
              element={<PolitiqueConfidentialite />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
