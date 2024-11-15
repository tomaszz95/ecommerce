'use client'

import { useState, useEffect } from 'react'

import OfferSectionItem from './OfferSectionItem'
import OfferCarousel from '../../carousels/offerCarousel/OfferCarousel'
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner'

import navItems from '../../../constans/navItems'

import dummyProducts from '../../../constans/dummyProducts'
import { productType } from '../../../types/types'

import styles from './OfferSection.module.css'

const OfferSection = () => {
    const [productsByCategory, setProductsByCategory] = useState<Record<string, productType[]>>({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            setLoading(true)

            try {
                await new Promise((resolve) => setTimeout(resolve, 1000))

                const categorizedProducts = navItems.reduce((acc: Record<string, productType[]>, item) => {
                    acc[item.name] = dummyProducts.filter((product) => product.category.name === item.name).slice(0, 10)
                    return acc
                }, {})
                setProductsByCategory(categorizedProducts)
            } catch (error) {
                console.error('Error fetching products:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProductsByCategory()
    }, [])

    return (
        <section className={styles.offerSection}>
            {navItems.map((item) => (
                <div className={styles.offerSectionBox} key={item.name}>
                    <OfferSectionItem name={item.name} photo={item.photo} link={item.link} />
                    {loading ? <LoadingSpinner /> : <OfferCarousel products={productsByCategory[item.name] || []} />}
                </div>
            ))}
        </section>
    )
}

export default OfferSection
