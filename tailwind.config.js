module.exports = {
	content: [
		'./public/index.html',
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
			},
			colors: {
				primary: {
					DEFAULT: '#0ea5e9',
					foreground: '#0b1220',
				},
				accent: '#22c55e',
			},
			boxShadow: {
				soft: '0 10px 30px rgba(0,0,0,0.08)',
			},
			borderRadius: {
				md: '12px',
			},
		},
	},
	plugins: [],
};
