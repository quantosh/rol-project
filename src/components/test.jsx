import Stat from '@components/stat'

function Test() {
  return (
    <div className="flex bg-lime-300">
      <div className="">
        <div className="">
          <img src="https://api.dicebear.com/7.x/big-smile/svg" width="100px" height="100px" alt="Character Portrait" />
        </div>
        <div className="">
          <p className="text-xl font-semibold">
            Mery Jenkins
          </p>
          <p className="text-sm">
            Revienta puertas
          </p>
          <blockquote className="text-sm italic">
            ¡Soy invencible!
          </blockquote>
        </div>
      </div>
      <div className="">
        <div className="flex">
          <Stat statName="STR" statValue="17" />
          <Stat statName="DEX" statValue="8" />
          <Stat statName="CON" statValue="9" />
        </div>
        <div className="flex">
          <Stat statName="INT" statValue="14" />
          <Stat statName="WIS" statValue="16" />
          <Stat statName="CHA" statValue="7" />
        </div>
      </div>
    </div>
  )
}
export default Test