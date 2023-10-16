function Card() {

  return (
    <div className="max-w-fit text-black">
      <div className="max-w-[220px] p-2 rounded-xl shadow m-1 bg-white">
        <div className=" rounded-lg">
          <div className="text-base p-1">
            Heal potion
          </div>
          <div className="flex justify-center items-center">
            <img src="https://static.vecteezy.com/system/resources/previews/023/815/904/original/potion-bottle-3d-illustration-png.png" width="80%" alt="" />
          </div>
          <div className="flex justify-between text-[8px] p-1 bg-slate-100 rounded-xl px-1.5">
            <div className="q">Object</div>
            <div className="rounded-lg text-[8px] px-1.5 py-0.4 text-center justify-center items-center bg-lime-400">Normal</div>
          </div>
          <div className="text-[8px] p-1.5 italic bg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card