'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'

import MainLayout from '../../../components/layouts/MainLayout'
import CategoryHead from '../../../components/categoryPage/CategoryHead'
import CategoryContent from '../../../components/categoryPage/CategoryContent'
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner'
import capitalizeFirstLetter from '../../../components/utils/capitalizeFirstLetter'

import dummyProducts from '../../../constans/dummyProducts'

type Props = {
    params: { category: string }
}

const CategoryPage = ({ params }: Props) => {
    const categorySlug = params.category || 'Shop'
    const categoryName = capitalizeFirstLetter(categorySlug)

    const [products, setProducts] = useState<typeof dummyProducts | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                const filteredProducts = dummyProducts.filter((product) => product.category.name === categoryName)

                if (!filteredProducts.length) {
                    notFound()
                }

                setProducts(filteredProducts)
            } catch (error) {
                console.error('Error fetching products:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [categoryName])

    useEffect(() => {
        document.title = `NeXtPC - ${categoryName}`
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', `Explore products in ${categoryName} category on NeXtPC`)
        }
    }, [categoryName])

    return (
        <MainLayout>
            <CategoryHead
                categoryName={categoryName}
                categorySlug={categorySlug}
                productsCount={products?.length || 0}
            />
            {loading ? <LoadingSpinner /> : <CategoryContent initialProducts={products || []} />}
        </MainLayout>
    )
}

export default CategoryPage
