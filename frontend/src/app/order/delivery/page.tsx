'use client'

import { useState, useEffect } from 'react'

import MainLayout from '../../../components/layouts/MainLayout'

import StepsChart from '../../../components/stepsChart/StepsChart'
import DeliveryView from '../../../components/deliveryPage/DeliveryView'
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner'

import { orderType } from '../../../types/types'

import orderDummy from '../../../constans/orderDummy'

const DeliveryPage = () => {
    const [order, setOrder] = useState<orderType | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrderData = async () => {
            setLoading(true)
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                setOrder(orderDummy)
            } catch (error) {
                console.error('Error fetching order data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchOrderData()
    }, [])

    useEffect(() => {
        if (order) {
            document.title = 'NeXtPC - Delivery'
            const metaDescription = document.querySelector('meta[name="description"]')
            if (metaDescription) {
                metaDescription.setAttribute('content', 'Delivery details for your order on NeXtPC')
            }
        }
    }, [order])

    return (
        <MainLayout>
            <StepsChart step="delivery" />
            {loading ? <LoadingSpinner /> : <DeliveryView order={order || ({} as orderType)} />}
        </MainLayout>
    )
}

export default DeliveryPage
