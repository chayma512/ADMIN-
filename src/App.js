import React from 'react';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./app.css";

// Adjust these paths based on your directory structure
import Home from './Pages/home/Home';
import UserList from './Pages/home/userList/UserList';

function App() {
    return (
        <Router>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Switch>
                    <Route exact path="/" >
                    <Home />
                    </Route>
                
                    <Route path="/users" >
                    <UserList />
                </Route>
                <Route path='/user/:userId'>
                    <User />
                    </Route>
                    </Switch>
            </div>
        </Router>
    );
}

export default App;
