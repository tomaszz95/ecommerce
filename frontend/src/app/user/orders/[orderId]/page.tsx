'use client'

import { useState, useEffect } from 'react'

import useProtect from '../../../../hooks/useProtect'
import useMetadata from '../../../../hooks/useMetadata'

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
    useMetadata({ title: 'Order', description: 'NeXtPC user order  page' })

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
            } catch (err: unknown) {
                const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'

                setServerError(errorMessage)
                setIsLoading(false)
            }
        }

        getSingleOrder()
    }, [params.orderId])

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
