import Dice from '../atoms/dice'
import Test from '../molecules/characters/test'
import Inventory from '../molecules/inventory'
import Card from '../atoms/cards/card'
import CharStatus from '../atoms/characters/charStatus'
import Theme from '../molecules/theme'
import CharacterCard from '../atoms/characters/characterCard'
import ZCard from '../atoms/cards/zCard'
import HCard from '../atoms/cards/hCard'

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
