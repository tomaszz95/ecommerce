'use client'

import { useState, useEffect } from 'react'

import ProductsCarousel from '../../carousels/productCarousel/ProductsCarousel'
import BiggestPromotion from './BiggestPromotion'
import LatestProducts from './LatestProducts'
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner'

import { homepageSingleProductData } from '../../../types/types'

import styles from './HighlightedSection.module.css'

type ComponentType = {
    biggestDiscountProduct: homepageSingleProductData
    latestProducts: homepageSingleProductData[]
}

const HighlightedSection = ({ biggestDiscountProduct, latestProducts }: ComponentType) => {
    const [products, setProducts] = useState<homepageSingleProductData[]>([])
    const [productWithHighestPromotion, setProductWithHighestPromotion] = useState<homepageSingleProductData | null>(
        null,
    )
    const [loadingPromotion, setLoadingPromotion] = useState(true)
    const [loadingLatest, setLoadingLatest] = useState(true)

    useEffect(() => {
        const fetchPromotionProduct = async () => {
            setLoadingPromotion(true)

            try {
                setProductWithHighestPromotion(biggestDiscountProduct)
            } catch (error) {
                console.error('Error fetching promotion product:', error)
            } finally {
                setLoadingPromotion(false)
            }
        }

        const fetchLatestProducts = async () => {
            setLoadingLatest(true)

            try {
                setProducts(latestProducts)
            } catch (error) {
                console.error('Error fetching latest products:', error)
            } finally {
                setLoadingLatest(false)
            }
        }

        fetchPromotionProduct()
        fetchLatestProducts()
    }, [biggestDiscountProduct, latestProducts])

    return (
        <section className={styles.highlightSection}>
            <div className={styles.highlightSectionPromotion}>
                <h2>Deal of the day</h2>

                {loadingPromotion ? (
                    <LoadingSpinner />
                ) : (
                    <div className={styles.highlightSectionPromotionBox}>
                        <div className={styles.highlightSectionPromotionText}>
                            {productWithHighestPromotion?.promotion.promotionPercent}%
                        </div>
                        {productWithHighestPromotion && <BiggestPromotion product={productWithHighestPromotion} />}
                    </div>
                )}
            </div>
            <div className={styles.highlightSectionPromotion}>
                <h2>Latest products</h2>
                {loadingLatest ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <LatestProducts products={products} />
                        <ProductsCarousel products={products} />
                    </>
                )}
            </div>
        </section>
    )
}

export default HighlightedSection
