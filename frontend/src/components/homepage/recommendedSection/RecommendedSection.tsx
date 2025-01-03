'use client'

import { useState, useEffect } from 'react'

import ProductsCarousel from '../../carousels/productCarousel/ProductsCarousel'
import RecommendedProductsBox from './RecommendedProductsBox'
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner'

import { homepageSingleProductData } from '../../../types/types'

import styles from './RecommendedSection.module.css'

type ComponentType = {
    recommendedProducts: homepageSingleProductData[]
}

const RecommendedSection = ({ recommendedProducts }: ComponentType) => {
    const [products, setProducts] = useState<homepageSingleProductData[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)

            try {
                setProducts(recommendedProducts)
            } catch (error) {
                console.error('Error fetching products:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [recommendedProducts])

    return (
        <section className={styles.recommendedSection}>
            <section className={styles.container}>
                <h2>Recommended</h2>
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <ProductsCarousel products={products} />
                        <RecommendedProductsBox products={products} />
                    </>
                )}
            </section>
        </section>
    )
}

export default RecommendedSection
