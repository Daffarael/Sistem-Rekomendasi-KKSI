import React from 'react';
import { Sparkles, RotateCcw, ArrowLeft } from 'lucide-react';

export default function Navbar({ onReset, hasResult, isRecommenderOpen, onStart, onBackToLanding }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Identity Text */}
        <div className="flex flex-col justify-center select-none">
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-orange-600 block leading-none">
            DEPARTEMEN SISTEM INFORMASI UNAND
          </span>
          <h1 className="font-heading font-black text-slate-900 text-lg sm:text-xl leading-tight mt-1">
            KKSI Lab Recommender
          </h1>
        </div>

        {/* Kondisi 1: Tampilan Landing Page */}
        {!isRecommenderOpen ? (
          <>
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-800">
              <button
                type="button"
                onClick={() => scrollTo('beranda')}
                className="px-3 py-1.5 rounded-lg hover:bg-amber-100 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Beranda
              </button>
              <button
                type="button"
                onClick={() => scrollTo('tentang-kksi')}
                className="px-3 py-1.5 rounded-lg hover:bg-amber-100 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Tentang KKSI
              </button>
              <button
                type="button"
                onClick={() => scrollTo('cara-kerja')}
                className="px-3 py-1.5 rounded-lg hover:bg-amber-100 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Cara Kerja
              </button>
            </nav>

            {/* Right CTA Button (Hand-Drawn / Neo-Brutalist) */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onStart}
                className="paper-btn-primary px-4 sm:px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Mulai Evaluasi Profil</span>
              </button>
            </div>
          </>
        ) : (
          /* Kondisi 2: Saat Masuk ke Sistem Formulir Rekomendasi */
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBackToLanding}
              className="paper-btn-secondary px-3.5 py-2 text-xs inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda</span>
            </button>

            <button
              type="button"
              onClick={onReset}
              className="px-3.5 py-2 text-xs font-bold rounded-xl border-2 border-slate-900 bg-white hover:bg-rose-50 text-slate-800 hover:text-rose-600 shadow-[0px_3px_0px_0px_#0f172a] active:translate-y-[3px] active:shadow-none transition-all duration-75 cursor-pointer inline-flex items-center gap-1.5 select-none"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Formulir</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
