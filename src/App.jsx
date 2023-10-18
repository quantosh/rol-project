import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/layouts/login'
import Dashboard from './components/layouts/dashboard'
import RegisterUser from './components/layouts/registerUser'
import Lobbies from './components/layouts/lobbies/lobbies'
import ProtectedRoute from './components/organisms/protectedRoute'

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
