'use client'

import { useState } from 'react'

import Pagination from '../../../pagination/Pagination'

import styles from './SortProducts.module.css'

type ComponentType = {
    currentPage: number
    totalPages: number
    sort: string
}

const SortProducts = ({ currentPage, totalPages, sort }: ComponentType) => {
    const [selectedOption, setSelectedOption] = useState(sort)

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value

        setSelectedOption(value)

        const currentUrl = new URL(window.location.href)

        if (event.target.value !== 'default') {
            currentUrl.searchParams.set('sort', event.target.value.toString())
        } else {
            currentUrl.searchParams.delete('sort')
        }

        currentUrl.searchParams.set('page', '1')

        window.location.href = currentUrl.toString()
    }

    return (
        <div className={styles.sortContainer}>
            <div className={styles.sortBox}>
                <label htmlFor="sort">Sort products:</label>
                <select id="sort" value={selectedOption} onChange={handleSortChange}>
                    <option value="default">Default</option>
                    <option value="rating">Rating</option>
                    <option value="price">Price: Low to High</option>
                    <option value="-price">Price: High to Low</option>
                    <option value="alphabetically">Alphabetically: From a - z</option>
                    <option value="-alphabetically">Alphabetically: From z - a</option>
                </select>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    )
}

export default SortProducts
