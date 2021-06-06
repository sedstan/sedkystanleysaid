module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            titillium: ['Titillium Web, sans-serif'],
            roboto: ['Roboto, sans-serif'],
        },
        container: {
            center: true,
        },
        extend: {
            colors: {
                copper: '#a8763e',
                oldLace: '#f7f3e3',
                cultured: '#ecf0f1',
                barnRed: '#6f1a07',
                bistro: '#2b2118',
            },
            backgroundOpacity: {
                '09': '0.9',
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            width: {
                75: '18.75em',
                100: '25em',
            },
        },
        future: {
            removeDeprecatedGapUtilities: true,
        },
    },
    variants: {
        extend: {
          display: ['group-hover']
        },
    },
}
