'use client'

import { useState } from 'react'

import { API_URL } from '../../constans/url'

import styles from './Pagination.module.css'

type ComponentType = {
    currentPage: number
    totalPages: number
}

const Pagination = ({ currentPage, totalPages }: ComponentType) => {
    const [page, setPage] = useState(currentPage)
    const [error, setError] = useState(false)

    const handlePageChange = async (newPage: number) => {
        setPage(newPage)

        try {
            const currentUrl = new URL(window.location.href)

            currentUrl.searchParams.set('page', newPage.toString())

            const response = await fetch(currentUrl.href)

            if (!response.ok) {
                throw new Error('Products not found')
            }

            window.history.pushState(null, '', currentUrl.toString())
        } catch (err) {
            console.error(err)
            setError(true)
        }
    }

    return (
        <div className={styles.pagination}>
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} aria-label="Go to previous page">
                &lt;
            </button>
            <span>
                {page} of {totalPages}
            </span>
            <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                aria-label="Go to next page"
            >
                &gt;
            </button>
        </div>
    )
}

export default Pagination
