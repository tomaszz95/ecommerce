'use client'

import { useState } from 'react'

import CurrentPrice from '../../../currentPrice/CurrentPrice'
import BuyMenuBenefits from './BuyMenuBenefits'
import ProductAddToCartModal from './ProductAddToCartModal'

import styles from './ProductBuyMenu.module.css'

type ComponentType = {
    price: number
    promotionPrice: number
    stock: number
    productName: string
    productId: string
    photo: string
}

const ProductBuyMenu = ({ price, promotionPrice, stock, productName, productId, photo }: ComponentType) => {
    const [showModal, setShowModal] = useState(false)

    const closeModalHandler = () => {
        setShowModal(false)
    }

    const addToCartHandler = () => {
        setShowModal(true)
    }

    return (
        <div className={styles.buyContainer}>
            <CurrentPrice price={price} promotionPrice={promotionPrice} isBig={true} />

            <button
                type="submit"
                className={styles.buyButton}
                onClick={addToCartHandler}
                disabled={stock === 0}
                aria-label="Add product to cart"
            >
                {stock === 0 ? 'No product in stock' : 'Add to cart'}
            </button>

            <BuyMenuBenefits stock={stock} />

            {showModal && (
                <ProductAddToCartModal
                    price={price}
                    promotionPrice={promotionPrice}
                    photo={photo}
                    productName={productName}
                    onClose={closeModalHandler}
                />
            )}
        </div>
    )
}

export default ProductBuyMenu
