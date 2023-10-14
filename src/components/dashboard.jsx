import Dice from '@components/dice'
import Test from '@components/test'
import Inventory from './inventory'

function Dashboard() {
  
  return (
    <div className="block">
      <Test></Test>
      <Inventory></Inventory>
      <Dice></Dice>
    </div>
  )
}

export default Dashboard
