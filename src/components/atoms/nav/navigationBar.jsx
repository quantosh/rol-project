import BurguerMenu from './burguerMenu'
import HandleDarkTheme from './handleDarkTheme'
import UserBubble from './userBubble'

function NavigationBar () {
  return (
    <div className="navbar bg-gradient-to-r from-indigo-600 via-[#6419e6] to-indigo-600 text-primary-content">
      <div className="ml-2 navbar-start">
        <BurguerMenu />
      </div>
      <div className="navbar-center">
        <img src="src\assets\rl-temp-white.png" width="180px" alt="" />
      </div>
      <div className="navbar-end gap-1">
        <HandleDarkTheme />
        <UserBubble></UserBubble>
      </div>
    </div>
  )
}

export default NavigationBar
