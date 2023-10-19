import HandleDarkTheme from '../atoms/nav/handleDarkTheme'

const AuthLayout = ({ children }) => {
  return (
    <div className="primary-content">
      <div className="fixed navbar bg-base-100">
        <HandleDarkTheme />
      </div>
      {children}
    </div>
  )
}

export default AuthLayout
