import React from 'react';
import { Check } from 'lucide-react';

export default function Hero({ onStart }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="py-12 sm:py-20 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Kolom Kiri: Copywriting & Aksi Hand-Drawn */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline Kecil dengan Badge Sticker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-slate-900 bg-amber-100 text-xs font-bold text-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
              <span>Sistem Informasi &bull; Universitas Andalas</span>
            </div>

            {/* Judul Besar dengan Efek Highlighter Spidol */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-black text-slate-900 leading-[1.15] tracking-tight">
              Temukan<br />
              laboratorium yang<br />
              <span className="relative inline-block text-orange-600">
                <span className="absolute inset-x-0 bottom-1 sm:bottom-2 h-4 sm:h-5 bg-amber-200 -rotate-1 rounded-sm -z-10" />
                tepat untuk potensimu.
              </span>
            </h1>

            {/* Paragraf Penjelas */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans max-w-xl font-medium">
              Sistem ini membantu mahasiswa menentukan laboratorium yang paling sesuai berdasarkan rekam akademik, kompetensi teknis, dan minat keilmuan, bukan sekadar pilihan berdasarkan asumsi.
            </p>

            {/* Tombol Aksi Hand-Drawn (Neo-Brutalist) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onStart}
                className="paper-btn-primary px-7 py-3.5 text-sm sm:text-base"
              >
                Mulai Evaluasi Profil
              </button>

              <button
                type="button"
                onClick={() => scrollTo('tentang-kksi')}
                className="paper-btn-secondary px-7 py-3.5 text-sm sm:text-base"
              >
                Tentang KKSI
              </button>
            </div>

            {/* Indikator Centang Bergaya Stiker */}
            <div className="flex flex-wrap items-center gap-3 pt-3 text-xs font-bold text-slate-900">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-2 border-slate-900 bg-amber-100 shadow-[2px_2px_0px_0px_#0f172a]">
                <Check className="w-3.5 h-3.5 text-amber-800 stroke-[3]" />
                <span>Hasil instan</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-2 border-slate-900 bg-orange-100 shadow-[2px_2px_0px_0px_#0f172a]">
                <Check className="w-3.5 h-3.5 text-orange-800 stroke-[3]" />
                <span>Berbasis data riil</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Kartu Contoh Hasil Bergaya Kertas Sketsa */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white border-[2.5px] border-slate-900 rounded-3xl shadow-[6px_6px_0px_0px_#0f172a] p-6 sm:p-7 space-y-6 rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Top Header Card */}
              <div className="flex items-center justify-between text-xs pb-1 font-bold">
                <span className="text-slate-500">Contoh hasil evaluasi</span>
                <span className="px-2.5 py-0.5 rounded-full border-2 border-slate-900 bg-orange-100 text-orange-900 shadow-[1.5px_1.5px_0px_0px_#0f172a]">
                  Profil 01
                </span>
              </div>

              <div>
                <h3 className="font-heading font-black text-slate-900 text-xl sm:text-2xl">
                  Rekomendasi Laboratorium
                </h3>
              </div>

              {/* Lab Highlight & Score */}
              <div className="p-4 rounded-2xl bg-orange-50/80 border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] space-y-2">
                <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-extrabold text-slate-900 bg-emerald-200 border-2 border-slate-900 shadow-[1.5px_1.5px_0px_0px_#0f172a]">
                  Peringkat pertama
                </span>

                <div className="flex items-baseline justify-between pt-1">
                  <div>
                    <h4 className="text-3xl font-heading font-black text-slate-900 tracking-tight">
                      RDBI
                    </h4>
                    <p className="text-xs text-slate-600 font-bold mt-0.5">
                      Rekayasa Data & Bisnis Intelijen
                    </p>
                  </div>
                  <div className="text-3xl sm:text-4xl font-heading font-black text-orange-600">
                    96.1<span className="text-lg font-extrabold">%</span>
                  </div>
                </div>
              </div>

              {/* 3 Progress Bars (Hand-Drawn Chunky Bars) */}
              <div className="space-y-4 pt-1">
                {/* Bar 1 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-800">
                    <span>Profil Akademik</span>
                    <span className="text-orange-600 font-extrabold">94%</span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-100 border-2 border-slate-900 rounded-full overflow-hidden p-0.5 shadow-[1.5px_1.5px_0px_0px_#0f172a]">
                    <div className="h-full bg-orange-500 rounded-full border-r-2 border-slate-900" style={{ width: '94%' }} />
                  </div>
                </div>

                {/* Bar 2 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-800">
                    <span>Kemahiran Tools</span>
                    <span className="text-orange-600 font-extrabold">91%</span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-100 border-2 border-slate-900 rounded-full overflow-hidden p-0.5 shadow-[1.5px_1.5px_0px_0px_#0f172a]">
                    <div className="h-full bg-orange-500 rounded-full border-r-2 border-slate-900" style={{ width: '91%' }} />
                  </div>
                </div>

                {/* Bar 3 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-800">
                    <span>Minat Keilmuan</span>
                    <span className="text-orange-600 font-extrabold">98%</span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-100 border-2 border-slate-900 rounded-full overflow-hidden p-0.5 shadow-[1.5px_1.5px_0px_0px_#0f172a]">
                    <div className="h-full bg-orange-500 rounded-full border-r-2 border-slate-900" style={{ width: '98%' }} />
                  </div>
                </div>
              </div>

              {/* Bottom Note */}
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed pt-2 border-t-2 border-slate-200">
                Hasil dihitung dari kesesuaian akademik, kompetensi teknis, dan preferensi bidang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
