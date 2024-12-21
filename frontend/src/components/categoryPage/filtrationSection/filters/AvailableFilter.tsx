import { filterTypes } from '../../../../types/types'

import styles from './AvailableFilter.module.css'

type ComponentType = {
    available: boolean
    onFilterChange: (value: Partial<filterTypes>) => void
}

const AvailableFilter = ({ available, onFilterChange }: ComponentType) => {
    return (
        <div className={styles.availableFiltersContainer}>
            <input
                type="checkbox"
                checked={available}
                onChange={(e) => onFilterChange({ available: e.target.checked })}
                aria-label="Show only available products"
            />
            <p>Show available products</p>
        </div>
    )
}

export default AvailableFilter
