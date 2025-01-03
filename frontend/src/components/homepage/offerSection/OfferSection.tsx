'use client'

import { useState, useEffect } from 'react'

import OfferSectionItem from './OfferSectionItem'
import OfferCarousel from '../../carousels/offerCarousel/OfferCarousel'
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner'

import navItems from '../../../constans/navItems'

import { homepageSingleProductData } from '../../../types/types'

import styles from './OfferSection.module.css'

type ComponentType = {
    productsByCategory: { [category: string]: homepageSingleProductData[] }
}

const OfferSection = ({ productsByCategory }: ComponentType) => {
    const [products, setProducts] = useState<{ [category: string]: homepageSingleProductData[] }>({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            setLoading(true)

            try {
                setProducts(productsByCategory)
            } catch (error) {
                console.error('Error fetching products:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProductsByCategory()
    }, [productsByCategory])

    return (
        <section className={styles.offerSection}>
            {navItems.map((item) => (
                <div className={styles.offerSectionBox} key={item.name}>
                    <OfferSectionItem name={item.name} photo={item.photo} link={item.link} />
                    {loading ? <LoadingSpinner /> : <OfferCarousel products={products[item.name] || []} />}
                </div>
            ))}
        </section>
    )
}

export default OfferSection
