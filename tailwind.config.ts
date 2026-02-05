import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F7',
        warm: {
          50: '#FDFCFB',
          100: '#FAF9F7',
          200: '#F5F3EF',
          300: '#E5E2DE',
          400: '#9C958D',
          500: 'hsl(25, 25%, 50%)',
          600: 'hsl(25, 30%, 40%)',
          700: 'hsl(25, 35%, 30%)',
          800: '#2D2A26',
        },
        medical: {
          50: '#E8F4F4',
          100: '#D1E9E8',
          200: '#A3D3D2',
          300: '#4A8080',
          500: '#2D5A5A',
          600: 'hsl(195, 60%, 40%)',
          700: '#1F3D3D',
          900: '#0F1E1E',
        },
        rose: {
          50: '#FDF8F8',
          100: '#F5E6E6',
          200: '#ECD0D0',
          300: '#C8A4A4',
          500: '#9C6B6B',
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          600: '#059669',
        },
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(45, 90, 90, 0.08)',
        'glow': '0 0 30px rgba(45, 90, 90, 0.12)',
        'glass': '0 8px 32px 0 rgba(31, 61, 61, 0.08)',
        'pill': '0 2px 8px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #FAF9F7 0%, #E8F4F4 50%, #F5E6E6 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
