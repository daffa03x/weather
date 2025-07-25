import Image from "next/image";

const Header = () => {
  return (
        <header className="flex items-center justify-between p-5 pt-4 mb-2">
            <h1 className="text-2xl font-bold">DapWeather</h1>
            <div className="flex items-center bg-white/20 rounded-full px-3 py-2">
                <Image src="/image/search.png" alt="Search" width={16} height={16} className="mr-2" />
                <input type="text" placeholder="Search location" className="bg-transparent outline-none text-sm w-28" />
            </div>
        </header>
  )
}

export default Header