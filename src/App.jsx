import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './components/pages/loginPage'
import Dashboard from './components/layouts/allComponents'
import RegisterUser from './components/layouts/registerUser'
import LobbiesPage from './components/pages/lobbiesPage'
import ProtectedRoute from './components/organisms/protectedRoute'
import User from './components/atoms/user'

function App () {
  return (
    <div className="block">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/lobbies" element={<ProtectedRoute><LobbiesPage /></ProtectedRoute>} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
