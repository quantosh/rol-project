function Dice() {

  return (
    <div className="max-w-fit ">
      <div className="bg-white border border-gray-200 rounded-lg shadow m-1 p-2">
        <p className="text-base text-black">
          Dice
        </p>
        <div className="content-center align-middle justify-center">
          <picture className="">
            <img src="https://img.freepik.com/premium-vector/pixel-art-dice-bit-game-icon-white-background_360488-55.jpg" width="100px" alt="Character Portrait" />
          </picture>
          <button type="button" className="mt-2 text-xs text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Roll!</button>
        </div>
      </div>

    </div>
  )
}

export default Dice