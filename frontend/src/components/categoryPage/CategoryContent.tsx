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
}

const CategoryContent = ({ products, currentPage, totalPages }: ComponentType) => {
    console.log(products)
    return (
        <div className={styles.container}>
            {/* <FiltrationSection products={initialProducts} /> */}

            <ProductsList products={products} totalPages={totalPages} currentPage={currentPage} />
        </div>
    )
}

export default CategoryContent
