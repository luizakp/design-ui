const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const neutralColor = {
	100: '#FFFFFF',
	200: '#F7F7F9',
	300: '#EBECF2',
	400: '#D7DDEA',
	500: '#BBC3D4',
	600: '#A5ADBF',
	700: '#82899A',
	800: '#4F576A',
	900: '#4F576A',
};

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			colors: {
				neutral: neutralColor,
			},
		},
	},

	// Add some basic Tailwind plugins to add additional features:
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
};
