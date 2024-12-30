'use client'

import { useEffect, useState } from 'react'

import useMetadata from '../../hooks/useMetadata'

import MainLayout from '../../components/layouts/MainLayout'
import StepsChart from '../../components/stepsChart/StepsChart'
import CartView from '../../components/cartPage/CartView'
import SimilarCarousel from '../../components/productPage/similarProductsCarousel/SimilarCarousel'
import ServerError from '../../components/serverError/ServerError'

import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner'

import { cartOrderType, homepageSingleProductData } from '../../types/types'

import { API_URL } from '../../constans/url'

const CartPage = () => {
    useMetadata({ title: 'Cart', description: 'NeXtPC cart page' })

    const [fetchedData, setFetchedData] = useState<{
        order: cartOrderType | null
        similarProducts: homepageSingleProductData[]
    }>({
        order: null,
        similarProducts: [],
    })
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)

        const fetchOrderData = async () => {
            const orderId = localStorage.getItem('orderId') || ''

            try {
                if (orderId === '') {
                    setIsLoading(false)

                    return setFetchedData({ order: null, similarProducts: [] })
                }

                const response = await fetch(`${API_URL}/api/orders/getOrder`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        orderId: orderId,
                    }),
                    credentials: 'include',
                })

                if (!response.ok) {
                    const errorData = await response.json()

                    throw new Error(errorData.msg || 'Order not found')
                }

                const orderData = await response.json()
                setFetchedData(orderData)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchOrderData()
    }, [])

    if (isLoading) {
        return (
            <MainLayout>
                <StepsChart step="cart" />
                <LoadingSpinner />
            </MainLayout>
        )
    }

    if (error) {
        return (
            <MainLayout>
                <StepsChart step="cart" />
                <ServerError errorText={error} />
            </MainLayout>
        )
    }

    if (fetchedData.order === null || fetchedData.similarProducts.length === 0) {
        return (
            <MainLayout>
                <StepsChart step="cart" />
                <ServerError
                    errorText="No items added to cart yet"
                    errorMsg="Please add items to buy to see your cart"
                />
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <StepsChart step="cart" />
            {fetchedData.order && <CartView order={fetchedData.order} />}
            {fetchedData.similarProducts && <SimilarCarousel similarProducts={fetchedData.similarProducts} />}
        </MainLayout>
    )
}

export default CartPage
