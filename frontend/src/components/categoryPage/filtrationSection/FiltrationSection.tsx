import React, { useState } from 'react'

import { productType, filterTypes } from '../../../types/types'
import AvailableFilter from './filters/AvailableFilter'
import CompanyFilters from './filters/CompanyFilters'

import styles from './FiltrationSection.module.css'
import PriceFilters from './filters/PriceFilters'
import PromotionFilter from './filters/PromotionFilter'

type ComponentType = {
    products: productType[]
    filters: filterTypes
    onFilterChange: (newFilters: Partial<filterTypes>) => void
    onClearFilters: () => void
}

const FiltrationSection = ({ products, filters, onFilterChange, onClearFilters }: ComponentType) => {
    const [showMobileFilters, setShowMobileFilters] = useState(false)

    const showMobileFiltersHandler = () => {
        setShowMobileFilters(true)
    }

    const closeMobileFiltersHandler = () => {
        setShowMobileFilters(false)
    }

    return (
        <section className={styles.filtrationSection}>
            <div className={`${styles.filtrationContent} ${showMobileFilters ? styles.active : ''}`}>
                <div className={styles.filtrationHeading}>
                    <h2>Filters</h2>
                    <button onClick={closeMobileFiltersHandler}>X</button>
                </div>
                <div className={styles.singleFilterBox}>
                    <h3>Price</h3>
                    <PriceFilters filters={filters} onFilterChange={onFilterChange} />
                </div>
                <div className={styles.singleFilterBox}>
                    <h3>Company</h3>
                    <CompanyFilters filters={filters} onFilterChange={onFilterChange} products={products} />
                </div>
                <div className={styles.singleFilterBox}>
                    <h3>Available</h3>
                    <AvailableFilter filters={filters} onFilterChange={onFilterChange} />
                </div>
                <div className={styles.singleFilterBox}>
                    <h3>Promotions</h3>
                    <PromotionFilter filters={filters} onFilterChange={onFilterChange} />
                </div>

                <button className={styles.clearButton} onClick={onClearFilters}>
                    Clear filters
                </button>

                <div className={styles.filtrationButtonSection}>
                    <button className={styles.filtrationButton} onClick={closeMobileFiltersHandler}>
                        Apply filters
                    </button>
                </div>
            </div>

            {!showMobileFilters && (
                <div className={styles.filtrationButtonSection}>
                    <button className={styles.filtrationButton} onClick={showMobileFiltersHandler}>
                        Show filters
                    </button>
                </div>
            )}
        </section>
    )
}

export default FiltrationSection
