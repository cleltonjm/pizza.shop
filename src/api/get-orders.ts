import { api } from "@/lib/axios";

export interface GetOrdersResponse {
    orders: {
        orderId: string
        createdAt: string
        status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
        customName: string
        total: number
    }[]
    meta: {
        pageIndex: number
        perIndex: number
        totalCount: number  
    }
}

export async function getOrders() {
    const res = await api.get<GetOrdersResponse>('/orders', {
        params: {
            pageIndex: 0,
        },
    })

    return res.data
}