function Stat (props) {
  const { statType, statName, statValue } = props
  const imageMapping = {
    STR: null,
    DEX: null,
    CON: null,
    INT: null,
    WIS: null,
    CHA: null,
    STA: null,
    AGI: null,
    HP: null
  }

  return (
    <div className="p-2 ml-1 mt-1 max-w-sm bg-white rounded-xl border flex items-center space-x-2">
      <div className="shrink-0">
        <img className="h-5 " src={imageMapping[statType]} alt={statName} />
      </div>
      <div>
        <div className="text-[10px] font-medium text-black">{statName}</div>
        <p className="text-[8px] text-slate-700 font-thin">{statValue}</p>
      </div>
    </div>
  )
}
export default Stat
