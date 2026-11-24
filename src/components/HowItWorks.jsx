import React from 'react';
import { Smartphone, Target, Sparkles } from 'lucide-react';

export default function HowItWorks({ onStart }) {
  return (
    <section id="cara-kerja" className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full border-2 border-slate-900 bg-amber-200 text-xs font-black uppercase tracking-wider text-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
            CARA KERJA SISTEM
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight leading-tight">
            Rekomendasi berbasis data<br className="hidden sm:inline" /> dalam tiga langkah sederhana.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Sistem mengolah profil secara komprehensif agar rekomendasi tidak hanya bergantung pada satu indikator.
          </p>
        </div>

        {/* 3 Step Cards Grid (Hand-Drawn Paper Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Langkah 01 */}
          <div className="p-8 rounded-3xl bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:-translate-y-1 transition-all text-center flex flex-col items-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0px_0px_#0f172a]">
              <Smartphone className="w-6 h-6 text-slate-900" />
            </div>
            <span className="px-3 py-0.5 rounded-full border-2 border-slate-900 bg-orange-100 text-orange-950 font-black text-xs shadow-[1.5px_1.5px_0px_0px_#0f172a]">
              LANGKAH 01
            </span>
            <h3 className="text-base sm:text-lg font-heading font-black text-slate-900">
              Lengkapi Rekam Akademik
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
              Masukkan semester, IPK, dan nilai mata kuliah yang relevan.
            </p>
          </div>

          {/* Langkah 02 */}
          <div className="p-8 rounded-3xl bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:-translate-y-1 transition-all text-center flex flex-col items-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0px_0px_#0f172a]">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <span className="px-3 py-0.5 rounded-full border-2 border-slate-900 bg-amber-100 text-amber-950 font-black text-xs shadow-[1.5px_1.5px_0px_0px_#0f172a]">
              LANGKAH 02
            </span>
            <h3 className="text-base sm:text-lg font-heading font-black text-slate-900">
              Petakan Kompetensi & Minat
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
              Nilai penguasaan tools serta ketertarikan bidang keilmuan.
            </p>
          </div>

          {/* Langkah 03 */}
          <div className="p-8 rounded-3xl bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:-translate-y-1 transition-all text-center flex flex-col items-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0px_0px_#0f172a]">
              <Sparkles className="w-6 h-6 text-emerald-700" />
            </div>
            <span className="px-3 py-0.5 rounded-full border-2 border-slate-900 bg-emerald-100 text-emerald-950 font-black text-xs shadow-[1.5px_1.5px_0px_0px_#0f172a]">
              LANGKAH 03
            </span>
            <h3 className="text-base sm:text-lg font-heading font-black text-slate-900">
              Dapatkan Rekomendasi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
              Lihat peringkat laboratorium dan alasan kecocokan profil.
            </p>
          </div>
        </div>

        {/* Big Orange CTA Banner (Neo-Brutalist Paper Poster) */}
        <div className="rounded-3xl bg-orange-500 border-[2.5px] border-slate-900 text-slate-900 p-8 sm:p-12 lg:p-14 shadow-[6px_6px_0px_0px_#0f172a] relative overflow-hidden">
          <div className="max-w-2xl space-y-6">
            {/* Headline */}
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight drop-shadow-sm">
              Sudah siap menemukan laboratorium terbaikmu?
            </h3>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-orange-50 leading-relaxed font-sans font-medium">
              Evaluasi profilmu sekarang dan dapatkan rekomendasi personal yang objektif, transparan, dan mudah dipahami.
            </p>

            {/* CTA Button yang membuka sistem evaluasi */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onStart}
                className="paper-btn-secondary px-8 py-4 text-sm sm:text-base"
              >
                Mulai Evaluasi Profil Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
