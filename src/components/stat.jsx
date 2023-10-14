import bicepImage from '../assets/BICEP.png';
import heartImage from '../assets/HP.png';
import inteligenceImage from '../assets/INT.png';
import brainImage from '../assets/WIS.png';
import staminaImage from '../assets/STA.png';
import agilityImage from '../assets/AGI.png';

function Stat(props) {
  const { statType, statName, statValue } = props;
  const imageMapping = {
    'STR': bicepImage,
    'DEX': bicepImage,
    'CON': bicepImage,
    'INT': inteligenceImage,
    'WIS': brainImage,
    'CHA': bicepImage,
    'STA': staminaImage,
    'AGI': agilityImage,
    'HP': heartImage,
  };

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