'use server'

import { Prisma } from '@prisma/client'
import { createTransactionFormSchema } from '../_schemas/transaction'
import { prisma } from '@/src/lib/prisma'

export const addTransaction = async (params: Prisma.TransactionCreateInput) => {
    const data = createTransactionFormSchema.parse(params)

    await prisma.transaction.create({
        data,
    })
}
