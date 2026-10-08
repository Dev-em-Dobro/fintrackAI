import { Sidebar } from './_components/sidebar'
import { Header } from './_components/header'

export default function Home() {
    return (
        <div className="flex min-h-screen bg-[#0F111A]">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header userName="Usuário" date={new Date()} />
                <main className="p-8 space-y-8"></main>
            </div>
        </div>
    )
}
