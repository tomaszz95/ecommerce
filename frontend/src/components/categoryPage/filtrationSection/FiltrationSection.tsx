'use client'

import React, { useState } from 'react'

import AvailableFilter from './filters/AvailableFilter'
import CompanyFilters from './filters/CompanyFilters'
import PriceFilters from './filters/PriceFilters'
import PromotionFilter from './filters/PromotionFilter'
import OnClickButton from '../../../components/UI/buttons/OnClickButton'

import { filterTypes } from '../../../types/types'

import styles from './FiltrationSection.module.css'

type ComponentType = {
    filterParams: filterTypes
}

const FiltrationSection = ({ filterParams }: ComponentType) => {
    const [filters, setFilters] = useState<filterTypes>(filterParams)

    const [showMobileFilters, setShowMobileFilters] = useState(false)

    const applyFiltersHandler = () => {
        const currentUrl = new URL(window.location.href)

        if (filters.priceFrom !== 1) {
            currentUrl.searchParams.set('priceFrom', filters.priceFrom.toString())
        } else {
            currentUrl.searchParams.delete('priceFrom')
        }

        if (filters.priceTo !== 9999) {
            currentUrl.searchParams.set('priceTo', filters.priceTo.toString())
        } else {
            currentUrl.searchParams.delete('priceTo')
        }

        if (filters.company.length > 0) {
            currentUrl.searchParams.set('company', filters.company.join(','))
        } else {
            currentUrl.searchParams.delete('company')
        }

        if (filters.available === true) {
            currentUrl.searchParams.set('available', filters.available.toString())
        } else {
            currentUrl.searchParams.delete('available')
        }

        if (filters.promotion === true) {
            currentUrl.searchParams.set('promotion', filters.promotion.toString())
        } else {
            currentUrl.searchParams.delete('promotion')
        }

        currentUrl.searchParams.set('page', '1')
        currentUrl.searchParams.delete('search')

        window.location.href = currentUrl.toString()
    }

    const showMobileFiltersHandler = () => {
        setShowMobileFilters(true)
    }

    const closeMobileFiltersHandler = () => {
        applyFiltersHandler()
        setShowMobileFilters(false)
    }

    const filterChangeHandler = (value: Partial<filterTypes>) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...value,
        }))
    }

    const clearFiltersHandler = () => {
        setFilters({ priceFrom: 1, priceTo: 9999, company: [], available: false, promotion: false })
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
                <div className={styles.singleFilterBox}>
                    <h3>Available</h3>
                    <AvailableFilter available={filters.available} onFilterChange={filterChangeHandler} />
                </div>
                <div className={styles.singleFilterBox}>
                    <h3>Promotions</h3>
                    <PromotionFilter promotion={filters.promotion} onFilterChange={filterChangeHandler} />
                </div>

                <div className={styles.buttons}>
                    <button className={styles.applyButton} onClick={applyFiltersHandler}>
                        Apply filters
                    </button>

                    <button className={styles.clearButton} onClick={clearFiltersHandler}>
                        Clear filters
                    </button>
                </div>

                <div className={styles.filtrationButtonSection}>
                    <OnClickButton onClick={closeMobileFiltersHandler} disabled={!showMobileFilters}>
                        Apply filters
                    </OnClickButton>
                </div>
            </div>

            {!showMobileFilters && (
                <div className={styles.filtrationButtonSection}>
                    <OnClickButton onClick={showMobileFiltersHandler} disabled={showMobileFilters}>
                        Show filters
                    </OnClickButton>
                </div>
            )}
        </section>
    )
}

export default FiltrationSection
