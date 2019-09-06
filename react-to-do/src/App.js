import React, { useState } from 'react';
import './App.css';
import Todo from './todo/Todo';
import TodoInput from './todo/add-todo';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, {title: todo, isCompleted: false}]);
    };

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((todo, i) => i != index);
        setTodos(newTodos);
    };

    return(
        <div className="todos__container">
            <div className="my-todos">
                <TodoInput addTodo={addTodo}/>
                {todos.length > 0 &&
                    <div className="todos__todo-list">
                        {todos.map((todo, index) => (
                          <Todo
                            key={index}
                            index={index}
                            todo={todo}
                            completeTodo={completeTodo}
                            deleteTodo={deleteTodo}
                          />
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default App;
