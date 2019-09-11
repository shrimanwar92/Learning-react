import React, {useState} from 'react';

const TaskInput = ({addTodo}) => {
	const [name, setName] = useState('');

	const handleSubmit = (event) => {
		if(name) {
			// add todo item
			addTodo(name);
		}
		setName('');
		event.preventDefault();
	};

	return(
		<div className="todo-input-container">
			<form onSubmit={handleSubmit}>
				<input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Press enter to submit" />
				<button className="submit" type="submit">Add Todo</button>
			</form>
		</div>
	);
};

export default TaskInput;