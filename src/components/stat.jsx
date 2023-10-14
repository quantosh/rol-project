function Stat(props) {
  const { statName, statValue } = props;

  return (
    <div className="p-2 ml-1 mt-1 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-2">
      <div className="shrink-0">
        <img className="h-5 " src="https://static.vecteezy.com/system/resources/thumbnails/023/611/570/small/pixel-heart-isolated-pink-png.png" />
      </div>
      <div>
        <div className="text-xs font-medium text-black">{statName}</div>
        <p className="text-slate-700 text-xs">{statValue}</p>
      </div>
    </div>
  )
}
export default Stat