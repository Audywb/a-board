import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': {
        100: '#D8E9E4',
        300: '#2B5F44',
        500: '#243831'
      },
      'golden': '#C5A365',
      'text-base': '#191919',
      'gray':{
        100: '#BBC2C0',
        300: '#939494',
      },
      'success': '#49A569'
    }
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
