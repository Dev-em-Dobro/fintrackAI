import { Sidebar } from './_components/sidebar'
import { Header } from './_components/header'
import BalanceCard from './_components/balance-card'
import { FinancialMetricCard } from './_components/financial-metric-card'
import { ChartCard } from './_components/chart-card'
import { AiInsights } from './_components/ai-insights'

export default function Home() {
    return (
        <div className="flex min-h-screen bg-[#0F111A]">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header userName="Usuário" date={new Date()} />
                <main className="p-8 space-y-8">
                    <section className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                        <div className="lg:col-span-2 col-span-1">
                            <BalanceCard
                                balance={2700}
                                revenues={5000}
                                expenses={2300}
                            />
                        </div>
                        <FinancialMetricCard difference={300} percentage={12} />
                    </section>

                    <section className="flex gap-8">
                        <div className="flex-1">
                            <ChartCard
                                depositsTotal={5000}
                                expensesTotal={2300}
                                investmentsTotal={1000}
                                balance={1700}
                            />
                        </div>

                        <div className="flex-1">
                            <AiInsights />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
