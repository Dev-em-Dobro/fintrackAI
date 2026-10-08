import Image from 'next/image'
import bulbIcon from '@/src/assets/bulb-icon.png'
import insightsIcon from '@/src/assets/insights-icon.png'
import starIcon from '@/src/assets/star-icon.png'
import refreshIcon from '@/src/assets/refresh-icon.png'

export const AiInsights = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2">
                <Image src={starIcon} alt="Star icon" />
                <h3 className="text-xl font-bold">Insights com IA</h3>
            </div>

            <div className="bg-[#161b26] p-6 rounded-2xl border border-[#1d293d] flex gap-4">
                <div className="bg-purple-100 dark:bg-purple-500/20 text-primary p-3 rounded-xl h-fit">
                    <Image src={insightsIcon} alt="Insights Icon" />
                </div>
                <div>
                    <p className="text-slate-400 text-sm">
                        Categoria com maior gasto
                    </p>
                    <p className="font-semibold text-white">
                        Alimentação: R$ 1.200,00
                    </p>
                </div>
            </div>

            <div className="bg-emerald-500/5 border-emerald-500/20 p-6 rounded-2xl border flex gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 p-3 rounded-xl h-fit shrink-0">
                    <Image src={bulbIcon} alt="Bulb Icon" />
                </div>
                <div className="min-w-0">
                    <p className="font-medium text-emerald-400 mb-2">
                        Sugestão de economia
                    </p>
                    <div className="text-sm text-slate-300 whitespace-pre-line leading-relaxed">
                        Seus gastos com alimentação representam a maior parte
                        das despesas do mês. Planejar as refeições da semana
                        pode ajudar a reduzir esse valor.
                    </div>
                </div>
            </div>

            <button
                className="flex items-center justify-center gap-3 w-full
            border-2 border-dashed border-[#1E293B] py-4 rounded-2xl hover:border-[#9333EA] cursor-pointer hover:text-[#9333EA]"
            >
                <Image src={refreshIcon} alt="Refresh icon" />
                <span>Atualizar análise</span>
            </button>
        </div>
    )
}
