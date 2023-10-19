import Lobbies from '../layouts/lobbies/lobbies'
import NavBar from '../atoms/nav/navigationBar'

function LobbiesPage () {
  return (
    <div className="">
      <div className="q">
        <NavBar></NavBar>
      </div>
      <div className="">
        <Lobbies></Lobbies>
      </div>
    </div>

  )
}

export default LobbiesPage
