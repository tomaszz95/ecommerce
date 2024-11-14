import { filterTypes } from '../../../../types/types'

import styles from './PriceFilters.module.css'

type ComponentType = {
    filters: filterTypes
    onFilterChange: (newFilters: Partial<filterTypes>) => void
}

const PriceFilters = ({ filters, onFilterChange }: ComponentType) => {
    return (
        <div className={styles.priceFiltersContainer}>
            <div className={styles.priceFiltersValues}>
                <span>$</span>
                <input
                    placeholder="from"
                    value={filters.priceFrom ?? ''}
                    onChange={(e) => onFilterChange({ priceFrom: Number(e.target.value) || null })}
                    aria-label="Lowest price"
                />
            </div>
            <div className={styles.priceFiltersValues}>
                <span>$</span>
                <input
                    placeholder="to"
                    value={filters.priceTo ?? ''}
                    onChange={(e) => onFilterChange({ priceTo: Number(e.target.value) || null })}
                    aria-label="Highest price"
                />
            </div>
        </div>
    )
}

export default PriceFilters
