/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scrollbar: {
        width: "4px",
        trackColor: "#f1f1f1",
        thumbColor: "#ccc",
        thumbHoverColor: "#aaa",
      },
    },
  },
  plugins: [
    // Register the custom scrollbar plugin
    function ({ addUtilities }) {
      const scrollbar = {
        /* Apply custom scrollbar styles using Tailwind CSS utility classes */
        /* Webkit (Chrome, Safari) */
        ".scrollbar::-webkit-scrollbar": {
          width: "4px",
        },
        ".scrollbar::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          background: "#ccc",
          borderRadius: "2px",
        },
        ".scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "#aaa",
        },
      };

      addUtilities(scrollbar, ["responsive", "hover"]);
    },
  ],
};
