import React from 'react';
import logo from './logo.svg';
import './App.css';
import GithubState from './context/github.state';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Routes from './Routes';

function App() {
  return (
    <GithubState>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </GithubState>
  );
}

export default App;
