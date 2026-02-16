import {useState} from 'react';
import { CounterReducer, initialState } from './CounterReducer';
import { useReducer } from 'react';
const Counter = () => {
	const [inputValue, setInputValue] = useState(0);
	const [state, dispatch] = useReducer(CounterReducer, initialState)

	const handleIncrement = () => {
		dispatch({type: 'increment'});
	}

	const handleDecrement = () => {
		dispatch({type: 'decrement'});
	}

	const handleIncrementByAmount = () => {
		dispatch({type: 'incrementByAmount', payload: Number(inputValue)});
		setInputValue(0);
	}
	const handleDecrementByAmount = () => {
		dispatch({type: 'decrementByAmount', payload: Number(inputValue)});
		setInputValue(0);
	}
	const handleReset = () => {
		dispatch({type: 'reset'});
		setInputValue(0);
	}
	return(
		<div>
			<h1>Count: {state.count}</h1>
			<input className='border p-1 mr-1' value={inputValue} type='number' min={0} onChange={(e) => setInputValue(e.target.value)}/>
			<button onClick={handleIncrement} className='border bg-slate-100 text-slate-700 p-1 mr-1'>+1</button>
			<button onClick={handleDecrement}  className='border bg-slate-100 text-slate-700 p-1 mr-1'>-1</button>
			<button onClick={handleIncrementByAmount} className='border bg-slate-100 text-slate-700 p-1 mr-1'>Increment</button>
			<button onClick={handleDecrementByAmount} className='border bg-slate-100 text-slate-700 p-1 mr-1'>Decrement</button>
			<button onClick={handleReset}  className='border bg-slate-100 text-slate-700 p-1 mr-1'>Reset</button>
		</div>
	)
}

export default Counter;
