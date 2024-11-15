'use client'

import { useState, useEffect } from 'react'

import MainLayout from '../../../components/layouts/MainLayout'
import OrdersView from '../../../components/userOrdersPage/OrdersView'
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner'

import ordersDummy from '../../../constans/ordersDummy'

import { orderType } from '../../../types/types'

const UserOrdersPage = () => {
    const [orders, setOrders] = useState<orderType[] | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true)
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                setOrders(ordersDummy)
            } catch (error) {
                console.error('Error fetching orders:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchOrders()
    }, [])

    useEffect(() => {
        document.title = 'NeXtPC - User orders'
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', 'View your orders on NeXtPC')
        }
    }, [])

    return <MainLayout>{loading ? <LoadingSpinner /> : <OrdersView orders={orders || []} />}</MainLayout>
}

export default UserOrdersPage
