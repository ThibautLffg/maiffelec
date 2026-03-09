import { Link } from 'react-router-dom';

export default function Merci() {
  return (
    <div className="pt-24">
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="section-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6">Merci pour votre message</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Votre demande a bien été transmise à l&apos;équipe Maifelec. Nous vous recontactons
              au plus vite pour échanger sur votre projet.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-xl bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] mx-auto text-center space-y-6">
          <p className="text-slate-300">
            En attendant, vous pouvez revenir à l&apos;accueil du site ou nous appeler
            directement pour une prise en charge immédiate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="flex-1 bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all"
            >
              Retourner à l&apos;accueil
            </Link>
            <a
              href="tel:0600000000"
              className="flex-1 bg-primary text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all"
            >
              Appeler Maifelec
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

