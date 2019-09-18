import React from 'react';
import logo from './logo.svg';
import './App.css';
import GithubState from './context/github.state';
import Routes from './Routes';

function App() {
  return (
    <GithubState>
      <div className="App">
        <Routes />
      </div>
    </GithubState>
  );
}

export default App;
