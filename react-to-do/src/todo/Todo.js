import React from 'react';

const Todo = ({todo, index, completeTodo, deleteTodo}) => {

	return(
		<div className="todo">
			<span className={todo.isCompleted ? 'completed' : ''}>{todo.title}</span>
			<div className="todo__buttons">
				<button className="complete" disabled={todo.isCompleted} onClick={() => completeTodo(index)}>Complete</button>
				<button className="delete" onClick={() => deleteTodo(index)}>X</button>
			</div>
		</div>
	);
};
export default Todo;