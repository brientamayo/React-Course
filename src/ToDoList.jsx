import {useState, useRef} from 'react'

const ToDoList = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('')
	const inputRef = useRef(null)
	
	const setAddTask = (e) => {
		setNewTask(e.target.value);
	};
	
	const handleAddTask = () => {
		if(newTask.trim() !== ''){
			setTasks([...tasks, newTask]);
			setNewTask('');
			inputRef.current.value = '';
		}
	};
	
	const handleDeleteTask = (index) => {
		setTasks(tasks.filter((i) => i !== tasks[index]));
	}

	return (
		<div>
			<h1>To do list App</h1>
			<input
				className='border rounded-md p-2'
				type='text'
				placeholder='Add new task'
				onChange={setAddTask}
				ref={inputRef}
			/>
			<button
				className='py-2 px-4 rounded-md text-white bg-emerald-500 hover:bg-emerald-600 cursor-pointer'
				onClick={handleAddTask}
			>Add Task
			</button>
			<ul className='mt-4'>
				{tasks.length === 0 && <li className='text-slate-500'>No added tasks yet</li>}
				{tasks.map((task, index) => (
					<li key={index}>
					{index + 1}. {task} 
					<button 
						className='p-1 text-white rounded-md bg-red-500 hover:bg-red-600 cursor-pointer'
						onClick={() => handleDeleteTask(index)}>X
					</button>
					
					</li>
				))}
			</ul>
		</div>
	)
}

export default ToDoList;