import React from 'react';
import { Sparkles, Compass, Loader2 } from 'lucide-react';

const INTERESTS_LIST = [
  {
    key: 'Minat Data & Analitik',
    title: 'Data Science & Business Intelligence',
    description: 'Pengolahan dataset, analitik prediktif, pemodelan data, analisis statistik, dan perancangan visualisasi data bisnis.'
  },
  {
    key: 'Minat Coding & Pemrograman',
    title: 'Software Development & Rekayasa Perangkat Lunak',
    description: 'Logika algoritma, pengembangan aplikasi web dan mobile, arsitektur software, serta rekayasa sistem.'
  },
  {
    key: 'Minat Proses Bisnis & ERP',
    title: 'Proses Bisnis & Sistem Enterprise (ERP)',
    description: 'Analisis alur proses bisnis, pemodelan diagram BPMN, implementasi modul ERP, dan integrasi sistem organisasi.'
  },
  {
    key: 'Minat Server & Jaringan',
    title: 'Infrastruktur Jaringan & Keamanan TI',
    description: 'Perancangan topologi jaringan, administrasi server, keamanan sistem informasi, serta tata kelola infrastruktur TI.'
  }
];

const INTEREST_SCALE_LABELS = {
  1: '1 - Sangat Kurang',
  2: '2 - Kurang',
  3: '3 - Cukup',
  4: '4 - Tertarik',
  5: '5 - Sangat Tertarik'
};

export default function MinatForm({ formData, onChange, onSubmit, onPrev, isLoading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Step Header */}
      <div className="border-b-2 border-slate-900 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-slate-900 bg-amber-200 text-xs font-black text-slate-900 shadow-[2px_2px_0px_0px_#0f172a] mb-2">
          <Compass className="w-4 h-4 text-orange-600 stroke-[2.5]" />
          <span>Langkah 3 dari 3: Minat Keilmuan</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-heading font-black text-slate-900 mt-1">
          Minat Bidang Keilmuan
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
          Tentukan seberapa tertarik Anda pada masing-masing bidang keilmuan berikut.
        </p>
      </div>

      {/* Grid 4 Minat */}
      <div className="space-y-4">
        {INTERESTS_LIST.map((interest, idx) => {
          const currentVal = parseInt(formData[interest.key] || 3, 10);
          return (
            <div
              key={interest.key}
              className="p-5 bg-white rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] space-y-3"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-orange-100 border-2 border-slate-900 text-orange-900 text-xs font-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#0f172a]">
                  {idx + 1}
                </span>
                <h3 className="font-heading font-black text-slate-900 text-sm sm:text-base">
                  {interest.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {interest.description}
              </p>

              {/* Interactive Scale Buttons (1-5) */}
              <div className="pt-1">
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((lvl) => {
                    const isSelected = currentVal === lvl;
                    return (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => onChange(interest.key, lvl)}
                        className={`py-2 rounded-xl text-xs font-black border-2 border-slate-900 cursor-pointer select-none transition-all duration-75 shadow-[0px_3px_0px_0px_#0f172a] active:translate-y-[3px] active:shadow-none ${
                          isSelected
                            ? 'bg-orange-500 text-white'
                            : 'bg-white hover:bg-amber-50 text-slate-800'
                        }`}
                      >
                        {lvl}
                      </button>
                    );
                  })}
                </div>
                <div className="text-[11px] font-bold text-orange-700 mt-2">
                  Tingkat: {INTEREST_SCALE_LABELS[currentVal]}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="pt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          disabled={isLoading}
          className="paper-btn-secondary px-6 py-3.5 text-xs sm:text-sm inline-flex items-center gap-2"
        >
          <span>Kembali ke Kemahiran Tools</span>
        </button>

        <button
          type="submit"
          disabled={isLoading}
          className="paper-btn-primary min-w-[280px] px-8 py-3.5 text-xs sm:text-sm inline-flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Memproses Rekomendasi...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-amber-200 stroke-[2.5]" />
              <span>Lihat Rekomendasi Laboratorium</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}