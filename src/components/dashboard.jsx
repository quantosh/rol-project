import Dice from '@components/dice'
import Test from '@components/test'
import Inventory from './inventory'
import Card from './card'
import CharStatus from './charStatus'
import Theme from './theme'
import CharacterCard from './characterCard'

function Dashboard() {

  return (
    <div className="q">
      <div className="flex">
        <CharacterCard></CharacterCard>
        <Test></Test>
        <Inventory></Inventory>
        <Dice></Dice>
        <Card></Card>
        <CharStatus></CharStatus>
      </div>
      <div className=""><Theme></Theme></div>
    </div>
  )
}

export default Dashboard
