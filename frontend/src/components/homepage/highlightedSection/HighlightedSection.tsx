'use client'

import { useState, useEffect } from 'react'

import ProductsCarousel from '../../carousels/productCarousel/ProductsCarousel'
import BiggestPromotion from './BiggestPromotion'
import LatestProducts from './LatestProducts'
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner'

import { productType } from '../../../types/types'
import highestPromotionFilter from '../../../helpers/highestPromotionFilter'
import dummyProducts from '../../../constans/dummyProducts'

import styles from './HighlightedSection.module.css'

const HighlightedSection = () => {
    const [latestProducts, setLatestProducts] = useState<productType[] | null>(null)
    const [productWithHighestPromotion, setProductWithHighestPromotion] = useState<productType | null>(null)
    const [loadingPromotion, setLoadingPromotion] = useState(true)
    const [loadingLatest, setLoadingLatest] = useState(true)

    useEffect(() => {
        const fetchPromotionProduct = async () => {
            setLoadingPromotion(true)
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                setProductWithHighestPromotion(highestPromotionFilter(dummyProducts))
            } catch (error) {
                console.error('Error fetching promotion product:', error)
            } finally {
                setLoadingPromotion(false)
            }
        }

        const fetchLatestProducts = async () => {
            setLoadingLatest(true)
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                setLatestProducts(dummyProducts.slice(0, 8))
            } catch (error) {
                console.error('Error fetching latest products:', error)
            } finally {
                setLoadingLatest(false)
            }
        }

        fetchPromotionProduct()
        fetchLatestProducts()
    }, [])

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
                    <div className={styles.highlightSectionLatest}>
                        <LatestProducts products={latestProducts || []} />
                        <ProductsCarousel products={latestProducts || []} />
                    </div>
                )}
            </div>
        </section>
    )
}

export default HighlightedSection
