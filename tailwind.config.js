export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				selasar: {
					primary: '#DF2040',
					gray: '#F8F2F2',
					black: '#1D1113',
					content: '#746D6E',
					disabled: '#746D6E20',
				}
			},
			fontSize: {
				tiny: '0.625rem',
			},
			zIndex: {
				'1000': '1000',
			},
			width: {
				'25':'25px',
				'19':'19px'
			},
			height: {
				'27':'27px',
				'18':'18px'
			},
			spacing: {
				'50%': '50%',
			  }
		},
	},
	plugins: [],
};
