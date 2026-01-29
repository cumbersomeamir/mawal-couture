module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222426",
        accent: "#c7a378",
        muted: "#fbf8f6",
        dark: "#111827",
        brandBg: "#fbf8f6",
        link: "#2f6f63",
        footer: "#2f3a3d"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Playfair Display", "Georgia", "serif"]
      },
      fontSize: {
        'display-lg': ['3rem', { lineHeight: '1.05', fontWeight: '700' }],
        'display-md': ['2.25rem', { lineHeight: '1.08', fontWeight: '700' }]
      },
      boxShadow: {
        subtle: '0 6px 18px rgba(16,24,40,0.06)'
      }
    }
  },
  plugins: []
};

