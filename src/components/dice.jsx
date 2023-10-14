function Dice() {

  return (
    <div className="max-w-fit p-2 bg-white border border-gray-200 rounded-lg shadow m-1">
    <p className="py-2 text-[8px]">
      Dice
    </p>
    <div className=""></div>
        <picture className="">
          <img src="https://img.freepik.com/premium-vector/pixel-art-dice-bit-game-icon-white-background_360488-55.jpg" width="100px" alt="Character Portrait" />
        </picture>
        <button type="button" className="text-xs text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Roll!</button>
    </div>
  )
}

export default Dice