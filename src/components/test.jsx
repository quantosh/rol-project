import Stat from '@components/stat'

function Test() {
  return (
    <div className="max-w-fit">
      <div className="p-2 bg-white border border-gray-200 rounded-lg shadow m-1">
        <p className="py-2 block text-[8px]">
          Character info
        </p>
        <div className="flex">
          <div className="">
            <img src="https://api.dicebear.com/7.x/big-smile/svg" width="100px" height="100px" alt="Character Portrait" />
          </div>
          <div className="text-[8px] flex items-center justify-center">
            <ul>
              <li>Height: 1,74CM</li>
              <li>Weight: 80KG</li>
              <li>Age: 24</li>
            </ul>
          </div>
        </div>
        <div className="align-center text-center">
          <p className="text- font-semibold">
            Mery Jenkins
          </p>
          <p className="text-xs text-slate-600">
            Revienta puertas
          </p>
          <blockquote className="text-center text-xs bg-gradient-to-r from-blue-600 via-yellow-500 to-yellow-400 text-transparent bg-clip-text">
            ¡Soy invencible!
          </blockquote>
        </div>
        <div className="mt-2">
          <div className="flex-row">
            <Stat statType="HP" statName="HP" statValue="17" />
            <Stat statType="STA" statName="STA" statValue="8" />
            <Stat statType="STR" statName="XAR" statValue="9" />
          </div>
          <div className="flex">
            <Stat statType="STR" statName="STR" statValue="17" />
            <Stat statType="STR" statName="DEX" statValue="8" />
            <Stat statType="STR" statName="CON" statValue="9" />
          </div>
          <div className="flex">
            <Stat statType="INT" statName="INT" statValue="14" />
            <Stat statType="AGI" statName="AGI" statValue="16" />
            <Stat statType="STR" statName="CHA" statValue="7" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Test