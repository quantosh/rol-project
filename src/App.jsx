import './App.css'
import CharacterInfo from '@components/characterInfo'
import Dice from '@components/dice'
import Test from '@components/test'

function App() {
  
  return (
    <>
    <div className="block ">
      <CharacterInfo></CharacterInfo>
      <Test></Test>
      <Dice></Dice>
      <Dice></Dice>
    </div>
    </>
  )
}

export default App
