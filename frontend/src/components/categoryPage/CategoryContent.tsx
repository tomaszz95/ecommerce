import React from 'react'

import FiltrationSection from './filtrationSection/FiltrationSection'
import ProductsList from './productsList/ProductsList'

import { categorySingleProductData, filterTypes } from '../../types/types'

import styles from './CategoryContent.module.css'

type ComponentType = {
    products: categorySingleProductData[]
    currentPage: number
    totalPages: number
    sort: string
    filterParams: filterTypes
}

const CategoryContent = ({ products, currentPage, totalPages, sort, filterParams }: ComponentType) => {
    return (
        <div className={styles.container}>
            <FiltrationSection filterParams={filterParams} />

            <ProductsList products={products} totalPages={totalPages} currentPage={currentPage} sort={sort} />
        </div>
    )
}

export default CategoryContent
