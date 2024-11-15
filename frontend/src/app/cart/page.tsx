'use client'

import { useState, useEffect } from 'react'

import MainLayout from '../../components/layouts/MainLayout'
import StepsChart from '../../components/stepsChart/StepsChart'
import CartView from '../../components/cartPage/CartView'
import SimilarCarousel from '../../components/productPage/similarProductsCarousel/SimilarCarousel'
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner'

import { orderType } from '../../types/types'

import orderDummy from '../../constans/orderDummy'

const CartPage = () => {
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
            document.title = 'NeXtPC - Cart'
            const metaDescription = document.querySelector('meta[name="description"]')
            if (metaDescription) {
                metaDescription.setAttribute('content', 'Cart details for your order on NeXtPC')
            }
        }
    }, [order])

    const productCategory = order?.products[0]?.product?.category?.name

    return (
        <MainLayout>
            <StepsChart step="cart" />
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <CartView order={order || ({} as orderType)} />
                    {productCategory && <SimilarCarousel productCategory={productCategory} />}
                </>
            )}
        </MainLayout>
    )
}

export default CartPage
