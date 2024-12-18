import { useState } from 'react'

import Pagination from '../../../components/pagination/Pagination'

import styles from './SortProducts.module.css'

type ComponentType = {
    currentPage: number
    totalPages: number
}

const SortProducts = ({ currentPage, totalPages }: ComponentType) => {
    const [selectedOption, setSelectedOption] = useState('default')

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value

        setSelectedOption(value)

        console.log(value)
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
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    )
}

export default SortProducts
