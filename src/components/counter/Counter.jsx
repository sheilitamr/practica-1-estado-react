import { useState } from 'react';
import Button from '../button/Button';

const Counter = () => {
	const [counter, setCounter] = useState(0);
	console.log(counter);

	return (
		<>
			<h1>{counter}</h1>
			<Button action={() => increment(counter, setCounter)} text='+1' />
			<Button action={() => decrement(counter, setCounter)} text='-1' />
			<Button action={() => reset(setCounter)} text='reset' />
		</>
	);
};

const increment = (counter, setCounter) => {
	setCounter(counter + 1);
};
const decrement = (counter, setCounter) => {
	setCounter(counter - 1);
};
const reset = setCounter => {
	setCounter(0);
};

export default Counter;
