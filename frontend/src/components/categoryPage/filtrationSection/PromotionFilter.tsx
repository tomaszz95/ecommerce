import { filterTypes } from '../../../types/types'

import styles from './PromotionFilter.module.css'

type ComponentType = {
    filters: filterTypes
    onFilterChange: (newFilters: Partial<filterTypes>) => void
}

const PromotionFilter = ({ filters, onFilterChange }: ComponentType) => {
    return (
        <div className={styles.promotionFiltersContainer}>
            <input
                type="checkbox"
                checked={filters.promotionsOnly}
                onChange={(e) => onFilterChange({ promotionsOnly: e.target.checked })}
            />
            <p>Show products on sale</p>
        </div>
    )
}

export default PromotionFilter
