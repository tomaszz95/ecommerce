'use client'

import { useState, useEffect } from 'react'

import useProtect from '../../../../hooks/useProtect'

import MainLayout from '../../../../components/layouts/MainLayout'
import SingleOrderView from '../../../../components/userSingleOrderPage/SingleOrderView'
import LoadingSpinner from '../../../../components/loadingSpinner/LoadingSpinner'

import ServerError from '../../../../components/serverError/ServerError'

import { API_URL } from '../../../../constans/url'

type Props = {
    params: { orderId: string }
}

const UserSingleOrderPage = ({ params }: Props) => {
    useProtect({ from: 'Guest' })

    const [orderData, setOrderData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [serverError, setServerError] = useState('')

    useEffect(() => {
        const orderId = params.orderId

        setIsLoading(true)

        const getSingleOrder = async () => {
            try {
                const response = await fetch(`${API_URL}/api/orders/user/orderList/${orderId}`, {
                    method: 'GET',
                    credentials: 'include',
                })

                if (!response.ok) {
                    const errorData = await response.json()

                    throw new Error(errorData.msg || 'Order not found')
                }

                const data = await response.json()

                setOrderData(data.order)
                setIsLoading(false)
            } catch (err: any) {
                setServerError(err.message)
                setIsLoading(false)
            }
        }

        getSingleOrder()
    }, [])

    if (isLoading) {
        return (
            <MainLayout>
                <LoadingSpinner />
            </MainLayout>
        )
    }

    if ((!isLoading && serverError !== '') || orderData === null) {
        return (
            <MainLayout>
                <ServerError errorText={serverError} errorMsg="Please try again later" />
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <SingleOrderView order={orderData} />
        </MainLayout>
    )
}

export default UserSingleOrderPage
