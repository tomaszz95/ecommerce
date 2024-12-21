'use client'

import { useState } from 'react'

import styles from './Pagination.module.css'

type ComponentType = {
    currentPage: number
    totalPages: number
}

const Pagination = ({ currentPage, totalPages }: ComponentType) => {
    const [page, setPage] = useState(totalPages !== 0 ? currentPage : 0)

    const handlePageChange = async (newPage: number) => {
        setPage(newPage)

        const currentUrl = new URL(window.location.href)

        currentUrl.searchParams.set('page', newPage.toString())

        window.location.href = currentUrl.toString()
    }

    return (
        <div className={styles.pagination}>
            <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1 || page === 0}
                aria-label="Go to previous page"
            >
                &lt;
            </button>
            <span>
                {page} of {totalPages}
            </span>
            <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages || page === 0}
                aria-label="Go to next page"
            >
                &gt;
            </button>
        </div>
    )
}

export default Pagination
