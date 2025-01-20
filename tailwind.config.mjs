import { transform } from 'next/dist/build/swc/generated-native';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: ['var(--font-inter)', "sans-serif"],
			roboto: ['var(--font-roboto)', 'sans-serif'],
		  },
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		keyframes: {
  			move: {
  				'to': {
  					transform: 'translate(-100px,-100px) rotate(360deg)'
  				}
  			},
  			movereverse: {
  				'to': {
  					transform: 'translate(-100px,100px)'
  				}
  			},
  			'gradient-shift': {
  				'0%, 100%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				}
  			}
  		},
  		animation: {
  			move: 'move 10s ease-in-out infinite alternate',
  			'move-reverse': 'movereverse 10s ease-in-out infinite alternate',
  			gradient: 'gradient-shift 1s ease infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
