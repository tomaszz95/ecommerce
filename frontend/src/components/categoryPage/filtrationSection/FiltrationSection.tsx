'use client'

import React, { useState } from 'react'

import AvailableFilter from './filters/AvailableFilter'
import CompanyFilters from './filters/CompanyFilters'
import PriceFilters from './filters/PriceFilters'
import PromotionFilter from './filters/PromotionFilter'
import OnClickButton from '../../../components/UI/buttons/OnClickButton'

import { filterTypes } from '../../../types/types'

import styles from './FiltrationSection.module.css'

const FiltrationSection = () => {
    const [filters, setFilters] = useState<filterTypes>({
        priceFrom: 0,
        priceTo: 9999,
        company: [],
        available: false,
        promotion: false,
    })

    const [showMobileFilters, setShowMobileFilters] = useState(false)

    const showMobileFiltersHandler = () => {
        setShowMobileFilters(true)
    }

    const closeMobileFiltersHandler = () => {
        setShowMobileFilters(false)
    }

    const filterChangeHandler = (value: Partial<filterTypes>) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...value,
        }))
    }
    console.log(filters)
    return (
        <section className={styles.filtrationSection}>
            <div className={`${styles.filtrationContent} ${showMobileFilters ? styles.active : ''}`}>
                <div className={styles.filtrationHeading}>
                    <h2>Filters</h2>
                    <button onClick={closeMobileFiltersHandler}>X</button>
                </div>
                <div className={styles.singleFilterBox}>
                    <h3>Price</h3>
                    <PriceFilters
                        priceFrom={filters.priceFrom}
                        priceTo={filters.priceTo}
                        onFilterChange={filterChangeHandler}
                    />
                </div>
                <div className={styles.singleFilterBox}>
                    <h3>Company</h3>
                    <CompanyFilters company={filters.company} onFilterChange={filterChangeHandler} />
                </div>
                {/* <div className={styles.singleFilterBox}>
                    <h3>Available</h3>
                    <AvailableFilter filters={filters} onFilterChange={onFilterChange} />
                </div>
                <div className={styles.singleFilterBox}>
                    <h3>Promotions</h3>
                    <PromotionFilter filters={filters} onFilterChange={onFilterChange} />
                </div>

                <button className={styles.clearButton} onClick={onClearFilters}>
                    Clear filters
                </button> */}

                <div className={styles.filtrationButtonSection}>
                    <OnClickButton onClick={closeMobileFiltersHandler}>Apply filters</OnClickButton>
                </div>
            </div>

            {!showMobileFilters && (
                <div className={styles.filtrationButtonSection}>
                    <OnClickButton onClick={showMobileFiltersHandler}>Show filters</OnClickButton>
                </div>
            )}
        </section>
    )
}

export default FiltrationSection
