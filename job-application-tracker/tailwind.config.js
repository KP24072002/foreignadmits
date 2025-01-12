// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    "./src/**/*.{html,js,jsx}",
    // other paths for your app
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          primary: '#1f2937', // Grayish for primary text
          secondary: '#4B5563', // Secondary text
          background: '#F3F4F6', // Light background
          border: '#E5E7EB', // Light border
          accent: '#2563EB', // Accent color for highlights/buttons
        },
        // Dark mode colors - Elegant and Rich
        dark: {
          primary: '#D1D5DB', // Lighter text color in dark mode
          secondary: '#9CA3AF', // Secondary text in dark mode
          background: '#121212', // Deep dark background
          border: '#333333', // Darker border color
          accent: '#9C27B0', // Rich purple accent for highlights/buttons
          highlight: '#BB86FC', // Light purple for emphasis
          muted: '#505050', // Muted text color
          card: '#1E1E1E', // Dark background for cards or components
          input: '#3A3A3A', // Dark input field background
        },
      },
    },
  },
  
  plugins: [],
};



// module.exports = {
//   darkMode: 'class', // Enables class-based dark mode
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };
