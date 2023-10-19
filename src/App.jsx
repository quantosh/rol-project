import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './components/pages/loginPage'
import Dashboard from './components/layouts/allComponents'
import LobbiesPage from './components/pages/lobbiesPage'
import LobbyPage from './components/pages/lobbyPage'
import ProtectedRoute from './components/organisms/protectedRoute'
import User from './components/atoms/user'
import { ToastContainer } from 'react-toastify'
import RegisterPage from './components/pages/registerPage'

function App () {
  return (
    <div className="block">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/lobbies" element={<ProtectedRoute><LobbiesPage /></ProtectedRoute>} />
          <Route path="/lobby/:id" element={<ProtectedRoute><LobbyPage /></ProtectedRoute>} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
      <ToastContainer position='bottom-right' />
    </div>
  )
}

export default App
