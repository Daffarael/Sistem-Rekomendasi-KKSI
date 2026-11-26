import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, GraduationCap, AlertCircle, ChevronDown, Check } from 'lucide-react';

const GRADE_OPTIONS = [
  { value: 'A', label: 'A (4.00)' },
  { value: 'A-', label: 'A- (3.75)' },
  { value: 'B+', label: 'B+ (3.50)' },
  { value: 'B', label: 'B (3.00)' },
  { value: 'B-', label: 'B- (2.75)' },
  { value: 'C+', label: 'C+ (2.50)' },
  { value: 'C', label: 'C (2.00)' },
  { value: 'D', label: 'D (1.00)' },
  { value: 'E', label: 'E (0.00)' },
  { value: 'Belum Mengambil', label: 'Belum Mengambil / Sedang Ditempuh (Belum Ada KHS)' }
];

const COURSES = [
  { key: 'Nilai DDP', name: 'Dasar-dasar Pemrograman (DDP)' },
  { key: 'Nilai SDA', name: 'Struktur Data dan Algoritma (SDA)' },
  { key: 'Nilai PBO', name: 'Pemrograman Berorientasi Objek (PBO)' },
  { key: 'Nilai Pemrograman Web', name: 'Pemrograman Web' },
  { key: 'Nilai Manajemen Proses Bisnis', name: 'Manajemen Proses Bisnis (MPB)' },
  { key: 'Nilai Infrastruktur TI', name: 'Infrastruktur Teknologi Informasi' },
  { key: 'Nilai Sistem Operasi', name: 'Sistem Operasi' },
  { key: 'Nilai Keamanan Informasi', name: 'Keamanan Informasi' },
  { key: 'Nilai Basis Data', name: 'Basis Data' },
  { key: 'Nilai Perancangan Basis Data', name: 'Perancangan Basis Data (PBD)' },
  { key: 'Nilai Data Mining', name: 'Data Mining' }
];

