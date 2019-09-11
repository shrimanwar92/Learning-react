import React, {useState} from 'react';

const TodoList = ({list, updateList}) => {

	const handleUpdate = (id) => {
		updateList(id);
	};
	
	return(
		<ul>
	        {list.map(todo => (
	          <Todo key={todo.id} todo={todo} updateTodo={handleUpdate}/>
	        ))}
      	</ul>
	);
};

const Todo = ({todo, updateTodo}) => {

	const handleChange = (id) => {
		updateTodo(id);
	};
	
	return(
		<div className="item">
			<label>
				<input type="checkbox" checked={todo.complete} onChange={() => handleChange(todo.id)} />
			</label>
			<li className={todo.complete ? 'complete' : ''}>{todo.name}</li>
		</div>
	);
};

export default TodoList;