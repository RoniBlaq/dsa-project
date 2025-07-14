const config = {
  content: [
   "./pages/*.js",
   "./pages/*.jsx",
   "./components/*.js",
    "./components/*.jsx"
  ],
  theme: {
    extent: {
      colors: {
        crimson: '#DC143C',
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
