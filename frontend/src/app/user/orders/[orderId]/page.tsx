'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'

import MainLayout from '../../../../components/layouts/MainLayout'
import SingleOrderView from '../../../../components/userSingleOrderPage/SingleOrderView'
import LoadingSpinner from '../../../../components/loadingSpinner/LoadingSpinner'

import ordersDummy from '../../../../constans/ordersDummy'

type Props = {
    params: { orderId: string }
}

const UserSingleOrderPage = ({ params }: Props) => {
    const orderId = params.orderId

    const [order, setOrder] = useState<(typeof ordersDummy)[0] | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrder = async () => {
            setLoading(true)
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                const foundOrder = ordersDummy.find((order) => order.orderId === orderId)

                if (!foundOrder) {
                    notFound()
                }

                setOrder(foundOrder)
            } catch (error) {
                console.error('Error fetching order:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchOrder()
    }, [orderId])

    useEffect(() => {
        document.title = 'NeXtPC - Order'
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', 'View details for your order on NeXtPC')
        }
    }, [])

    return <MainLayout>{loading ? <LoadingSpinner /> : order ? <SingleOrderView order={order} /> : null}</MainLayout>
}

export default UserSingleOrderPage
