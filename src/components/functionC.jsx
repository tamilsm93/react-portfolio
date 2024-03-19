import React from 'react'

function useCounter(initialValue=0){
	const [count, setCount] = React.useState(initialValue);

	const increment = () => {
		setCount(count+1);
	};

	const decrement = () => {
		setCount(count -1);
	};

	return {
		count,
		increment,
		decrement,
	};
}

function CounterComponent() {
	const {count, increment, decrement} = useCounter(0);
	return(
		<div>
			<h2>Counter: </h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	)
}
