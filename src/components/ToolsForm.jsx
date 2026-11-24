import React from 'react';
import { Wrench } from 'lucide-react';

const TOOLS_LIST = [
  {
    key: 'Tools Database & SQL',
    title: 'Database & SQL',
    examples: 'MySQL, PostgreSQL, Oracle, kueri kompleks, relasi tabel & optimasi indeks'
  },
  {
    key: 'Tools Visualisasi Data',
    title: 'Visualisasi Data & Dashboard',
    examples: 'Tableau, Power BI, Looker Studio, visual storytelling & reporting'
  },
  {
    key: 'Tools Python Analitik',
    title: 'Python untuk Sains Data & Analitik',
    examples: 'Pandas, NumPy, Scikit-Learn, Matplotlib, Jupyter Notebook'
  },
  {
    key: 'Tools Pemrograman Web/App',
    title: 'Pengembangan Web & Aplikasi',
    examples: 'React, Node.js, Laravel, Flutter, arsitektur REST API & Git'
  },
  {
    key: 'Tools Desain UI/UX',
    title: 'Perancangan Antarmuka & Pengalaman Pengguna',
    examples: 'Figma, Adobe XD, wireframing, design system & user testing'
  },
  {
    key: 'Tools Pemodelan BPMN',
    title: 'Pemodelan Proses Bisnis (BPMN)',
    examples: 'Bizagi Modeler, Signavio, Camunda, analisis SOP & proses enterprise'
  },
  {
    key: 'Tools ERP & Bisnis',
    title: 'Sistem Informasi Enterprise & ERP',
    examples: 'Odoo, SAP, Supply Chain Management, integrasi modul bisnis'
  },
  {
    key: 'Tools Jaringan & OS',
    title: 'Administrasi Jaringan & Server OS',
    examples: 'Cisco Packet Tracer, Linux Terminal, Wireshark, Mikrotik, routing & keamanan'
  }
];

const SCALE_LABELS = {
  1: '1 - Pemula',
  2: '2 - Dasar',
  3: '3 - Menengah',
  4: '4 - Mahir',
  5: '5 - Sangat Mahir'
};

export default function ToolsForm({ formData, onChange, onNext, onPrev }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Step Header */}
      <div className="border-b-2 border-slate-900 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-slate-900 bg-amber-200 text-xs font-black text-slate-900 shadow-[2px_2px_0px_0px_#0f172a] mb-2">
          <Wrench className="w-4 h-4 text-orange-600 stroke-[2.5]" />
          <span>Langkah 2 dari 3: Kemahiran Tools</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-heading font-black text-slate-900 mt-1">
          Kemahiran Perangkat Lunak & Tools
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
          Pilih skala 1 sampai 5 yang paling mencerminkan kemampuan praktis Anda saat ini.
        </p>
      </div>

      {/* Grid 8 Tools */}
      <div className="space-y-4">
        {TOOLS_LIST.map((tool, idx) => {
          const currentVal = parseInt(formData[tool.key] || 3, 10);
          return (
            <div
              key={tool.key}
              className="p-5 bg-white rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] space-y-3"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-orange-100 border-2 border-slate-900 text-orange-900 text-xs font-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#0f172a]">
                  {idx + 1}
                </span>
                <h3 className="font-heading font-black text-slate-900 text-sm sm:text-base">
                  {tool.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {tool.examples}
              </p>

              {/* 5 Rating Scale Buttons (Hand-Drawn) */}
              <div className="pt-1">
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((lvl) => {
                    const isSelected = currentVal === lvl;
                    return (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => onChange(tool.key, lvl)}
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
                  Tingkat: {SCALE_LABELS[currentVal]}
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
          className="paper-btn-secondary px-6 py-3.5 text-xs sm:text-sm inline-flex items-center gap-2"
        >
          <span>Kembali ke Data Akademik</span>
        </button>

        <button
          type="submit"
          className="paper-btn-primary min-w-[240px] px-7 py-3.5 text-xs sm:text-sm inline-flex items-center justify-center gap-2"
        >
          <span>Lanjut ke Minat Keilmuan</span>
        </button>
      </div>
    </form>
  );
}