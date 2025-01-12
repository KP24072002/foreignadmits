
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx}",
    // other paths for your app
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#0F172A', // Deep dark blue for background
          surface: '#1E293B', // Rich dark surface for content areas
          accent: '#3B82F6', // Vibrant blue for accents
          textPrimary: '#E5E7EB', // Soft white for primary text
          textSecondary: '#9CA3AF', // Light gray for secondary text
          border: '#4B5563', // Mid-tone gray for subtle borders
          hover: '#4A5568', // Refined gray for hover effects
          heading: '#F1F5F9', // Brighter white for headings
          fixedElement: '#1C2530', // Darker shade for fixed elements like navbars
        },
      },
    },
  },
  plugins: [],
};
