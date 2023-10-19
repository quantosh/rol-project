import { auth } from '../../main'
import { Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <div className="loading-component">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    )
  }

  if (user) {
    return children
  } else {
    return <Navigate to={'/'} replace={true} />
  }
}

export default ProtectedRoute
