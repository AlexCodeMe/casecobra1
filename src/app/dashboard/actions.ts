'use server'

import { db } from "@/lib/db"
import { OrderStatus } from "@prisma/client"

type Props = {
    id: string
    newStatus: OrderStatus
}

export async function changeOrderStatus({ id, newStatus }: Props) {
    await db.order.update({
        where: { id },
        data: { status: newStatus },
    })
}