export default function AkademikForm({ formData, onChange, onNext }) {
  const [activeCourseKey, setActiveCourseKey] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setActiveCourseKey(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ipkVal = parseFloat(String(formData['IPK Kumulatif']).replace(',', '.'));
    if (isNaN(ipkVal) || ipkVal <= 0.0 || ipkVal > 4.00) {
      alert('Mohon masukkan nilai IPK Kumulatif Anda dengan benar dalam rentang 0.00 hingga 4.00.');
      return;
    }
    onNext();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
      {/* Intro Step */}
      <div className="border-b-2 border-slate-900 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-slate-900 bg-amber-200 text-xs font-black text-slate-900 shadow-[2px_2px_0px_0px_#0f172a] mb-2">
          <GraduationCap className="w-4 h-4 text-orange-600 stroke-[2.5]" />
          <span>Langkah 1 dari 3: Data Akademik</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-heading font-black text-slate-900 mt-1">
          Data Akademik & Nilai Mata Kuliah
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
          Data akademik digunakan untuk memeriksa pemenuhan syarat pendaftaran asisten laboratorium.
        </p>
      </div>

      {/* Bagian 1: Semester & IPK (Hand-Drawn Neo-Brutalist Box) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-orange-50/60 rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a]">
        <div>
          <label className="block text-xs sm:text-sm font-black text-slate-900 mb-2">
            Semester Pendaftaran Aktif <span className="text-orange-600">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['Semester 3', 'Semester 5'].map((sem) => {
              const isSelected = formData['Semester Pendaftaran'] === sem;
              return (
                <label
                  key={sem}
                  className={`flex items-center justify-center py-2.5 px-3 rounded-xl border-2 border-slate-900 text-xs sm:text-sm font-black cursor-pointer select-none transition-all duration-75 shadow-[0px_3px_0px_0px_#0f172a] active:translate-y-[3px] active:shadow-none ${
                    isSelected
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-slate-800 hover:bg-amber-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="Semester Pendaftaran"
                    value={sem}
                    checked={isSelected}
                    onChange={(e) => onChange('Semester Pendaftaran', e.target.value)}
                    className="sr-only"
                  />
                  {sem}
                </label>
              );
            })}
          </div>
          <p className="text-[11px] text-slate-600 mt-2 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5 text-orange-600 shrink-0" />
            <span>Terbuka untuk mahasiswa aktif Semester 3 dan Semester 5.</span>
          </p>
        </div>

        <div>
          <label htmlFor="ipk-kumulatif" className="block text-xs sm:text-sm font-black text-slate-900 mb-2">
            IPK Kumulatif Berjalan <span className="text-orange-600">*</span>
          </label>
          <div className="relative">
            <input
              id="ipk-kumulatif"
              name="ipk-kumulatif"
              type="number"
              step="0.01"
              min="0.00"
              max="4.00"
              required
              value={formData['IPK Kumulatif']}
              onChange={(e) => onChange('IPK Kumulatif', e.target.value)}
              placeholder="Contoh: 3.65"
              className="w-full px-4 py-2.5 text-sm font-bold bg-white border-2 border-slate-900 rounded-xl shadow-[2px_2px_0px_0px_#0f172a] focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <p className="text-[11px] text-slate-600 mt-2 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5 text-orange-600 shrink-0" />
            <span>Syarat minimal pendaftaran: IPK 3.00.</span>
          </p>
        </div>
      </div>

      {/* Bagian 2: 11 Mata Kuliah Fondasi KKSI */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-orange-600 stroke-[2.5]" />
            <h3 className="font-heading font-black text-slate-900 text-sm sm:text-base">
              Nilai 11 Mata Kuliah Fondasi KKSI
            </h3>
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 hidden sm:inline">
            Pilih Sesuai KHS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {COURSES.map((course) => {
            const currentVal = formData[course.key] || 'A';
            const isDropdownOpen = activeCourseKey === course.key;
            const currentOption = GRADE_OPTIONS.find((opt) => opt.value === currentVal) || GRADE_OPTIONS[0];

            return (
              <div
                key={course.key}
                className={`p-4 sm:p-5 rounded-2xl bg-white border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] space-y-3 ${
                  isDropdownOpen ? 'z-50 relative' : 'z-10 relative'
                }`}
              >
                {/* Header Kartu: Nama Mata Kuliah */}
                <div className="font-heading font-black text-slate-900 text-xs sm:text-sm leading-snug">
                  {course.name}
                </div>

                {/* Combobox Pill Presisi (Sesuai Gaya metroinstitute.site) */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveCourseKey(isDropdownOpen ? null : course.key)}
                    className={`w-full h-11 flex items-center justify-between px-5 bg-white border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_#0f172a] text-sm font-bold text-slate-900 cursor-pointer select-none transition-colors duration-150 ${
                      isDropdownOpen
                        ? 'bg-orange-50/50'
                        : 'hover:bg-slate-50'
                    }`}
                    aria-expanded={isDropdownOpen}
                  >
                    <span className="font-black text-slate-900 text-sm tracking-wide truncate pr-2">
                      {currentOption.label}
                    </span>

                    <ChevronDown
                      className={`w-4 h-4 text-slate-800 shrink-0 transition-transform duration-150 stroke-[2.5] ${
                        isDropdownOpen ? 'rotate-180 text-orange-600' : ''
                      }`}
                    />
                  </button>

                  {/* Popover Dropdown Bersih, Rapi, & Elegan */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 bg-white border-2 border-slate-900 rounded-2xl shadow-[5px_5px_0px_0px_#0f172a] p-1.5 space-y-1 max-h-56 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden animate-fadeIn">
                      {GRADE_OPTIONS.map((opt) => {
                        const isSelected = opt.value === currentVal;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => {
                              onChange(course.key, opt.value);
                              setActiveCourseKey(null);
                            }}
                            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-xs sm:text-sm font-bold cursor-pointer select-none transition-colors duration-100 ${
                              isSelected
                                ? 'bg-orange-500 text-white font-black'
                                : 'text-slate-800 hover:bg-orange-50 hover:text-orange-950'
                            }`}
                          >
                            <span className={isSelected ? 'text-white font-black' : 'text-slate-800 font-bold'}>
                              {opt.label}
                            </span>

                            {isSelected && (
                              <Check className="w-4 h-4 text-white stroke-[3] shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tombol Lanjut ke Step 2 */}
      <div className="pt-4 flex justify-end">
        <button
          type="submit"
          className="paper-btn-primary min-w-[240px] px-7 py-3.5 text-xs sm:text-sm inline-flex items-center justify-center gap-2"
        >
          <span>Lanjut ke Kemahiran Tools</span>
        </button>
      </div>
    </form>
  );
}