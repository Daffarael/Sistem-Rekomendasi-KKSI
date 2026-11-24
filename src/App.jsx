import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  GraduationCap, 
  Wrench, 
  Compass, 
  Sparkles, 
  RotateCcw, 
  Printer, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutKKSI from './components/AboutKKSI';
import HowItWorks from './components/HowItWorks';

import AkademikForm from './components/AkademikForm';
import ToolsForm from './components/ToolsForm';
import MinatForm from './components/MinatForm';
import GatekeeperResult from './components/GatekeeperResult';
import LabCard from './components/LabCard';
import RadarChart from './components/RadarChart';
import RankTable from './components/RankTable';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';

const INITIAL_FORM_DATA = {
  // Prasyarat Administratif Lapisan 1
  'Semester Pendaftaran': 'Semester 5',
  'IPK Kumulatif': '3.65',

  // 11 Mata Kuliah Fondasi Keilmuan KKSI
  'Nilai DDP': 'A',
  'Nilai SDA': 'A',
  'Nilai PBO': 'A-',
  'Nilai Pemrograman Web': 'A',
  'Nilai Manajemen Proses Bisnis': 'B+',
  'Nilai Infrastruktur TI': 'B+',
  'Nilai Sistem Operasi': 'B+',
  'Nilai Keamanan Informasi': 'A-',
  'Nilai Basis Data': 'A',
  'Nilai Perancangan Basis Data': 'A',
  'Nilai Data Mining': 'A',

  // 8 Tools Teknis (Skala 1 - 5)
  'Tools Database & SQL': 4,
  'Tools Visualisasi Data': 4,
  'Tools Python Analitik': 4,
  'Tools Pemrograman Web/App': 4,
  'Tools Desain UI/UX': 3,
  'Tools Pemodelan BPMN': 3,
  'Tools ERP & Bisnis': 3,
  'Tools Jaringan & OS': 3,

  // 4 Minat Laboratorium (Skala 1 - 5)
  'Minat Data & Analitik': 5,
  'Minat Coding & Pemrograman': 4,
  'Minat Proses Bisnis & ERP': 3,
  'Minat Server & Jaringan': 3,
};

const STEPS = [
  { id: 1, name: 'Data Akademik', icon: GraduationCap, desc: 'IPK & 11 Mata Kuliah' },
  { id: 2, name: 'Kemahiran Tools', icon: Wrench, desc: '8 Software & Bahasa' },
  { id: 3, name: 'Minat Laboratorium', icon: Compass, desc: '4 Bidang Peminatan' },
];

