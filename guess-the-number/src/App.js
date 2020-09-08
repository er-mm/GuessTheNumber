import React, { useState } from 'react';
import Instructions from './Instructions';
import Game from './Game';
import EnterName from './EnterName';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';
import { makeStyles } from '@material-ui/core/styles';
import bg from './bg.jpg';

const useStyles = makeStyles(theme => ({
	main: {
		backgroundImage: `url(${bg})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100%',
		width: '100%',
		position: 'fixed'
	},
	sub: {
		margin: 20
	}
}));

export default () => {
	const classes = useStyles();
	const [value, setValue] = useState(false);
	const [name, setName] = useState('');
	return (<ThemeProvider theme={theme}>
		<div className={classes.main}>
			<div className={classes.sub}>
		{!name
			? <EnterName setName={setName} />
			: !value
				? <Instructions setValue={setValue} name={name} />
				: <Game setValue={setValue} setName={setName} name={name}/>
		}
		</div>
		</div>
	</ThemeProvider>
	);
};