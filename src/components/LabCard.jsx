import React from 'react';
import { Award, BookmarkCheck, CheckCircle2, AlertCircle } from 'lucide-react';

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
  const isDisq = Boolean(labData.is_disqualified);

  if (isPrimary) {
    /* TOP 1: KARTU REKOMENDASI UTAMA (DOMINAN, HERO, AKSEN ORANYE UNAND) */
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-white border-[2.5px] border-slate-900 shadow-[6px_6px_0px_0px_#0f172a] flex flex-col justify-between h-full transition-all print:rounded-xl print:break-inside-avoid">
        {/* Full-Width Header Banner Utama */}
        <div className="bg-orange-500 text-white px-5 sm:px-6 py-3 border-b-2 border-slate-900 flex items-center justify-between print:py-1 print:px-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-200 stroke-[3] print:w-3.5 print:h-3.5" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider print:text-[10px]">
              Rekomendasi Utama (Peringkat #1)
            </span>
          </div>
          <span className="px-3.5 py-1 rounded-full text-xs font-black bg-slate-900 text-white shadow-[1.5px_1.5px_0px_0px_#0f172a] print:py-0 print:px-2 print:text-[9px]">
            {code}
          </span>
        </div>

        {/* Isi Konten Kartu Utama */}
        <div className="p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between print:p-2.5 print:space-y-1.5">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 print:gap-2">
            <div className="space-y-2 print:space-y-0.5">
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 leading-tight print:text-sm">
                {labData.lab_name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed print:text-[9px] print:leading-tight">
                {meta.tagline}
              </p>
              <div className="pt-1 print:hidden flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-slate-900 text-emerald-950 text-xs font-bold shadow-[1.5px_1.5px_0px_0px_#0f172a]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                  <span>Kecocokan Tertinggi Berdasarkan Profil Anda</span>
                </div>
              </div>
            </div>

            {/* Kotak Skor Menonjol */}
            <div className="bg-white border-2 border-slate-900 rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_#0f172a] text-center min-w-[130px] shrink-0 self-start sm:self-auto print:p-1.5 print:rounded-lg print:min-w-[65px]">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-0.5 print:text-[8px] print:mb-0">
                Skor Afinitas
              </span>
              <span className="text-4xl sm:text-5xl font-heading font-black text-orange-600 tracking-tight print:text-xl">
                {score}%
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* TOP 2: KARTU PILIHAN CADANGAN (SEKUNDER, TENANG, WARNA NETRAL / TERELIMINASI JIKA HANYA 1 LAB LOLOS) */
  return (
    <div className={`relative overflow-hidden rounded-3xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] flex flex-col justify-between h-full transition-all print:rounded-xl print:break-inside-avoid ${isDisq ? 'bg-rose-50/50' : 'bg-slate-50/80'}`}>
      {/* Header Banner Cadangan */}
      <div className={`${isDisq ? 'bg-rose-100 text-rose-900' : 'bg-slate-200 text-slate-700'} px-5 py-2.5 border-b-2 border-slate-900 flex items-center justify-between print:py-1 print:px-3`}>
        <div className="flex items-center gap-2">
          {isDisq ? (
            <AlertCircle className="w-4 h-4 text-rose-700 stroke-[2.5] print:w-3.5 print:h-3.5" />
          ) : (
            <BookmarkCheck className="w-4 h-4 text-slate-600 stroke-[2.5] print:w-3.5 print:h-3.5" />
          )}
          <span className="text-xs font-bold uppercase tracking-wider print:text-[10px]">
            {isDisq ? 'Peringkat #2 (Tereliminasi Prasyarat)' : 'Pilihan Cadangan (Peringkat #2)'}
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white border border-slate-400 text-slate-700 print:py-0 print:px-2 print:text-[9px]">
          {code}
        </span>
      </div>

      {/* Isi Konten Kartu Cadangan */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between print:p-2.5 print:space-y-1.5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 print:gap-2">
          <div className="space-y-1.5 print:space-y-0.5">
            <h3 className={`text-xl sm:text-2xl font-heading font-black leading-snug print:text-sm ${isDisq ? 'text-slate-600 line-through' : 'text-slate-800'}`}>
              {labData.lab_name}
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed print:text-[9px] print:leading-tight">
              {meta.tagline}
            </p>
            {isDisq && labData.disqualification_reason ? (
              <p className="text-[11px] text-rose-700 font-bold pt-1 print:text-[8.5px]">
                {labData.disqualification_reason}
              </p>
            ) : (
              <div className="pt-1 print:hidden space-y-1">
                <p className="text-[11px] text-slate-500 font-medium italic">
                  Opsi alternatif jika rekomendasi utama telah memenuhi kuota.
                </p>
              </div>
            )}
          </div>

          {/* Kotak Skor Sekunder */}
          <div className="bg-white border border-slate-300 rounded-xl p-3 text-center min-w-[110px] shrink-0 self-start sm:self-auto print:p-1.5 print:rounded-lg print:min-w-[65px]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5 print:text-[8px] print:mb-0">
              Skor Afinitas
            </span>
            <span className={`text-3xl font-heading font-black print:text-xl ${isDisq ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
              {score}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
