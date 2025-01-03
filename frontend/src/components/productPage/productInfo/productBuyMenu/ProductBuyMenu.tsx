'use client'

import { useState } from 'react'

import CurrentPrice from '../../../currentPrice/CurrentPrice'
import BuyMenuBenefits from './BuyMenuBenefits'
import ProductAddToCartModal from './ProductAddToCartModal'

import { API_URL } from '../../../../constans/url'

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

    const addToCartHandler = async () => {
        setShowModal(true)

        const orderId = localStorage.getItem('orderId')

        try {
            const response = await fetch(`${API_URL}/api/orders/addToCart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: productId,
                    orderId: orderId,
                }),
                credentials: 'include',
            })

            if (!response.ok) {
                const errorData = await response.json()

                throw new Error(errorData.msg || 'Something went wrong. Please try again later.')
            }

            const data = await response.json()

            localStorage.setItem('orderId', data.orderId)
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'

            throw new Error(errorMessage || 'Something went wrong. Please try again later.')
        }
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
