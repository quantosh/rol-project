import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '@components/login'
import Dashboard from '@components/dashboard'
import RegisterUser from './components/registerUser'
import Lobbies from './components/lobbies'
import ProtectedRoute from './components/protectedRoute'

function App () {
  return (
    <div className="block">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/lobbies" element={<ProtectedRoute><Lobbies /></ProtectedRoute>} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
