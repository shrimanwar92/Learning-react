import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppState from './context/app-context/app.state';
import AlertState from './context/alert-context/alert.state';
import Users from './component/users.component';
import Alert from './component/alert.component';

function App() {
  return (
    <AppState>
      <AlertState>
        <Alert />
        <Users />
      </AlertState>
    </AppState>
  );
}

export default App;
