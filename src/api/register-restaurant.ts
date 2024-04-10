import { api } from "@/lib/axios";

export interface RegisterRestaurant {
    restaurantName: string
    managerName: string
    email: string
    phone: string
}

export async function RegisterRestaurant({ 
    restaurantName,
    managerName,
    email,
    phone 
}: RegisterRestaurant) {
    await api.post('/authenticate', { 
        restaurantName,
        managerName,
        email,
        phone 
     })
}