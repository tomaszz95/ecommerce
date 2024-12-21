import { filterTypes } from '../../../../types/types'

import styles from './PromotionFilter.module.css'

type ComponentType = {
    promotion: boolean
    onFilterChange: (value: Partial<filterTypes>) => void
}

const PromotionFilter = ({ promotion, onFilterChange }: ComponentType) => {
    return (
        <div className={styles.promotionFiltersContainer}>
            <input
                type="checkbox"
                checked={promotion}
                onChange={(e) => onFilterChange({ promotion: e.target.checked })}
                aria-label="Show products on a sale"
            />
            <p>Show products on sale</p>
        </div>
    )
}

export default PromotionFilter
