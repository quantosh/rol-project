import Login from '../layouts/login'
import HandleDarkTheme from '../atoms/nav/handleDarkTheme'

function LoginPage () {
  return (
    <div className="primary-content">
      <div className="fixed navbar bg-base-100">
        <HandleDarkTheme />
      </div>
      <Login />
    </div>
  )
}

export default LoginPage
