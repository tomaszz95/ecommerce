'use client'

import React, { useState, useEffect } from 'react'

import FiltrationSection from './filtrationSection/FiltrationSection'
import ProductsList from './productsList/ProductsList'

import { productType, filterTypes } from '../../types/types'

import styles from './CategoryContent.module.css'

type ComponentType = {
    initialProducts: productType[]
}

const CategoryContent = ({ initialProducts }: ComponentType) => {
    const [filters, setFilters] = useState<filterTypes>({
        priceFrom: null,
        priceTo: null,
        selectedCompanies: [],
        availableOnly: false,
        promotionsOnly: false,
    })

    const [filteredProducts, setFilteredProducts] = useState(initialProducts)

    useEffect(() => {
        let filtered = initialProducts

        if (filters.selectedCompanies.length > 0) {
            filtered = filtered.filter((product) => filters.selectedCompanies.includes(product.company))
        }

        if (filters.priceFrom !== null) {
            filtered = filtered.filter((product) => product.price >= (filters.priceFrom ?? 0))
        }

        if (filters.priceTo !== null) {
            filtered = filtered.filter((product) => product.price <= (filters.priceTo ?? Number.MAX_SAFE_INTEGER))
        }

        if (filters.availableOnly) {
            filtered = filtered.filter((product) => product.stock !== 0)
        }

        if (filters.promotionsOnly) {
            filtered = filtered.filter((product) => product.promotion.isPromotion)
        }

        setFilteredProducts(filtered)
    }, [filters, initialProducts])

    const handleFilterChange = (newFilters: Partial<typeof filters>) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
        }))
    }

    const clearFiltersHandler = () => {
        setFilters({
            priceFrom: null,
            priceTo: null,
            selectedCompanies: [],
            availableOnly: false,
            promotionsOnly: false,
        })
    }

    return (
        <div className={styles.container}>
            <FiltrationSection
                products={initialProducts}
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={clearFiltersHandler}
            />

            <ProductsList products={filteredProducts} />
        </div>
    )
}

export default CategoryContent
