function ZCard () {
  return (
    <div className="flex">
      <div className="block">
        <div className="max-w-[220px] p-1 rounded-xl border shadow m-1 bg-black">
          <div className="max-w-[220px] rounded-md border shadow m-0.5 bg-white">
            <div className="p-[2px]">
              <div className="text-[9px] flex justify-between bg-slate-100 rounded-xl border border-slate-900 font-bold ">
                <div className="pl-1">Heal potion</div>
              </div>
              <div className="flex justify-center items-center border  border-slate-900 mx-1">
                <img src="https://static.vecteezy.com/system/resources/previews/023/815/904/original/potion-bottle-3d-illustration-png.png" width="85%" alt="" />
              </div>
              <div className="flex text-black justify-between text-[8px] bg-slate-100 rounded-xl px-1.5 py-0.5 border border-slate-900 ">
                <div className="flex font-bold">Objecto</div>
                <div className="flex rounded-lg text-[6px] px-1.5 py-0.4 text-center justify-center items-center text-white bg-slate-400">Normal</div>
              </div>
              <div className="text-[8px] px-1 mx-1 border border-slate-900">
                <p>Whenever and opponent cast their first noncreature spell each turn, draw a card unless that player pays X, where X is esper sentile power</p>
                <p className="italic">The more Esper changes, the more he refuses to.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-[6px] rounded-xl px-1.5 border border-slate-900 text-white">
            <div className="flex px-0.5">Pepe Flores</div>
            <div className="flex px-0.5">2023</div>
          </div>
        </div>
      </div>
      <div className="m-1">
        <img src="https://cards.scryfall.io/large/front/f/3/f3537373-ef54-4578-9d05-6216420ee349.jpg?1626093502" width="241px" alt="" />
      </div>
    </div>
  )
}

export default ZCard
