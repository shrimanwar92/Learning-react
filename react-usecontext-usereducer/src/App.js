import React, {useState, useReducer} from 'react';
import Header from './header';
import './App.css';
import TaskInput from './task-input';
import uuid from 'uuid/v4';
import TodoList from './todo-list';
import Filter from './filter';

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
  const [filter, setFilter] = useState(-1);

  const [todos, dispatchTodos] = useReducer(function(state, action) {
    switch(action.type) {
      case 'ADD_TODO':
        return [...state, action.item];
      break;
      case 'UPDATE_TODO':
        return state.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
      });
      break;
    }
  },initialTodos);

  const add = (todo) => {
    const item = {
      id: uuid(),
      name: todo,
      complete: false
    }
    dispatchTodos({type: 'ADD_TODO', item: item});
  };

  const updateTodoList = (id) => {    
    dispatchTodos({type: 'UPDATE_TODO', id: id});
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === -1) {
      return true;
    }
    if (filter === 1 && todo.complete) {
      return true;
    }
    if (filter === 0 && !todo.complete) {
      return true;
    }
    return false;
  });
  
  return (
    <div className="main">
      <Header />
      <div className="container">
        <TaskInput addTodo={add}/>
        <Filter currentFilter={(e) => setFilter(e)} />
        <div className="todo-list-container">
          <TodoList list={filteredTodos} updateList={updateTodoList} />
        </div>
      </div>
    </div>
  );
}

export default App;
