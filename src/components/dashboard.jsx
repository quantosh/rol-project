import Dice from './dices/dice'
import Test from './characters/test'
import Inventory from './inventory'
import Card from './cards/card'
import CharStatus from './characters/charStatus'
import Theme from './theme'
import CharacterCard from './characters/characterCard'
import ZCard from './cards/zCard'
import HCard from './cards/hCard'

function Dashboard () {
  return (
    <div className="q">
      <div className="flex">

      </div>
      <h1 className="text-xl m-2">Character components</h1>
      <div className="flex">
        <Test></Test>
        <CharacterCard></CharacterCard>
        <CharStatus></CharStatus>
      </div>
      <h1 className="text-xl m-2">Cards components</h1>
      <div className="flex">
        <Card></Card>
        <ZCard></ZCard>
        <HCard></HCard>
      </div>
      <h1 className="text-xl m-2">Logic components</h1>
      <div className="q">
        <Inventory></Inventory>
        <Dice></Dice>
      </div>
      <h1 className="text-xl m-2">Other components</h1>
      <div className=""><Theme></Theme></div>
    </div>
  )
}

export default Dashboard
