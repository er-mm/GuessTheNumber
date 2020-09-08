import React, { useState, useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	inputField: {
		backgroundColor: 'white',
	}
}));

export default props => {
	const classes = useStyles();
	const textRef = useRef();
	const [value, setValue] = useState({
		message: `Please Enter Number from 0-100`,
		error: false,
		helperText: '',
		inputValue: '',
		count: 5,
		randomNum: Math.floor(Math.random() * 101),
		flagMessage: ''
	});

	useEffect(() => {
		textRef.current && textRef.current.focus();
	})

	const checkValidations = (e) => {
		e.preventDefault();
		const inputValue = e.target.value;
		if (inputValue.match(/^[0-9]{1,2}$|^100$|^0[1-9]{2}$|^00[1-9]{1}$|^000$/))
			setValue({ ...value, inputValue, error: false, helperText: '' })
		else setValue({ ...value, inputValue: '', error: true, helperText: 'Only numbers ranging 0-100' })
	}

	const playAgain = (e) => {
		e.preventDefault();
		setValue({
			message: `Please Enter Number from 0-100`,
			error: false,
			helperText: '',
			inputValue: '',
			count: 5,
			randomNum: Math.floor(Math.random() * 101),
			flagMessage: ''
		});
	}

	const goBack = (e) => {
		e.preventDefault();
		props.setValue(false);
		props.setName('');
	}

	const click = (e) => {
		e.preventDefault();
		let { inputValue, count, randomNum, flagMessage } = value;
		let message = '';
		count = count - 1;
		if (inputValue > randomNum && count > 0) {
			message = "Please type a smaller number. Guess left " + count;
		}
		else if (inputValue < randomNum && count > 0) {
			message = "Please type a greater number. Guess left " + count;
		}
		else if (inputValue === randomNum) {
			flagMessage = "Congrats!! You guess correctly : The Number is " + inputValue;
			message = "Congrats  !!!. You Guess the number in " + (5 - count) + " chances. :) ";
		}
		else if (count === 0) {
			flagMessage = "Sorry you cannot guess correct number .. My number was : " + randomNum;;
			message = "Guess left " + count;
		}
		setValue({ ...value, message, count, flagMessage, inputValue: '' });
	}

	return (
		<Grid container direction="column" alignItems="center" spacing={2} justify="center">
			<Grid item>
				<Typography variant="h5" gutterBottom>{value.message}</Typography>
			</Grid>
			<Grid item>
				{value.flagMessage
					? <Typography variant="h3" gutterBottom>{value.flagMessage}</Typography>
					: <TextField
						className={classes.inputField}
						error={value.error}
						id="standard-error-helper-text"
						helperText={value.helperText}
						onChange={checkValidations}
						value={value.inputValue}
						inputRef={textRef}
						type="number"
					/>}
			</Grid>
			<Grid item>
				{value.flagMessage
					? <Grid container direction="column" alignItems="center" spacing={2} justify="center">
						<Grid item>
							<Typography variant="h5" gutterBottom>{`Do You Want to play again?`}</Typography>
						</Grid>
						<Grid item>
							<ButtonGroup color="primary" aria-label="outlined primary button group">
								<Button variant="contained" color="primary" onClick={playAgain}>{'YES'}</Button>
								<Button variant="contained" color="primary" onClick={goBack}>{'NO'}</Button>
							</ButtonGroup>
						</Grid>
					</Grid>
					: <Button variant="contained" color="primary" disabled={value.inputValue ? false : true} onClick={click}>{`Click`}</Button>
				}
			</Grid>
		</Grid>
	);
};