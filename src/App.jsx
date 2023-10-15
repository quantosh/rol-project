import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '@components/login'
import Dashboard from '@components/dashboard'
import RegisterUser from './components/registerUser';

function App() {  
  return (
    <div className="block">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<RegisterUser />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
