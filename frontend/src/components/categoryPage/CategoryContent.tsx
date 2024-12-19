'use client'

import React, { useState, useEffect } from 'react'

import FiltrationSection from './filtrationSection/FiltrationSection'
import ProductsList from './productsList/ProductsList'

import { categorySingleProductData } from '../../types/types'

import styles from './CategoryContent.module.css'

type ComponentType = {
    products: categorySingleProductData[]
    currentPage: number
    totalPages: number
    sort: string
}

const CategoryContent = ({ products, currentPage, totalPages, sort }: ComponentType) => {
    return (
        <div className={styles.container}>
            {/* <FiltrationSection products={initialProducts} /> */}

            <ProductsList products={products} totalPages={totalPages} currentPage={currentPage} sort={sort} />
        </div>
    )
}

export default CategoryContent
