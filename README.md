# Sistem Rekomendasi Laboratorium KKSI - Frontend

Antarmuka web interaktif untuk **Sistem Rekomendasi Asisten Laboratorium Kelompok Keilmuan Sistem Informasi (KKSI)** - Departemen Sistem Informasi, Fakultas Teknologi Informasi, Universitas Andalas.

Aplikasi ini mengadopsi estetika desain **Paper Craft / Neo-Brutalist** dengan palet resmi oranye Sistem Informasi UNAND, tombol bertekstur 3D (*keyboard keycap press*), visualisasi profil radar 5 sumbu, serta panduan pendaftaran multi-langkah yang intuitif.

---

## 4 Laboratorium KKSI yang Didukung
1. **RDBI:** Rekayasa Data dan Business Intelligence
2. **SD:** System Development
3. **SE:** System Enterprise
4. **TKITI:** Tata Kelola dan Infrastruktur Teknologi Informasi

---

## Fitur Utama Antarmuka
- **Landing Page Elegan:** Penjelasan tentang profil KKSI, peran 4 laboratorium, dan alur evaluasi profil.
- **Formulir Rekomendasi 3 Langkah:**
  - *Langkah 1 (Data Akademik):* Semester pendaftaran aktif, IPK kumulatif, dan 11 nilai mata kuliah fondasi keilmuan.
  - *Langkah 2 (Kemahiran Tools):* Penguasaan 8 kategori perangkat lunak dan bahasa pemrograman (skala 1 - 5).
  - *Langkah 3 (Minat Keilmuan):* Pemetaan minat mahasiswa terhadap bidang 4 laboratorium (skala 1 - 5).
- **Hasil Evaluasi Lengkap:**
  - Kartu Rekomendasi Utama (Peringkat #1) dan Pilihan Cadangan (Peringkat #2) dengan Skor Afinitas Komposit.
  - Diagram Radar Profil 5 Sumbu Keilmuan (Data & AI, Software Dev, Enterprise, Jaringan & Infra, Akademik).
  - Tabel Komparasi Peringkat Lengkap seluruh 4 laboratorium.
  - Peringatan Gatekeeper Administratif apabila syarat pendaftaran belum terpenuhi.

---

## Teknologi yang Digunakan
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS + Desain Custom Neo-Brutalist
- **Icons:** Lucide React
- **Efek:** Canvas Confetti

---

## Cara Menjalankan secara Lokal

1. **Clone repositori:**
   ```bash
   git clone https://github.com/Daffarael/Sistem-Rekomendasi-KKSI.git
   cd Sistem-Rekomendasi-KKSI
   ```

2. **Pasang dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Dev Server):**
   ```bash
   npm run dev
   ```
   Buka browser pada alamat `http://localhost:5173`.

4. **Build untuk produksi:**
   ```bash
   npm run build
   ```

---

## Konfigurasi Backend
Secara bawaan, frontend mengirimkan permintaan inferensi rekomendasi ke backend REST API di:
`http://127.0.0.1:5000/predict`

Pastikan server backend Flask sudah dijalankan dari repositori [Sistem-Rekomendasi-KKSI-Backend-](https://github.com/antigravity17/Sistem-Rekomendasi-KKSI-Backend-).
