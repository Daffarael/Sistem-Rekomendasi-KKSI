import React from 'react';
import { Layers, Lightbulb, Users } from 'lucide-react';

export default function AboutKKSI() {
  return (
    <section id="tentang-kksi" className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Kolom Kiri: Kartu Kutipan Bergaya Kertas Catatan */}
          <div className="lg:col-span-5">
            <div className="bg-white border-[2.5px] border-slate-900 rounded-3xl shadow-[6px_6px_0px_0px_#0f172a] p-8 sm:p-10 space-y-6 relative -rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Tape / Sticker Efek di Atas (Bukan Visi Misi, melainkan Label KKSI / 2026) */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-200 border-2 border-slate-900 rounded-md text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-[1.5px_1.5px_0px_0px_#0f172a]">
                KKSI / 2026
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-black text-orange-600 tracking-wider uppercase block">
                  KKSI &bull; SI UNAND
                </span>
                <blockquote className="text-xl sm:text-2xl font-heading font-black text-slate-900 leading-snug">
                  &ldquo;Membangun kompetensi melalui riset, kolaborasi, dan penerapan sistem informasi.&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t-2 border-slate-200 flex items-center gap-3 text-xs text-slate-700 font-bold">
                <div className="w-9 h-9 rounded-xl bg-orange-100 border-2 border-slate-900 flex items-center justify-center text-orange-600 shrink-0 shadow-[2px_2px_0px_0px_#0f172a]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block font-heading font-extrabold text-sm">Departemen Sistem Informasi</strong>
                  <span className="text-slate-500 font-medium">Universitas Andalas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Narasi Mengenal KKSI */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full border-2 border-slate-900 bg-amber-200 text-xs font-black uppercase tracking-wider text-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
                MENGENAL KKSI
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                Ruang tumbuh untuk inovator sistem informasi masa depan.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-sans font-medium">
              <p>
                Kelompok Keilmuan Sistem Informasi (KKSI) merupakan ekosistem akademik di bawah Departemen Sistem Informasi Universitas Andalas yang mewadahi pengembangan pengetahuan, penelitian, dan inovasi mahasiswa.
              </p>
              <p>
                KKSI menaungi empat laboratorium yaitu Rekayasa Data & Business Intelligence (RDBI), System Development (SD), System Enterprise (SE), serta Tata Kelola & Infrastruktur TI (TKITI) sebagai ruang pengembangan kompetensi, riset, dan kolaborasi mahasiswa.
              </p>
            </div>

            {/* 2 Feature Pills Bawah Bergaya Stiker Kartu */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] flex items-start gap-3.5 hover:-translate-y-0.5 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-orange-100 border-2 border-slate-900 text-orange-600 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#0f172a]">
                  <Lightbulb className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-slate-900 text-sm">
                    Riset & Praktik Terapan
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    Mendorong penelitian terapan yang solutif dan berdampak nyata bagi ekosistem digital.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] flex items-start gap-3.5 hover:-translate-y-0.5 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border-2 border-slate-900 text-emerald-700 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#0f172a]">
                  <Users className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-slate-900 text-sm">
                    Pengembangan Talenta
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    Menghubungkan kompetensi akademik perkuliahan dengan pengalaman praktis laboratorium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
