import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppState from './context/app.state';
import Users from './component/users.component';

function App() {
  return (
    <AppState>
        <Users />
    </AppState>
  );
}

export default App;