export default function App() {
  const [isRecommenderOpen, setIsRecommenderOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [resultData, setResultData] = useState(null);

  const handleStart = () => {
    setIsRecommenderOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToLanding = () => {
    setIsRecommenderOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleReset = () => {
    if (window.confirm('Apakah Anda yakin ingin mengatur ulang data formulir ke pengaturan awal?')) {
      setFormData(INITIAL_FORM_DATA);
      setCurrentStep(1);
      setResultData(null);
      setApiError(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#EA580C', '#FED7AA', '#FB923C', '#C2410C', '#7C2D12'],
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setApiError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server merespon dengan status: ${response.status}`);
      }

      const data = await response.json();
      setResultData(data);
      setCurrentStep(4); // Masuk ke layar hasil

      const isDataEligible = data?.is_eligible === true || data?.gatekeeper?.eligible === true;
      if (isDataEligible) {
        setTimeout(() => {
          triggerCelebration();
        }, 300);
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Inference error:', err);
      setApiError(
        'Gagal menghubungi backend API (http://127.0.0.1:5000). Pastikan backend Flask sudah aktif dengan perintah "python api.py".'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const isEligible = resultData?.is_eligible === true || resultData?.gatekeeper?.eligible === true;
  const primaryLab = resultData?.primary_recommendation || resultData?.recommendation?.primary_recommendation;
  const backupLab = resultData?.backup_recommendation || resultData?.recommendation?.backup_recommendation;
  const allRankings = resultData?.rankings || resultData?.recommendation?.all_rankings || [];
  const separationMargin = resultData?.separation_margin ?? resultData?.recommendation?.separation_margin ?? 0;

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-sans text-slate-900 selection:bg-orange-200 selection:text-orange-950">
      {/* 1. Navbar Navigasi Header */}
      <Navbar
        onReset={handleReset}
        hasResult={Boolean(resultData)}
        isRecommenderOpen={isRecommenderOpen}
        onStart={handleStart}
        onBackToLanding={handleBackToLanding}
      />

      {/* KONDISI 1: Landing Page Murni (Hanya tampil saat belum klik "Mulai Rekomendasi") */}
      {!isRecommenderOpen ? (
        <main className="flex-1 animate-fadeIn">
          {/* 2. Hero Section */}
          <Hero onStart={handleStart} />

          {/* 3. Section Mengenal KKSI */}
          <AboutKKSI />

          {/* 4. Section Cara Kerja Sistem & CTA Banner */}
          <HowItWorks onStart={handleStart} />
        </main>
      ) : (
        /* KONDISI 2: Sistem Evaluasi Rekomendasi (Hanya tampil saat tombol Mulai Rekomendasi diklik) */
        <main className="flex-1 py-10 sm:py-16 bg-[#FDFBF7] animate-fadeIn">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Header Formulir & Tombol Kembali */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-slate-900 shadow-[5px_5px_0px_0px_#0f172a] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden">
              <div>
                <button
                  type="button"
                  onClick={handleBackToLanding}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-orange-600 hover:text-slate-900 transition-colors cursor-pointer mb-2"
                >
                  <span>Kembali ke Halaman Beranda</span>
                </button>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">
                    Formulir Rekomendasi Asisten KKSI
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                  Isi data akademik, kemahiran tools, dan minat laboratorium untuk melihat rekomendasi laboratorium yang paling sesuai.
                </p>
              </div>

              {currentStep <= 3 && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-200 border-2 border-slate-900 text-slate-900 self-start sm:self-auto shrink-0 shadow-[2px_2px_0px_0px_#0f172a]">
                  Langkah {currentStep} dari 3
                </div>
              )}
            </div>

            {/* Step Wizard Header (Hand-Drawn Paper Look) */}
            {currentStep <= 3 && (
              <div className="bg-white rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] p-3.5 sm:p-5">
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {STEPS.map((step) => {
                    const Icon = step.icon;
                    const isActive = currentStep === step.id;
                    const isPassed = currentStep > step.id;

                    return (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => {
                          if (step.id < currentStep) setCurrentStep(step.id);
                        }}
                        className={`flex items-center gap-3 p-2.5 sm:p-3 rounded-xl text-left transition-all duration-200 ${
                          isActive
                            ? 'bg-orange-100 border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]'
                            : isPassed
                            ? 'bg-slate-50 hover:bg-amber-50 cursor-pointer border-2 border-slate-300'
                            : 'opacity-50 cursor-not-allowed border-2 border-transparent'
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs sm:text-sm border-2 border-slate-900 ${
                            isActive
                              ? 'bg-orange-500 text-white shadow-[1.5px_1.5px_0px_0px_#0f172a]'
                              : isPassed
                              ? 'bg-emerald-200 text-emerald-950 shadow-[1.5px_1.5px_0px_0px_#0f172a]'
                              : 'bg-slate-200 text-slate-600 border-slate-400'
                          }`}
                        >
                          {isPassed ? <CheckCircle2 className="w-5 h-5 text-emerald-900" /> : <Icon className="w-4 h-4" />}
                        </div>
                        <div className="min-w-0 hidden sm:block">
                          <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                            Langkah {step.id}
                          </div>
                          <div className={`text-xs sm:text-sm font-black truncate ${isActive ? 'text-orange-950' : 'text-slate-800'}`}>
                            {step.name}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Global API Error Alert */}
            {apiError && (
              <div className="p-4 rounded-2xl bg-rose-50 border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] flex items-start gap-3 text-rose-950 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-black block">Terjadi Gangguan Komunikasi Server</span>
                  <p className="leading-relaxed font-medium">{apiError}</p>
                </div>
              </div>
            )}

            {/* Step 1: Form Akademik */}
            {currentStep === 1 && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-slate-900 shadow-[5px_5px_0px_0px_#0f172a]">
                <AkademikForm
                  formData={formData}
                  onChange={handleFieldChange}
                  onNext={() => {
                    setCurrentStep(2);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </div>
            )}

            {/* Step 2: Form Tools & Software */}
            {currentStep === 2 && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-slate-900 shadow-[5px_5px_0px_0px_#0f172a]">
                <ToolsForm
                  formData={formData}
                  onChange={handleFieldChange}
                  onPrev={() => {
                    setCurrentStep(1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onNext={() => {
                    setCurrentStep(3);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </div>
            )}

            {/* Step 3: Form Minat Laboratorium */}
            {currentStep === 3 && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-slate-900 shadow-[5px_5px_0px_0px_#0f172a]">
                <MinatForm
                  formData={formData}
                  onChange={handleFieldChange}
                  onPrev={() => {
                    setCurrentStep(2);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onSubmit={handleSubmit}
                  isLoading={isLoading}
                />
              </div>
            )}

            {/* Step 4: Layar Hasil Evaluasi & Rekomendasi */}
            {currentStep === 4 && resultData && (
              <div className="space-y-8 animate-fadeIn">
                {/* Kasus 1: Ditolak oleh Gatekeeper Lapisan 1 */}
                {!isEligible && (
                  <GatekeeperResult
                    result={resultData.gatekeeper || resultData}
                    onBackToForm={() => {
                      setCurrentStep(1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                )}

                {/* Kasus 2: Lolos Evaluasi & Rekomendasi Siap */}
                {isEligible && (
                  <div className="space-y-8 print:space-y-2">
                    {/* Header Dokumen Cetak Ringkas */}
                    <div className="hidden print:block mb-2 pb-2 border-b-2 border-slate-900">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[9px] font-black uppercase tracking-widest text-orange-600">
                            Departemen Sistem Informasi &bull; Universitas Andalas
                          </p>
                          <h1 className="text-base font-heading font-black text-slate-900 tracking-tight mt-0.5">
                            Laporan Hasil Rekomendasi Asisten Laboratorium KKSI
                          </h1>
                        </div>
                        <div className="text-right text-[9px] text-slate-600 font-bold space-y-0.5">
                          <p className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-slate-900 font-black">
                            Lolos Administratif
                          </p>
                          <p className="text-slate-500 font-medium">
                            Dicetak: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </p>
                        </div>
                      </div>

                      {/* Ringkasan Mahasiswa Format Strip Horizontal */}
                      <div className="mt-1.5 p-1.5 rounded-lg border border-slate-900 bg-orange-50/50 grid grid-cols-3 text-[9.5px] font-bold text-slate-800">
                        <div><span className="text-slate-500 font-medium">Semester:</span> {formData['Semester Pendaftaran']}</div>
                        <div><span className="text-slate-500 font-medium">IPK Terdaftar:</span> {formData['IPK Kumulatif']}</div>
                        <div><span className="text-slate-500 font-medium">Margin Keunggulan:</span> <span className="text-emerald-700">+{separationMargin}%</span></div>
                      </div>
                    </div>

                    {/* Banner Status Lolos (Hanya tampil di Web, disembunyikan saat cetak agar pas 1 lembar) */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-orange-500 border-[2.5px] border-slate-900 text-white shadow-[6px_6px_0px_0px_#0f172a] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 print:hidden">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white border-2 border-slate-900 text-slate-900 shadow-[1.5px_1.5px_0px_0px_#0f172a]">
                          <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                          <span>HASIL REKOMENDASI RESMI</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-white drop-shadow-sm">
                          Rekomendasi Laboratorium KKSI
                        </h2>
                        <p className="text-xs sm:text-sm text-orange-50 max-w-xl leading-relaxed font-medium">
                          Berikut adalah urutan laboratorium yang paling sesuai dengan rekam akademik, penguasaan tools, dan minat keilmuan Anda.
                        </p>
                      </div>

                      {/* Ringkasan Mahasiswa */}
                      <div className="flex sm:flex-col gap-3 sm:gap-2 bg-white p-4 rounded-2xl border-2 border-slate-900 text-slate-900 text-xs shrink-0 shadow-[3px_3px_0px_0px_#0f172a]">
                        <div className="flex justify-between gap-5 font-bold">
                          <span className="text-slate-500">Semester:</span>
                          <strong className="text-slate-900">{formData['Semester Pendaftaran']}</strong>
                        </div>
                        <div className="flex justify-between gap-5 font-bold">
                          <span className="text-slate-500">IPK Terdaftar:</span>
                          <strong className="text-slate-900">{formData['IPK Kumulatif']}</strong>
                        </div>
                        <div className="flex justify-between gap-5 font-bold">
                          <span className="text-slate-500">Margin Keunggulan:</span>
                          <strong className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-slate-900">
                            +{separationMargin}%
                          </strong>
                        </div>
                      </div>
                    </div>

                    {/* Dua Kartu Rekomendasi Utama (#1) & Cadangan (#2) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch print:grid-cols-12 print:gap-2.5 print:break-inside-avoid">
                      <div className="lg:col-span-7 print:col-span-7 flex flex-col">
                        <LabCard labData={primaryLab} isPrimary={true} />
                      </div>
                      <div className="lg:col-span-5 print:col-span-5 flex flex-col">
                        <LabCard labData={backupLab} isPrimary={false} />
                      </div>
                    </div>

                    {/* Radar Visualisasi Profil Kompetensi */}
                    <RadarChart formData={formData} rankings={allRankings} />

                    {/* Tabel Pemeringkatan 4 Laboratorium */}
                    <RankTable rankings={allRankings} />

                    {/* Tombol Aksi Akhir */}
                    <div className="p-6 bg-white rounded-3xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentStep(1);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="paper-btn-secondary px-6 py-3.5 text-xs sm:text-sm inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                      >
                        <RotateCcw className="w-4 h-4 text-slate-800" />
                        <span>Uji Profil Lain / Edit Data</span>
                      </button>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => window.print()}
                          className="paper-btn-primary px-6 py-3.5 text-xs sm:text-sm inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                        >
                          <Printer className="w-4 h-4" />
                          <span>Cetak / Simpan Hasil (PDF)</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      )}

      {/* Footer Bersih */}
      <footer className="border-t border-slate-200/80 bg-white py-8 mt-12 print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
          <div>
            <p className="font-bold text-slate-900">
              Departemen Sistem Informasi &bull; Universitas Andalas
            </p>
            <p className="text-slate-500 mt-0.5">
              Kelompok Keilmuan Sistem Informasi (KKSI) Kampus Limau Manis, Padang
            </p>
          </div>
          <p className="text-slate-500 text-center sm:text-right">
            &copy; {new Date().getFullYear()} KKSI Sistem Informasi UNAND
          </p>
        </div>
      </footer>
    </div>
  );
}
