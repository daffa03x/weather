import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <main className="flex-1 overflow-y-auto">
                <div className="flex justify-center items-start min-h-screen">
                    <div className="w-full max-w-sm flex flex-col text-white font-[family-name:var(--font-geist-sans)] shadow-lg py-4 pb-24 bg-gradient-to-b from-blue-400 to-blue-600">
                        <Header />
                        {children}
                        <Sidebar />
                        <div className="h-10" /> {/* Space tambahan di paling bawah */}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AppLayout