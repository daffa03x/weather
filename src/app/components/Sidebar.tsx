import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
        <footer className="fixed bottom-0 left-0 right-0 mx-auto max-w-sm px-5 pt-4 pb-2 bg-gradient-to-t from-blue-600 to-transparent">
            <div className="flex justify-around items-center bg-white/20 rounded-full py-3">
                <Link href="/" className="flex flex-col items-center">
                    <Image src="/image/the_day.png" alt="Hari Ini" width={20} height={20} style={{ filter: "invert(1)" }} />
                    <span className="text-xs mt-1">Hari Ini</span>
                </Link>
                <Link href="/map" className="flex flex-col items-center">
                    <Image src="/image/perjam.png" alt="Per Jam" width={20} height={20} style={{ filter: "invert(1)" }} />
                    <span className="text-xs mt-1">Per Jam</span>
                </Link>
                <Link href="/forecast" className="flex flex-col items-center">
                    <Image src="/image/forecasting.png" alt="Forecast" width={20} height={20} style={{ filter: "invert(1)" }} />
                    <span className="text-xs mt-1">Forecast</span>
                </Link>
                <Link href="/settings" className="flex flex-col items-center">
                    <Image src="/image/settings.png" alt="Settings" width={20} height={20} style={{ filter: "invert(1)" }} />
                    <span className="text-xs mt-1">Settings</span>
                </Link>
            </div>
        </footer>
  )
}

export default Sidebar