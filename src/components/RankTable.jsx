import React from 'react';
import { Award, BarChart3 } from 'lucide-react';

const LAB_FULL_NAMES = {
  RDBI: 'Rekayasa Data & Business Intelligence',
  SD: 'System Development (Rekayasa Perangkat Lunak)',
  SE: 'System Enterprise & Proses Bisnis',
  TKITI: 'Tata Kelola & Infrastruktur Teknologi Informasi'
};

export default function RankTable({ rankings }) {
  if (!rankings || !Array.isArray(rankings) || rankings.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-900 shadow-[5px_5px_0px_0px_#0f172a] overflow-hidden print:rounded-xl print:break-inside-avoid">
      <div className="p-6 border-b-2 border-slate-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-orange-50/50 print:p-2">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-orange-600 stroke-[2.5] print:w-3.5 print:h-3.5" />
            <h3 className="font-heading font-black text-slate-900 text-base sm:text-lg print:text-xs">
              Tabel Komparasi Keseluruhan Laboratorium
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium print:hidden">
            Perbandingan peringkat dan tingkat kecocokan profil Anda terhadap seluruh laboratorium KKSI.
          </p>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-white border-2 border-slate-900 text-slate-900 shadow-[1.5px_1.5px_0px_0px_#0f172a] self-start sm:self-auto print:hidden">
          4 Laboratorium KKSI
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm print:text-[9.5px]">
          <thead>
            <tr className="bg-amber-100/70 border-b-2 border-slate-900 text-xs font-black text-slate-900 uppercase tracking-wider print:text-[8.5px]">
              <th className="py-3.5 px-4 sm:px-6 text-center w-20 print:py-1 print:px-2">Peringkat</th>
              <th className="py-3.5 px-4 sm:px-6 print:py-1 print:px-2.5">Laboratorium</th>
              <th className="py-3.5 px-4 sm:px-6 w-60 print:py-1 print:px-2.5">Tingkat Kecocokan</th>
              <th className="py-3.5 px-4 sm:px-6 text-center print:py-1 print:px-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-slate-200 font-sans">
            {rankings.map((item, idx) => {
              const isTop = idx === 0;
              const isSecond = idx === 1;
              const score = Number(item.composite_score || 0).toFixed(1);
              const labCode = item.lab_code || 'LAB';
              const labName = item.lab_name || LAB_FULL_NAMES[labCode] || labCode;

              return (
                <tr
                  key={labCode}
                  className={`transition-colors ${
                    isTop
                      ? 'bg-orange-50/70 font-medium'
                      : isSecond
                      ? 'bg-amber-50/40'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  {/* Rank Badge */}
                  <td className="py-4 px-4 sm:px-6 text-center print:py-1 print:px-2">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-xl text-xs font-black border-2 border-slate-900 print:w-5 print:h-5 print:text-[8.5px] ${
                        isTop
                          ? 'bg-orange-500 text-white shadow-[2px_2px_0px_0px_#0f172a]'
                          : isSecond
                          ? 'bg-amber-200 text-slate-900 shadow-[1.5px_1.5px_0px_0px_#0f172a]'
                          : 'bg-white text-slate-800 shadow-[1px_1px_0px_0px_#0f172a]'
                      }`}
                    >
                      #{item.rank}
                    </span>
                  </td>

                  {/* Lab Details */}
                  <td className="py-4 px-4 sm:px-6 print:py-1 print:px-2.5">
                    <div className="space-y-0.5 print:space-y-0">
                      <div className="flex items-center gap-2 print:gap-1.5">
                        <span className="font-heading font-black text-sm text-slate-900 print:text-[10px]">
                          {labCode}
                        </span>
                        {isTop && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full bg-orange-500 text-white border border-slate-900 print:text-[7.5px] print:px-1.5 print:py-0">
                            <Award className="w-3 h-3 stroke-[2.5] print:w-2 print:h-2" /> Utama
                          </span>
                        )}
                        {isSecond && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-200 text-slate-900 border border-slate-900 print:text-[7.5px] print:px-1.5 print:py-0">
                            Cadangan
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-600 font-medium print:text-[8.5px] print:leading-tight">
                        {labName}
                      </div>
                    </div>
                  </td>

                  {/* Progress Bar & Score */}
                  <td className="py-4 px-4 sm:px-6 print:py-1 print:px-2.5">
                    <div className="space-y-1.5 print:space-y-0.5">
                      <div className="flex justify-between text-xs font-black text-slate-900 print:text-[8.5px]">
                        <span>Skor Kecocokan</span>
                        <span className={isTop ? 'text-orange-600' : 'text-slate-800'}>{score}%</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 border-2 border-slate-900 rounded-full overflow-hidden p-0.5 print:h-1.5 print:p-0">
                        <div
                          className={`h-full rounded-full border-r-2 border-slate-900 ${
                            isTop ? 'bg-orange-500' : isSecond ? 'bg-amber-400' : 'bg-slate-400'
                          }`}
                          style={{ width: `${Math.min(100, Math.max(0, score))}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4 sm:px-6 text-center print:py-1 print:px-2">
                    {isTop ? (
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 border border-slate-900 text-emerald-900 print:text-[8px] print:px-1.5 print:py-0">
                        Prioritas #1
                      </span>
                    ) : isSecond ? (
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-100 border border-slate-900 text-amber-900 print:text-[8px] print:px-1.5 print:py-0">
                        Alternatif #2
                      </span>
                    ) : (
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-500 print:text-[8px] print:px-1.5 print:py-0">
                        Cadangan
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
