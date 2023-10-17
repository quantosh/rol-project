import Stat from '@components/stat'

function Test() {
  return (
    <div className="max-w-6030 text-black">
      <div className="p-2 bg-white border border-gray-200 rounded-lg shadow m-1 text-c">
        <p className="text-base">
          Character info
        </p>
        <div className="flex text-[12px] align-center text-center rounded-full justify-between px-1.5 py-0.5 items-center bg-slate-200 my-1 ">
          <div className="div">Mery Jenkins</div>
          <div className="div"></div>
          <div className="div">Guerrillera</div>         
        </div>
        <div className="flex ">
          <div className="">
            <img src="https://api.dicebear.com/7.x/big-smile/svg" width="100px" height="100px" alt="Character Portrait " />
          </div>
          <div className="text-[8px] block items-center justify-center mt-2 w-full">
            <ul>
              <li className="bg-green-300 px-1 py-0.5 mb-1 rounded-sm ">HP</li>
              <li className="bg-blue-300 px-1 py-0.5 mb-1 rounded-sm">MP</li>
              <li className="bg-yellow-300 px-1 py-0.5 mb-1 rounded-sm">STA</li>
            </ul>
            <ul className="mt-1">
              <li>Height: 1,74CM</li>
              <li>Weight: 80KG</li>
              <li>Age: 24</li>
            </ul>
          </div>
        </div>
        <p className="mt-2 ml-2 block text-[8px]">Stats</p>
        <div className="">
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