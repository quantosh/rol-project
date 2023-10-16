function Theme() {

  return (
    <div className="max-w-fit p-2 ml-1 bg-white border border-gray-200 rounded-lg shadow m-1">
      <div className="m-5">
        <h2 className="mb-4 text-2xl text-green-700 font-bold">Toggle</h2>
        🌞
        <div className="inline-block w-10">
          <span data-toggle-theme="dark" data-act-class="pl-4" className="border rounded-full border-green-700 flex items-center cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0">
            <span className="rounded-full w-3 h-3 m-1 bg-green-700">
            </span>
          </span>
        </div>
        🌚
      </div>

      <div className="m-5">
        <h2 className="mb-4 text-2xl text-green-700 font-bold">Buttons</h2>
        <button data-act-class="shadow-outline" data-set-theme="" className="bg-green-700 focus:outline-none m-1 rounded p-2">Default</button>
        <button data-act-class="shadow-outline" data-set-theme="dark" className="bg-green-700 focus:outline-none m-1 rounded p-2">Dark</button>
        <button data-act-class="shadow-outline" data-set-theme="black" className="bg-green-700 focus:outline-none m-1 rounded p-2">Black</button>
        <button data-act-class="shadow-outline" data-set-theme="🌸" className="bg-green-700 focus:outline-none m-1 rounded p-2">🌸 Pink</button>
        <button data-act-class="shadow-outline" data-set-theme="🐬" className="bg-green-700 focus:outline-none m-1 rounded p-2">🐬 Blue</button>
        <button data-act-class="shadow-outline" data-set-theme="🐤" className="bg-green-700 focus:outline-none m-1 rounded p-2">🐤 Yellow</button>
      </div>

      <div className="m-5">
        <h2 className="mb-4 text-2xl text-green-700 font-bold">Select</h2>
        <select data-choose-theme className="focus:outline-none h-10 rounded-full px-3 border">
          <option value="">Default</option>
          <option value="dark">Dark</option>
          <option value="black">Black</option>
          <option value="🌸">🌸 Pink</option>
          <option value="🐬">🐬 Blue</option>
          <option value="🐤">🐤 Yellow</option>
        </select>
      </div>
    </div>
  )
}

export default Theme