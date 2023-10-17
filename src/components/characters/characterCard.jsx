import Stat from './stat'

function CharacterCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow m-1 p-2">
      <p className="text-base mb-1">
        Character info
      </p>
      <div className="flex items-center mb-2">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-yellow-200">
          <img src="https://api.dicebear.com/7.x/big-smile/svg?seed=Sassy" alt="" />
        </div>
        <div className="m-2">
          <h2 className="text-2xl font-bold text-slate-900">Randoquio</h2>
          <p className="text-sm text-gray-600">Novato</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Stat statType="INT" statName="INT" statValue="14" />
        <Stat statType="AGI" statName="AGI" statValue="16" />
        <Stat statType="STR" statName="CHA" statValue="7" />
        <Stat statType="HP" statName="HP" statValue="14" />
        <Stat statType="STA" statName="AGI" statValue="16" />
        <Stat statType="STR" statName="CHA" statValue="7" />
      </div>
    </div>
  );
}

export default CharacterCard;
