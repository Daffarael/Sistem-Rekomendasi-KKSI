import React from 'react';
import { AlertTriangle, ArrowLeft, BookOpen, ShieldAlert } from 'lucide-react';

export default function GatekeeperResult({ result, onBackToForm }) {
  const violations = result?.violations || [];
  const ipkVal = result?.details?.ipk_evaluated;
  const semVal = result?.details?.semester_evaluated;

  return (
    <div className="space-y-6">
      {/* Header Banner (Hand-Drawn / Neo-Brutalist) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-amber-100 border-[2.5px] border-slate-900 shadow-[5px_5px_0px_0px_#0f172a]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-300 border-2 border-slate-900 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#0f172a]">
            <ShieldAlert className="w-6 h-6 text-slate-900 stroke-[2.5]" />
          </div>
          <div className="space-y-1">
            <span className="inline-block text-[11px] font-black uppercase tracking-wider text-slate-900 bg-white border border-slate-900 px-2.5 py-0.5 rounded-full shadow-[1px_1px_0px_0px_#0f172a]">
              Verifikasi Prasyarat
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-black text-slate-900">
              Belum Memenuhi Syarat Pendaftaran
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              Berdasarkan ketentuan pendaftaran, data Anda belum memenuhi syarat minimum untuk rekomendasi asisten laboratorium.
            </p>
          </div>
        </div>
      </div>

      {/* Rincian Pelanggaran Administratif */}
      <div className="p-6 bg-white rounded-3xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] space-y-4">
        <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-orange-600 stroke-[2.5]" />
          <span>Poin Prasyarat yang Belum Terpenuhi:</span>
        </h3>

        <ul className="space-y-3">
          {violations.map((violation, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border-2 border-slate-900 text-xs sm:text-sm text-slate-900 shadow-[2px_2px_0px_0px_#0f172a]"
            >
              <span className="w-5 h-5 rounded-md bg-orange-500 border border-slate-900 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="font-bold leading-relaxed">{violation}</span>
            </li>
          ))}
        </ul>

        {/* Informasi Ringkasan */}
        <div className="pt-4 border-t-2 border-slate-200 grid grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
            <span className="text-slate-500 font-bold block text-[11px]">IPK yang Dievaluasi:</span>
            <strong className="text-slate-900 text-base font-black">{ipkVal !== undefined ? Number(ipkVal).toFixed(2) : '-'}</strong>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
            <span className="text-slate-500 font-bold block text-[11px]">Semester Pendaftaran:</span>
            <strong className="text-slate-900 text-base font-black">{semVal || '-'}</strong>
          </div>
        </div>
      </div>

      {/* Rekomendasi Tindak Lanjut */}
      <div className="p-6 bg-white rounded-3xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] text-xs sm:text-sm text-slate-700 space-y-2">
        <h4 className="font-black text-slate-900 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-orange-600 stroke-[2.5]" />
          <span>Saran Tindak Lanjut Akademik:</span>
        </h4>
        <p className="leading-relaxed font-medium">
          Penyaringan administratif ini bersifat pasti (<em>deterministik</em>) untuk menjamin mutu asisten pengajar. Apabila terdapat kekeliruan penginputan nilai, Anda dapat menekan tombol di bawah untuk memeriksa kembali data Anda. Jika riwayat akademik di atas sesuai dengan KHS asli, Anda disarankan untuk melakukan perbaikan nilai pada semester berjalan atau semester remedi sebelum mengikuti rekrutmen periode berikutnya.
        </p>
      </div>

      {/* Back Button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={onBackToForm}
          className="paper-btn-primary px-7 py-3.5 text-xs sm:text-sm inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          <span>Koreksi Data Pendaftaran</span>
        </button>
      </div>
    </div>
  );
}
