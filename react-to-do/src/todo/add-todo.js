import React, {useState} from 'react';

function TodoInput({addTodo}) {
	const [value, setValue] = useState("");

	const add = (event) => {
		event.preventDefault();
		if(!value) return;
		
		if(event.which === 13) {
			addTodo(value);
			setValue("");
		}
	};

	return(
		<div className="todo-input">
			<input 
				type="text" 
				className="todo-input" 
				placeholder="Press enter to add todo" 
				onKeyUp={add} 
				onChange={e => setValue(e.target.value)} 
				value={value}
			/>
		</div>
	);
}

export default TodoInput;