import Dice from './dices/dice'
import Test from './characters/test'
import Inventory from './inventory'
import Card from './cards/card'
import CharStatus from './characters/charStatus'
import Theme from './theme'
import CharacterCard from './characters/characterCard'
import ZCard from './cards/zCard'
import HCard from './cards/hCard'

function Dashboard() {

  return (
    <div className="q">
      <div className="flex">
        <HCard></HCard>
      </div>
      <div className="q">
        <ZCard></ZCard>
        <CharacterCard></CharacterCard>
        <CharStatus></CharStatus>
      </div>
      <div className="q">
        <Card></Card>
        <Inventory></Inventory>
      </div>
      <div className="q">
        <Test></Test>
        <Dice></Dice>
      </div>
      <div className=""><Theme></Theme></div>
    </div>
  )
}

export default Dashboard
