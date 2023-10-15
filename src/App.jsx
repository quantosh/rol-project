import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '@components/login'
import Dashboard from '@components/dashboard'
import RegisterUser from './components/registerUser';
import Lobbies from './components/lobbies';

function App() {  
  return (
    <div className="block">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/lobbies" element={<Lobbies />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
