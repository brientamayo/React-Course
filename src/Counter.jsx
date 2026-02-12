import {useState} from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	
	return(
		<div>
			<h1>You clicked {count} times</h1>
			<button
				className='border'
				onClick={() => setCount(count + 1)}>
				Add 1
			</button>
			<button
				className='border'
				onClick={() => {
					if(count > 0){
						setCount(count - 1);
					}
				}}>
				Subract 1
			</button>
            <button 
                className='border' 
                onClick={() => {
                    if(count !== 0){
                        setCount(0);
                    }
                }}>
                Reset
            </button>
		</div>
	)
}

export default Counter;
