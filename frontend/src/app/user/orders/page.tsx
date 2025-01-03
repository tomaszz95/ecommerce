'use client'

import { useState, useEffect } from 'react'

import useProtect from '../../../hooks/useProtect'
import useMetadata from '../../../hooks/useMetadata'

import MainLayout from '../../../components/layouts/MainLayout'
import OrdersView from '../../../components/userOrdersPage/OrdersView'
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner'
import ServerError from '../../../components/serverError/ServerError'

import { API_URL } from '../../../constans/url'

const UserOrdersPage = () => {
    useProtect({ from: 'Guest' })
    useMetadata({ title: 'Orders List', description: 'NeXtPC user orders list page' })

    const [ordersData, setOrdersData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [serverError, setServerError] = useState('')

    useEffect(() => {
        setIsLoading(true)

        const getOrdersData = async () => {
            try {
                const response = await fetch(`${API_URL}/api/orders/user/orderList`, {
                    method: 'GET',
                    credentials: 'include',
                })

                if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.msg || 'Orders not found')
                }

                const data = await response.json()

                setOrdersData(data.orders)
                setIsLoading(false)
            } catch (err: unknown) {
                const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'

                setServerError(errorMessage)
                setIsLoading(false)
            }
        }

        getOrdersData()
    }, [])

    if (isLoading) {
        return (
            <MainLayout>
                <LoadingSpinner />
            </MainLayout>
        )
    }

    if (!isLoading && serverError !== '') {
        return (
            <MainLayout>
                <ServerError errorText={serverError} errorMsg="Please try again later" />
            </MainLayout>
        )
    }

    if (!isLoading && serverError === '' && ordersData.length === 0) {
        return (
            <MainLayout>
                <ServerError errorText="No orders yet" errorMsg="Add product to cart to see your order" />
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <OrdersView ordersData={ordersData} />
        </MainLayout>
    )
}

export default UserOrdersPage
