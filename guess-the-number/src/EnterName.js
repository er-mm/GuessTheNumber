import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	inputField: {
		backgroundColor: 'white'
	},
	button: {
		backgroundColor: 'white',
		'&:hover': {
			backgroundColor: 'grey',
		}
	}
}));


export default props => {
	const classes = useStyles();
	const [value, setValue] = useState('');

	const changeValue = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	}

	const click = (e) => {
		e.preventDefault();
		props.setName(value);
	}

	return (
		<Grid container direction="column" alignItems="center" spacing={2} justify="center">
			<Grid item>
				<Typography variant="h2" gutterBottom>{`Please Enter Your Name!`}</Typography>
			</Grid>
			<Grid item>
			<TextField className={classes.inputField} autoComplete variant="filled" autoFocus onChange={changeValue} />
			</Grid>
			<Grid item>
				<Button variant="contained" color="primary" disabled={value ? false : true} onClick={click}>{`OK`}</Button>
			</Grid>
		</Grid>
	);
};