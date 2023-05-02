export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontSize: {
			lg: '18px',
			md: '14px',
			sm: '10px',
		},
		extend: {
			colors: {
				'selasar-primary': '#DF2040',
				'selasar-gray': '#F8F2F2',
				'selasar-black': '#1D1113',
				'selasar-content': '#746D6E',
				'selasar-disabled': '#746D6E20',
			},
		},
	},
	plugins: [],
};
