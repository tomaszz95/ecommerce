import Pagination from '@/components/pagination/Pagination'
import { useState } from 'react'

import styles from './SortProducts.module.css'

type ComponentType = {
    productsLength: number
}

const SortProducts = ({ productsLength }: ComponentType) => {
    const [selectedOption, setSelectedOption] = useState('default')

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value

        setSelectedOption(value)
    }

    return (
        <div className={styles.sortContainer}>
            <div className={styles.sortBox}>
                <label htmlFor="sort">Sort products:</label>
                <select id="sort" value={selectedOption} onChange={handleSortChange}>
                    <option value="default">Default</option>
                    <option value="rating">Rating</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="alph-asc">Alphabetically: From a - z</option>
                    <option value="alph-desc">Alphabetically: From z - a</option>
                </select>
                <Pagination productsLength={productsLength} />
            </div>
        </div>
    )
}

export default SortProducts
