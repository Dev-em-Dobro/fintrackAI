import { prisma } from '@/src/lib/prisma'

export const getRecentTransactions = async () => {
    const lastTransactions = await prisma.transaction.findMany({
        orderBy: {
            date: 'desc',
        },
        take: 3,
    })

    return lastTransactions
}
