/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./kksi.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Poppins"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        kksi: {
          primary: '#EA580C', // Oranye Resmi Sistem Informasi UNAND (Tailwind Orange 600)
          ice: '#FED7AA',     // Highlight Peach / Soft Orange (Tailwind Orange 200)
          mid: '#FB923C',     // Oranye Menengah (Tailwind Orange 400)
          deep: '#C2410C',    // Oranye Pekat (Tailwind Orange 700)
          navy: '#7C2D12',    // Teks Gelap Oranye / Burnt Umber (Tailwind Orange 900)
          surface: '#FFF7ED', // Latar Permukaan Lembut (Tailwind Orange 50)
        },
      },
      backgroundImage: {
        'kksi-gradient': 'linear-gradient(135deg, #EA580C 0%, #FB923C 50%, #FDBA74 100%)',
        'kksi-header': 'linear-gradient(135deg, #7C2D12 0%, #EA580C 50%, #FB923C 100%)',
      },
      boxShadow: {
        'kksi-card': '0 4px 20px -2px rgba(234, 88, 12, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'kksi-hover': '0 10px 25px -3px rgba(234, 88, 12, 0.16), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
