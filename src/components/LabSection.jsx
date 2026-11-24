import React from 'react';
import { Database, Code2, Building2, Network, Sparkles } from 'lucide-react';

const LABS = [
  {
    code: 'RDBI',
    name: 'Rekayasa Data dan Business Intelligence',
    icon: Database,
    tagline: 'Sains Data, Business Intelligence & Analitik Prediktif',
    accentColor: 'bg-orange-500',
    badgeBg: 'bg-orange-100 text-orange-950',
    description:
      'Laboratorium yang berfokus pada siklus hidup data komprehensif: pemodelan gudang data (data warehouse), analitik prediktif berbasis machine learning, serta perancangan visualisasi dasbor strategis untuk pengambilan keputusan organisasi.',
    fokusUtama: [
      'Data Warehousing & ETL Pipeline',
      'Machine Learning & Analisis Statistik',
      'Dasbor Visualisasi & Business Intelligence'
    ]
  },
  {
    code: 'SD',
    name: 'System Development',
    icon: Code2,
    tagline: 'Rekayasa Perangkat Lunak, Fullstack Web/Mobile & Clean Architecture',
    accentColor: 'bg-amber-500',
    badgeBg: 'bg-amber-100 text-amber-950',
    description:
      'Laboratorium yang mengkaji metodologi rekayasa perangkat lunak modern, pengembangan aplikasi web dan mobile dengan Clean Architecture, perancangan REST/GraphQL API yang skalabel, serta implementasi standar UI/UX profesional.',
    fokusUtama: [
      'Modern Web & Mobile App Development',
      'Arsitektur Sistem & REST API Terdistribusi',
      'Prinsip OOP, Clean Code & Desain UI/UX'
    ]
  },
  {
    code: 'SE',
    name: 'System Enterprise',
    icon: Building2,
    tagline: 'Transformasi Proses Bisnis, Arsitektur Enterprise & Sistem ERP',
    accentColor: 'bg-orange-600',
    badgeBg: 'bg-orange-100 text-orange-950',
    description:
      'Laboratorium yang mendalami keselarasan antara strategi korporat dengan teknologi informasi, pemodelan alur kerja bisnis dengan notasi BPMN, integrasi sistem enterprise, serta konfigurasi solusi ERP terpadu.',
    fokusUtama: [
      'Pemodelan & Simulasi Alur Kerja (BPMN)',
      'Enterprise Resource Planning (ERP / Odoo)',
      'Audit & Keselarasan Strategis Proses Bisnis'
    ]
  },
  {
    code: 'TKITI',
    name: 'Tata Kelola & Infrastruktur TI',
    icon: Network,
    tagline: 'Keandalan Jaringan Komputer, Administrasi Server & Ketahanan Siber',
    accentColor: 'bg-amber-600',
    badgeBg: 'bg-amber-100 text-amber-950',
    description:
      'Laboratorium yang berfokus pada perancangan topologi jaringan berkecepatan tinggi, administrasi sistem operasi dan server Linux/Cloud, kepatuhan tata kelola teknologi informasi (IT Governance), serta pengujian keamanan siber.',
    fokusUtama: [
      'Topologi Jaringan Komputer & Routing',
      'Administrasi Server Linux & Cloud Services',
      'Keamanan Siber & Tata Kelola Infrastruktur TI'
    ]
  }
];

export default function LabSection({ onStart }) {
  return (
    <section id="laboratorium" className="py-16 sm:py-24 bg-[#FDFBF7] border-t-2 border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-2 border-slate-900 bg-amber-200 text-xs font-black uppercase tracking-wider text-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
            KELOMPOK KEILMUAN SISTEM INFORMASI (KKSI)
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight leading-tight">
            4 Laboratorium Keilmuan Spesialisasi
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-sans font-medium">
            Setiap laboratorium di Departemen Sistem Informasi UNAND memiliki fokus riset, silabus praktikum, serta ekosistem keahlian yang unik. Kenali profil masing-masing laboratorium sebelum menentukan pilihanmu.
          </p>
        </div>

        {/* 4 Cards Grid (Hand-Drawn / Neo-Brutalist Paper Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LABS.map((lab) => {
            const Icon = lab.icon;
            return (
              <div
                key={lab.code}
                className="bg-white border-[2.5px] border-slate-900 rounded-3xl shadow-[5px_5px_0px_0px_#0f172a] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                {/* Header Card (Orange / Hand-Drawn Accent) */}
                <div className="p-6 border-b-2 border-slate-900 bg-orange-50/70 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500 border-2 border-slate-900 flex items-center justify-center text-white shrink-0 shadow-[2px_2px_0px_0px_#0f172a]">
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-orange-700 block">
                        LABORATORIUM KKSI
                      </span>
                      <h3 className="text-2xl font-heading font-black text-slate-900 leading-none mt-0.5">
                        {lab.code}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-black px-3 py-1 rounded-full bg-white border-2 border-slate-900 text-slate-900 shadow-[1.5px_1.5px_0px_0px_#0f172a]">
                    Departemen SI
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="text-base font-heading font-black text-slate-900 leading-snug">
                      {lab.name}
                    </h4>

                    {/* Tagline */}
                    <div className="p-2.5 rounded-xl bg-amber-100 border-2 border-slate-900 text-xs font-bold text-slate-900 shadow-[1.5px_1.5px_0px_0px_#0f172a]">
                      {lab.tagline}
                    </div>

                    {/* Deskripsi */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium pt-1">
                      {lab.description}
                    </p>
                  </div>

                  {/* Fokus Utama Pembelajaran */}
                  <div className="pt-4 border-t-2 border-slate-100 space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">
                      Fokus Praktikum & Riset:
                    </span>
                    <ul className="space-y-1.5 text-xs font-bold text-slate-800">
                      {lab.fokusUtama.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA Hand-Drawn di Bawah Lab Section */}
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-100 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-heading font-black text-slate-900">
              Masih ragu laboratorium mana yang paling selaras dengan kemampuanmu?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              Gunakan sistem rekomendasi untuk mengevaluasi rekam akademik dan minatmu secara objektif.
            </p>
          </div>

          <button
            type="button"
            onClick={onStart}
            className="paper-btn-primary px-6 py-3 text-xs sm:text-sm whitespace-nowrap shrink-0 inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Mulai Evaluasi Sekarang</span>
          </button>
        </div>
      </div>
    </section>
  );
}
