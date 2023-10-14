import Dice from '@components/dice'
import Test from '@components/test'
import Inventory from './inventory'
import Card from './card'

function Dashboard() {
  
  return (
    <div className="flex">
      <Test></Test>
      <Inventory></Inventory>
      <Dice></Dice>
      <Card></Card>
    </div>
  )
}

export default Dashboard
