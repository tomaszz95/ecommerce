'use client'

import { useState, useEffect } from 'react'

import MainLayout from '../../../components/layouts/MainLayout'
import StepsChart from '../../../components/stepsChart/StepsChart'
import SummaryView from '../../../components/summaryPage/SummaryView'
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner'

import orderDummy from '../../../constans/orderDummy'

import { orderType } from '../../../types/types'

const SummaryPage = () => {
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
            document.title = 'NeXtPC - Summary'
            const metaDescription = document.querySelector('meta[name="description"]')
            if (metaDescription) {
                metaDescription.setAttribute('content', 'Summary of your order on NeXtPC')
            }
        }
    }, [order])

    return (
        <MainLayout>
            <StepsChart step="summary" />
            {loading ? <LoadingSpinner /> : <SummaryView order={order || ({} as orderType)} />}
        </MainLayout>
    )
}

export default SummaryPage
