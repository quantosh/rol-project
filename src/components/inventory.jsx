function Inventory () {
  return (
    <div className="max-w-fit ">
      <div className="bg-white border border-gray-200 rounded-lg shadow m-1 p-2">
        <p className="block text-base">
          Inventory
        </p>
        <div className="transform transition duration-500 grid grid-cols-4 bg-slate-100 p-1 hover:bg-slate-200 rounded-md text-2xl">
          <div className="transform h-12 w-12 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center p-1 rounded-md">✨</div>
          <div className="transform h-12 w-12 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center p-1 rounded-md hover:text-2xl focus-visible:ring">🎉</div>
          <div className="transform h-12 w-12 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center p-1 rounded-md">🎊</div>
          <div className="transform h-12 w-12 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center p-1 rounded-md">🎑</div>
          <div className="transform h-12 w-12 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center p-1 rounded-md">🎭</div>
          <div className="transform h-12 w-12 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center p-1 rounded-md">🥼</div>
          <div className="transform h-12 w-12 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center p-1 rounded-md">🧶</div>
          <div className="transform h-12 w-12 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center p-1 rounded-md">🧧</div>
          <div className="transform h-12 w-12 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center p-1 rounded-md">🎫</div>
        </div>
      </div>
    </div>
  )
}

export default Inventory
