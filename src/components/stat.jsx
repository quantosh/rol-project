import bicepImage from '../assets/bicep.png';

function Stat(props) {
  const { statType, statName, statValue } = props;
  const imageMapping = {
    'STR': bicepImage,
    'DEX': null,
    'CON': null,
    'INT': null,
    'WIS': null,
    'CHA': null,
  };

  return (
    <div className="p-2 ml-1 mt-1 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-2">
      <div className="shrink-0">
        <img className="h-5 " src={imageMapping[statType]} alt={statName} />
      </div>
      <div>
        <div className="text-xs font-medium text-black">{statName}</div>
        <p className="text-slate-700 text-xs">{statValue}</p>
      </div>
    </div>

    
  )
}
export default Stat