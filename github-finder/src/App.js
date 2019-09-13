import React from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import UserList from './users/users.component';

function App() {
    return (
        <div className="container">
            <Navbar />
            <UserList />
        </div>
    );
}

export default App;
