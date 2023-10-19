import BurguerMenu from './burguerMenu'
import HandleDarkTheme from './handleDarkTheme'

function NavigationBar () {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="ml-2 navbar-start">
        <BurguerMenu />
      </div>
      <div className="navbar-center">
        <img src="src\assets\rl-temp-white.png" width="180px" alt="" />
      </div>
      <div className="navbar-end">
        <HandleDarkTheme />
      </div>
    </div>
  )
}

export default NavigationBar
