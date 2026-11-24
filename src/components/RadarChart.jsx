import React from 'react';
import { Compass } from 'lucide-react';

export default function RadarChart({ formData, rankings }) {
  const gradeMap = { A: 4.0, 'A-': 3.75, 'B+': 3.5, B: 3.0, 'B-': 2.75, 'C+': 2.5, C: 2.0, D: 1.0, E: 0.0 };

  const getMatkulScore = (...keys) => {
    let letter = 'B';
    for (const k of keys) {
      if (formData?.[k]) {
        letter = formData[k];
        break;
      }
    }
    return ((gradeMap[letter] || 3.0) / 4.0) * 100.0;
  };

  const getToolScore = (key) => {
    const val = Number(formData?.[key] || 3);
    return Math.max(0, Math.min(100, ((val - 1) / 4.0) * 100.0));
  };

  const getMinatScore = (key) => {
    const val = Number(formData?.[key] || 3);
    return Math.max(0, Math.min(100, ((val - 1) / 4.0) * 100.0));
  };

  // Kalkulasi Skor Tiap Pilar (0 - 100):
  // Pilar 1: Basis Data & Analitik (RDBI)
  const scoreData = Math.round(
    0.25 * getMatkulScore('Nilai Basis Data') +
    0.25 * getMatkulScore('Nilai Data Mining') +
    0.15 * getToolScore('Tools Database & SQL') +
    0.15 * getToolScore('Tools Python Analitik') +
    0.20 * getMinatScore('Minat Data & Analitik')
  );

  // Pilar 2: Rekayasa Software & Coding (SD)
  const scoreSoftware = Math.round(
    0.25 * getMatkulScore('Nilai PBO', 'Nilai Pemrograman Berorientasi Objek') +
    0.20 * getMatkulScore('Nilai Pemrograman Web') +
    0.15 * getToolScore('Tools Pemrograman Web/App') +
    0.20 * getToolScore('Tools Desain UI/UX') +
    0.20 * getMinatScore('Minat Coding & Pemrograman')
  );

  // Pilar 3: Proses Bisnis & Enterprise (SE)
  const scoreEnterprise = Math.round(
    0.25 * getMatkulScore('Nilai Manajemen Proses Bisnis', 'Nilai Analisis dan Perancangan Bisnis') +
    0.20 * getMatkulScore('Nilai SIM', 'Nilai Sistem Informasi Manajemen') +
    0.15 * getToolScore('Tools Pemodelan BPMN') +
    0.20 * getToolScore('Tools ERP & Bisnis') +
    0.20 * getMinatScore('Minat Proses Bisnis & ERP')
  );

  // Pilar 4: Jaringan & Infrastruktur (TKITI)
  const scoreNetwork = Math.round(
    0.30 * getMatkulScore('Nilai Infrastruktur TI', 'Nilai Jaringan Komputer') +
    0.20 * getMatkulScore('Nilai Keamanan Informasi') +
    0.25 * getToolScore('Tools Jaringan & OS') +
    0.25 * getMinatScore('Minat Server & Jaringan')
  );

  // Pilar 5: Fondasi Akademik Keseluruhan
  const ipkNum = parseFloat(formData?.['IPK Kumulatif'] || formData?.ipk || 3.5);
  const scoreAkademik = Math.round(Math.min(100, Math.max(0, (ipkNum / 4.0) * 100.0)));

  const axes = [
    { label: 'Data & AI (RDBI)', shortLabel: 'Data & AI', value: scoreData },
    { label: 'Software Dev (SD)', shortLabel: 'Software Dev', value: scoreSoftware },
    { label: 'Enterprise (SE)', shortLabel: 'Enterprise', value: scoreEnterprise },
    { label: 'Jaringan & Infra (TKITI)', shortLabel: 'Jaringan & Infra', value: scoreNetwork },
    { label: 'Fondasi Akademik (IPK)', shortLabel: 'Akademik (IPK)', value: scoreAkademik }
  ];

  // SVG Geometry Calculation (Canvas 480x360; Center 240, 180; Radius 100)
  const cx = 240;
  const cy = 180;
  const r = 100;
  const totalAxes = axes.length;
  const angleStep = (2 * Math.PI) / totalAxes;
  const startAngle = -Math.PI / 2; // Mulai dari atas (North)

  const getCoordinates = (axisIndex, val) => {
    const angle = startAngle + axisIndex * angleStep;
    const distance = (val / 100) * r;
    const x = cx + distance * Math.cos(angle);
    const y = cy + distance * Math.sin(angle);
    return { x, y };
  };

  const gridLevels = [25, 50, 75, 100];
  const gridPolygons = gridLevels.map((lvl) => {
    return axes
      .map((_, i) => {
        const { x, y } = getCoordinates(i, lvl);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  });

  const userPolygon = axes
    .map((axis, i) => {
      const { x, y } = getCoordinates(i, axis.value);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-900 shadow-[5px_5px_0px_0px_#0f172a] p-6 sm:p-8 space-y-6 print:p-2.5 print:rounded-xl print:space-y-1.5 print:break-inside-avoid">
      <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4 print:pb-1">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-orange-600 stroke-[2.5] print:w-3.5 print:h-3.5" />
          <h3 className="font-heading font-black text-slate-900 text-base sm:text-lg print:text-xs">
            Radar Profil Kompetensi Mahasiswa
          </h3>
        </div>
        <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-100 text-slate-900 border-2 border-slate-900 shadow-[1.5px_1.5px_0px_0px_#0f172a] print:hidden">
          5 Sumbu Keilmuan
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed print:hidden">
        Visualisasi pemetaan 5 pilar kompetensi yang mencakup perpaduan nilai mata kuliah, kemahiran tools perangkat lunak, dan minat laboratorium mahasiswa.
      </p>

      {/* Grid Kontainer: Radar SVG di Kiri, Rincian Nilai di Kanan Tanpa Tabrakan */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 print:grid-cols-12 print:gap-3 print:pt-0">
        {/* Kolom Kiri: Canvas Radar SVG yang Lapang dan Terisolasi */}
        <div className="lg:col-span-7 print:col-span-6 flex justify-center w-full">
          <div className="w-full max-w-[420px] print:max-w-[205px]">
            <svg viewBox="0 0 480 360" className="w-full h-auto drop-shadow-sm select-none">
              {/* Background Grid Polygons */}
              {gridPolygons.map((points, idx) => (
                <polygon
                  key={idx}
                  points={points}
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  strokeDasharray={idx < 3 ? '3 3' : 'none'}
                />
              ))}

              {/* Axis Lines */}
              {axes.map((_, i) => {
                const outer = getCoordinates(i, 100);
                return (
                  <line
                    key={i}
                    x1={cx}
                    y1={cy}
                    x2={outer.x}
                    y2={outer.y}
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                );
              })}

              {/* Grid Percentage Labels on Top Axis */}
              {gridLevels.map((lvl) => {
                const pt = getCoordinates(0, lvl);
                return (
                  <text
                    key={lvl}
                    x={pt.x + 5}
                    y={pt.y - 2}
                    fontSize="9"
                    fontWeight="800"
                    fill="#64748b"
                  >
                    {lvl}%
                  </text>
                );
              })}

              {/* User Polygon Fill & Stroke */}
              <polygon
                points={userPolygon}
                fill="rgba(234, 88, 12, 0.22)"
                stroke="#EA580C"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              {/* Data Points on vertices */}
              {axes.map((axis, i) => {
                const pt = getCoordinates(i, axis.value);
                return (
                  <circle
                    key={i}
                    cx={pt.x}
                    cy={pt.y}
                    r="5.5"
                    fill="#EA580C"
                    stroke="#0F172A"
                    strokeWidth="2"
                  />
                );
              })}

              {/* Axis Labels (Jarak aman dihitung presisi agar tetap di dalam kanvas) */}
              {axes.map((axis, i) => {
                const angle = startAngle + i * angleStep;
                const labelDistance = r + 22;
                const lx = cx + labelDistance * Math.cos(angle);
                const ly = cy + labelDistance * Math.sin(angle);

                let textAnchor = 'middle';
                if (Math.cos(angle) > 0.3) textAnchor = 'start';
                else if (Math.cos(angle) < -0.3) textAnchor = 'end';

                return (
                  <text
                    key={i}
                    x={lx}
                    y={ly}
                    fontSize="11"
                    fontWeight="800"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fill="#0F172A"
                    textAnchor={textAnchor}
                    dominantBaseline="central"
                  >
                    {axis.shortLabel}
                  </text>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Kolom Kanan: Rincian Kartu Nilai Kompetensi */}
        <div className="lg:col-span-5 print:col-span-6 w-full space-y-2.5 print:space-y-1">
          <div className="text-xs font-black text-slate-900 uppercase tracking-wider mb-2 print:hidden">
            Rincian Nilai Kompetensi:
          </div>
          {axes.map((axis, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-orange-50/60 border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a] flex items-center justify-between text-xs print:p-1.5 print:rounded-lg print:text-[9.5px]"
            >
              <span className="text-slate-800 font-bold">{axis.label}</span>
              <span className="font-heading font-black text-orange-600 bg-white px-2.5 py-0.5 rounded-lg border border-slate-900 shadow-[1px_1px_0px_0px_#0f172a] print:px-1.5 print:py-0 print:text-[9.5px]">
                {axis.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}