function Inventory() {

  return (
    <div className="max-w-fit">
      <div className="p-2 bg-white border border-gray-200 rounded-lg shadow m-1">
        <p className="py-2 block text-[8px]">
          Inventory
        </p>
        <div className="grid grid-cols-4 bg-slate-100 p-1 hover:bg-slate-200 rounded-md">
          <div className="p-1 rounded-md hover:bg-slate-300">✨</div>
          <div className="p-1 rounded-md hover:bg-slate-300">🎉</div>
          <div className="p-1 rounded-md hover:bg-slate-300">🎊</div>
          <div className="p-1 rounded-md hover:bg-slate-300">🎑</div>
          <div className="p-1 rounded-md hover:bg-slate-300">🎭</div>
          <div className="p-1 rounded-md hover:bg-slate-300">🥼</div>
          <div className="p-1 rounded-md hover:bg-slate-300">🧶</div>
          <div className="p-1 rounded-md hover:bg-slate-300">🧧</div>
          <div className="p-1 rounded-md hover:bg-slate-300">🎫</div>
        </div>
      </div>
    </div>
  )
}

export default Inventory