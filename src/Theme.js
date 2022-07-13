import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
	typography: {
		h2: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			fontSize: '2.5rem',
			color: 'white',
			lineHeight: 1.5
		},
		h3: {
			fontFamily: 'Raleway',
			fontSize: '1.75rem',
			color: 'white',
			fontWeight: 700,
		},
		h4: {
			fontFamily: 'Raleway',
			fontSize: '1.25rem',
			color: 'white',
			fontWeight: 550,
		},
		h5: {
			fontFamily: 'Raleway',
			fontSize: '1.25rem',
			color: 'white',
			fontWeight: 550,
		},
		h6: {
			fontFamily: 'Raleway',
			fontSize: '1.0rem',
			color: 'white',
			fontWeight: 600,
			marginTop: '8px',
			textAlign: 'center'
		},
		subtitle1: {
			fontFamily: 'Raleway',
			fontSize: '1.25rem',
			fontWeight: 550,
			color: 'red',
		},
		subtitle2: {
			fontFamily: 'Raleway',
			fontSize: '1.25rem',
			fontWeight: 500,
			color: 'red',
		}
	}
})