import CharacterInfo from '@components/characterInfo'
import Dice from '@components/dice'
import Test from '@components/test'

function Dashboard() {
  
  return (
    <div className="block ">
      <CharacterInfo></CharacterInfo>
      <Test></Test>
      <Dice></Dice>
      <Dice></Dice>
    </div>
  )
}

export default Dashboard
