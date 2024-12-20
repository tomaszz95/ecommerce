import { filterTypes } from '../../../../types/types'

import styles from './PriceFilters.module.css'

type ComponentType = {
    priceFrom: number
    priceTo: number
    onFilterChange: (value: Partial<filterTypes>) => void
}

const PriceFilters = ({ priceFrom, priceTo, onFilterChange }: ComponentType) => {
    return (
        <div className={styles.priceFiltersContainer}>
            <div className={styles.priceFiltersValues}>
                <span>$</span>
                <input
                    placeholder="from"
                    type="number"
                    value={priceFrom}
                    min={0}
                    onChange={(e) => {
                        const newValue = e.target.value.replace(/^0+/, '')
                        e.target.value = newValue
                        onFilterChange({ priceFrom: Number(newValue) })
                    }}
                    aria-label="Lowest price"
                />
            </div>
            <div className={styles.priceFiltersValues}>
                <span>$</span>
                <input
                    placeholder="to"
                    value={priceTo}
                    min={1}
                    onChange={(e) => {
                        const newValue = e.target.value.replace(/^0+/, '')
                        onFilterChange({ priceTo: Number(newValue) })
                    }}
                    aria-label="Highest price"
                />
            </div>
        </div>
    )
}

export default PriceFilters
