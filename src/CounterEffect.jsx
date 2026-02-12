import { useState, useEffect} from 'react';

const CounterEffect = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])
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
					} else {
                        console.log('Clicked times cannot become negative')
                    }
				}}>
				Subract 1
			</button>
            <button 
                className='border' 
                onClick={() => {
                    if(count !== 0){
                        setCount(0);
                    } else {
                        console.log('The clicked times is already 0');
                    }
                }}>
                Reset
            </button>
		</div>
	)
}

export default CounterEffect;
