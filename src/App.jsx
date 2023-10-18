import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/layouts/login'
import Dashboard from './components/layouts/dashboard'
import RegisterUser from './components/layouts/registerUser'
import Lobbies from './components/layouts/lobbies/lobbies'
import ProtectedRoute from './components/organisms/protectedRoute'
import { useTheme } from './hooks/useTheme'

function App () {
  const { theme, toggleTheme } = useTheme()
  return (
    <div id={theme} className="block">
      <header className={`z-10 sticky w-full h-12 ${theme === 'light' ? 'bg-white' : 'bg-slate-700'}`}>
        <nav className='w-full h-12'>
          <button className='btn' onClick={toggleTheme}>{theme === 'light' ? 'dark' : 'light'}</button>
        </nav>
      </header>
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
