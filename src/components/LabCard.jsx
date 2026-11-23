import React from 'react';
import { Award, BookmarkCheck, CheckCircle2 } from 'lucide-react';

const LAB_METADATA = {
  RDBI: {
    tagline: 'Fokus: Sains Data, Business Intelligence, Big Data & Machine Learning Terapan'
  },
  SD: {
    tagline: 'Fokus: Rekayasa Perangkat Lunak, Fullstack Web/Mobile App & Algoritma Sistem'
  },
  SE: {
    tagline: 'Fokus: Pemodelan Proses Bisnis (BPMN), Arsitektur Enterprise & Sistem ERP'
  },
  TKITI: {
    tagline: 'Fokus: Jaringan Komputer, Administrasi Server Linux & Tata Kelola Keamanan TI'
  }
};

export default function LabCard({ labData, isPrimary }) {
  if (!labData) return null;

  const code = labData.lab_code || 'RDBI';
  const meta = LAB_METADATA[code] || LAB_METADATA.RDBI;
  const score = Number(labData.composite_score || 0).toFixed(1);
  const cosScore = Number(labData.cosine_similarity || 0).toFixed(1);
  const xgbScore = Number(labData.xgb_probability || 0).toFixed(1);

  if (isPrimary) {
    /* TOP 1: KARTU REKOMENDASI UTAMA (DOMINAN, HERO, AKSEN ORANYE UNAND) */
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-white border-[2.5px] border-slate-900 shadow-[6px_6px_0px_0px_#0f172a] flex flex-col justify-between h-full transition-all">
        {/* Full-Width Header Banner Utama */}
        <div className="bg-orange-500 text-white px-5 sm:px-6 py-3 border-b-2 border-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-200 stroke-[3]" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
              Rekomendasi Utama (Peringkat #1)
            </span>
          </div>
          <span className="px-3.5 py-1 rounded-full text-xs font-black bg-slate-900 text-white shadow-[1.5px_1.5px_0px_0px_#0f172a]">
            {code}
          </span>
        </div>

        {/* Isi Konten Kartu Utama */}
        <div className="p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 leading-tight">
                {labData.lab_name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {meta.tagline}
              </p>
              <div className="pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-slate-900 text-emerald-950 text-xs font-bold shadow-[1.5px_1.5px_0px_0px_#0f172a]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                  <span>Kecocokan Tertinggi Berdasarkan Profil Anda</span>
                </div>
              </div>
            </div>

            {/* Kotak Skor Menonjol */}
            <div className="bg-white border-2 border-slate-900 rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_#0f172a] text-center min-w-[130px] shrink-0 self-start sm:self-auto">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-0.5">
                Skor Afinitas
              </span>
              <span className="text-4xl sm:text-5xl font-heading font-black text-orange-600 tracking-tight">
                {score}%
              </span>
            </div>
          </div>

          {/* 2 Indikator Metrik Pendukung */}
          <div className="grid grid-cols-2 gap-3 pt-5 border-t-2 border-slate-900/10 text-xs">
            <div className="p-3.5 rounded-xl bg-white border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
              <span className="text-slate-500 font-bold block text-[11px]">Kemiripan Vektor (Cosine):</span>
              <strong className="text-slate-900 font-black text-base">{cosScore}%</strong>
            </div>

            <div className="p-3.5 rounded-xl bg-white border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
              <span className="text-slate-500 font-bold block text-[11px]">Probabilitas Model (XGBoost):</span>
              <strong className="text-slate-900 font-black text-base">{xgbScore}%</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* TOP 2: KARTU PILIHAN CADANGAN (SEKUNDER, TENANG, WARNA NETRAL) */
  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-50/80 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] flex flex-col justify-between h-full transition-all">
      {/* Header Banner Cadangan */}
      <div className="bg-slate-200 text-slate-700 px-5 py-2.5 border-b-2 border-slate-900 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookmarkCheck className="w-4 h-4 text-slate-600 stroke-[2.5]" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Pilihan Cadangan (Peringkat #2)
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white border border-slate-400 text-slate-700">
          {code}
        </span>
      </div>

      {/* Isi Konten Kartu Cadangan */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-800 leading-snug">
              {labData.lab_name}
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              {meta.tagline}
            </p>
            <p className="text-[11px] text-slate-500 font-medium italic pt-1">
              Opsi alternatif jika rekomendasi utama telah memenuhi kuota.
            </p>
          </div>

          {/* Kotak Skor Sekunder */}
          <div className="bg-white border border-slate-300 rounded-xl p-3 text-center min-w-[110px] shrink-0 self-start sm:self-auto">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
              Skor Afinitas
            </span>
            <span className="text-3xl font-heading font-black text-slate-700">
              {score}%
            </span>
          </div>
        </div>

        {/* 2 Indikator Metrik Sekunder */}
        <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-200 text-xs">
          <div className="p-2.5 rounded-lg bg-white border border-slate-300">
            <span className="text-slate-400 font-bold block text-[10px]">Kemiripan Vektor:</span>
            <strong className="text-slate-700 font-bold text-sm">{cosScore}%</strong>
          </div>

          <div className="p-2.5 rounded-lg bg-white border border-slate-300">
            <span className="text-slate-400 font-bold block text-[10px]">Probabilitas Model:</span>
            <strong className="text-slate-700 font-bold text-sm">{xgbScore}%</strong>
          </div>
        </div>
      </div>
    </div>
  );
}