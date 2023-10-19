function User () {
  return (
    <div className="max-w-fit ">
      <div className="q">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
          <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' className="absolute flex h-32 w-full justify-center rounded-xl bg-cover" />
            <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
              <img className="h-full w-full rounded-full" src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png' alt="" />
            </div>
        </div>
        <div className="avatar">
          <div className="w-20 rounded">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
        <div className="q">Level</div>
        <div className="q">About me</div>
        <div className="q">Member since</div>
      </div>
      <img src="https://i.gyazo.com/0ee65fea8b1fdd62730758316f01c937.png" alt="" />
    </div>
  )
}

export default User
