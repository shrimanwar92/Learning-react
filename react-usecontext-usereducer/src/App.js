import React, {useState, useEffect} from 'react';
import Header from './header';
import './App.css';
import TaskInput from './task-input';
import uuid from 'uuid/v4';
import TodoList from './todo-list';

const initialTodos = [
  {
    id: uuid(),
    name: 'Learn React',
    complete: true,
  },
  {
    id: uuid(),
    name: 'Learn Firebase',
    complete: true,
  },
  {
    id: uuid(),
    name: 'Learn GraphQL',
    complete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  /*useEffect(() => {

  }, [todos]);*/

  const add = (todo) => {
    setTodos([...todos, {id: uuid(), name: todo, complete: false}]);
  };

  const updateTodoList = (id) => {
    let updatedTodos = todos.map(todo => {
      if(todo.id == id) {
        todo.complete = !todo.complete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };
  
  return (
    <div className="main">
      <Header />
      <div className="container">
        <TaskInput addTodo={add}/>
        <div className="todo-list-container">
          <TodoList list={todos} updateList={updateTodoList} />
        </div>
      </div>
    </div>
  );
}

export default App;
