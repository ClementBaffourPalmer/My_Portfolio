/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        electric: {
          DEFAULT: '#2878FF',
          hover: '#1B64E4',
          subtle: 'rgba(40, 120, 255, 0.1)',
          border: 'rgba(40, 120, 255, 0.25)',
        },
        charcoal: {
          DEFAULT: '#111318',
          deep: '#0B0D11',
          light: '#181B22',
        },
        panel: {
          DEFAULT: '#20242D',
          border: '#2D3340',
          hover: '#282E3B',
        },
        light: {
          bg: '#F4F5F7',
          surface: '#FFFFFF',
          panel: '#FFFFFF',
          border: '#E4E7EC',
          hover: '#F8F9FA',
          subtle: '#EEF1F5',
        },
        muted: {
          DEFAULT: '#9298A5',
          light: '#6B7280',
          dark: '#A3A9B7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'elevated': '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
        'blue-glow': '0 0 20px -3px rgba(40, 120, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
