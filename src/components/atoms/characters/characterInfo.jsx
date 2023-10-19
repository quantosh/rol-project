function CharacterInfo () {
  return (
    <div className="flex flex-row bg-pink-400 p-1 mx-2 mt-2 rounded-md text-center max-w-xs">
      <div className="flex bg-orange-100">
        <div className="bg-slate-200 p-2">
          <img src="https://api.dicebear.com/7.x/big-smile/svg" width="100px" height="100px" alt="Character Portrait" />
        </div>
        <div className="flex flex-col justify-center mx-2">
          <p className="text-xl font-semibold">
            Mery Jenkins
          </p>
          <p className="text-sm">
            Revienta puertas
          </p>
          <blockquote className="text-sm italic">
            ¡Soy invencible!
          </blockquote>
        </div>
      </div>
      <div className="bg-lime-400 text-xs p-1 ">
        <ul className="">
          <li className="mr-2">
            <p>💪</p>
            <p>Fuerza</p>
            <p>9</p>
          </li>
          <li className="mr-2">
            <p>🧠 Inteligencia</p>
            <p></p>
            <p>16</p>
          </li>
          <li className="mr-2">
            <p>👾</p>
            <p>Carisma</p>
            <p>4</p>
          </li>
          <li className="mr-2">
            <p>🔄</p>
            <p>Percepción</p>
            <p>3</p>
          </li>
          <li className="mr-2">
            <p>💨</p>
            <p>Agilidad</p>
            <p>3</p>
          </li>
        </ul>
      </div>
    </div>

  )
}
export default CharacterInfo
