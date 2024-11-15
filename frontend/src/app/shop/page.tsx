'use client'

import { useState, useEffect } from 'react'

import CategoryContent from '../../components/categoryPage/CategoryContent'
import CategoryHead from '../../components/categoryPage/CategoryHead'
import MainLayout from '../../components/layouts/MainLayout'
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner'

import dummyProducts from '../../constans/dummyProducts'

const ShopPage = () => {
    const [products, setProducts] = useState<typeof dummyProducts | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                setProducts(dummyProducts)
            } catch (error) {
                console.error('Error fetching products:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return (
        <MainLayout>
            <CategoryHead categoryName="Shop" categorySlug="" productsCount={products?.length || 0} />
            {loading ? <LoadingSpinner /> : <CategoryContent initialProducts={products || []} />}
        </MainLayout>
    )
}

export default ShopPage
