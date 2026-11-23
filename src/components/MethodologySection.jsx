import React from 'react';
import { ShieldAlert, Cpu, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

export default function MethodologySection() {
  return (
    <section id="metodologi" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-kksi-navy border border-kksi-ice shadow-sm">
            Arsitektur Penilaian Cerdas
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Bagaimana Sistem Kami Bekerja?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            Sistem menggunakan pendekatan <strong>Two-Tier Decoupled Architecture</strong> untuk memastikan kepatuhan regulasi akademik dan akurasi prediksi machine learning tanpa bias kebocoran data.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Lapisan 1: Gatekeeper */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold border border-amber-200">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Lapisan 1: Rule Gatekeeper
                </span>
                <h3 className="text-base font-heading font-bold text-slate-900 mt-2">
                  Penyaringan Administratif
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mengevaluasi prasyarat formal akademik pendaftaran secara deterministik sebelum menjalankan beban inferensi kecerdasan buatan.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Mahasiswa aktif Semester 3 atau 5
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  IPK berjalan minimal 3.00
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Bebas nilai mutu E pada mata kuliah fondasi
                </li>
              </ul>
            </div>
            <div className="mt-5 text-[11px] text-amber-700 bg-amber-50/70 p-2.5 rounded-lg border border-amber-100 font-medium">
              Gugur syarat langsung diberi rekomendasi perbaikan tanpa pemodelan AI.
            </div>
          </div>

          {/* Lapisan 2A: Cosine Similarity */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-kksi-primary flex items-center justify-center font-bold border border-kksi-ice">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-kksi-navy bg-kksi-surface px-2 py-0.5 rounded border border-kksi-ice">
                  Lapisan 2A: Vektor Afinitas
                </span>
                <h3 className="text-base font-heading font-bold text-slate-900 mt-2">
                  Centroid Cosine Similarity
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mengukur sudut kedekatan vektor 23 fitur murni (11 MK, 8 tools, 4 minat) terhadap sentroid karakteristik 70 asisten aktif tiap laboratorium.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kksi-primary shrink-0" />
                  Normalisasi DomainFixedScaler [0.0, 1.0]
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kksi-primary shrink-0" />
                  Mengisolasi kebocoran data (IPK disisihkan)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kksi-primary shrink-0" />
                  Menghasilkan skor kemiripan 0% - 100%
                </li>
              </ul>
            </div>
            <div className="mt-5 text-[11px] text-kksi-navy bg-kksi-surface p-2.5 rounded-lg border border-kksi-ice font-medium">
              Menilai keselarasan riil minat & portofolio dengan kultur lab.
            </div>
          </div>

          {/* Lapisan 2B: XGBoost Classifier */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold border border-indigo-200">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                  Lapisan 2B: Ensemble ML
                </span>
                <h3 className="text-base font-heading font-bold text-slate-900 mt-2">
                  XGBoost Probability
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Model pohon keputusan mutakhir memprediksi probabilitas multi-kelas laboratorium yang dipadukan 50:50 dengan skor Cosine.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  Dilatih dengan data riil survei 70 asisten
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  Skor Komposit = 0.5(Cosine) + 0.5(XGBoost)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  Menghasilkan Lab Utama (#1) & Cadangan (#2)
                </li>
              </ul>
            </div>
            <div className="mt-5 text-[11px] text-indigo-900 bg-indigo-50/70 p-2.5 rounded-lg border border-indigo-100 font-medium">
              Menghasilkan keputusan terkalibrasi dengan margin pembeda yang jelas.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
