import { useState, useEffect } from 'react'
import { API_URL } from '../constans/url'

export const useGetOrderData = (orderId: string) => {
    const [orderData, setOrderData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [serverError, setServerError] = useState('')

    useEffect(() => {
        const fetchOrderData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`${API_URL}/api/orders/cart/${orderId}`, {
                    method: 'GET',
                    credentials: 'include',
                })

                if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.msg || 'Order not found')
                }

                const data = await response.json()
                setOrderData(data.order)
            } catch (err: any) {
                setServerError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchOrderData()
    }, [orderId])

    return { orderData, isLoading, serverError }
}
