import { filterTypes } from '../../../../types/types'

import styles from './AvailableFilter.module.css'

type ComponentType = {
    filters: filterTypes
    onFilterChange: (newFilters: Partial<filterTypes>) => void
}

const AvailableFilter = ({ filters, onFilterChange }: ComponentType) => {
    return (
        <div className={styles.availableFiltersContainer}>
            <input
                type="checkbox"
                checked={filters.availableOnly}
                onChange={(e) => onFilterChange({ availableOnly: e.target.checked })}
                aria-label="Show only available products"
            />
            <p>Show available products</p>
        </div>
    )
}

export default AvailableFilter
