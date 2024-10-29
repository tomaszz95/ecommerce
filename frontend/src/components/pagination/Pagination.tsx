'use client'

import { useState } from 'react'
import styles from './Pagination.module.css'

const itemsPerPage = 4

type ComponentType = {
    productsLength: number
}

const Pagination = ({ productsLength }: ComponentType) => {
    const [currentPage, setCurrentPage] = useState(1)

    const maxPage = Math.ceil(productsLength / itemsPerPage)
    const handlePageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value)
        if (value >= 1 && value <= maxPage) {
            setCurrentPage(value)
        }
    }

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1)
        }
    }

    const goToNextPage = () => {
        if (currentPage < maxPage) {
            setCurrentPage((prevPage) => prevPage + 1)
        }
    }

    return (
        <div className={styles.pagination}>
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                &lt;
            </button>
            <span>
                <input type="number" value={currentPage} onChange={handlePageInputChange} min={1} max={maxPage} /> of{' '}
                {maxPage}
            </span>
            <button onClick={goToNextPage} disabled={currentPage === maxPage}>
                &gt;
            </button>
        </div>
    )
}

export default Pagination
