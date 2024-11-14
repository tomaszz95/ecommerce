'use client'

import { useState } from 'react'
import { StaticImageData } from 'next/image'

import CurrentPrice from '../../../currentPrice/CurrentPrice'
import BuyMenuBenefits from './BuyMenuBenefits'
import ProductAddToCartModal from './ProductAddToCartModal'

import styles from './ProductBuyMenu.module.css'
import AuthFormButton from '@/components/UI/buttons/AuthFormButton'

type ComponentType = {
    price: number
    stock: number
    productId: string
    promotion: boolean
    promotionPercent: number
    productName: string
    photo: StaticImageData
}

const ProductBuyMenu = ({
    photo,
    price,
    stock,
    productId,
    promotion,
    promotionPercent,
    productName,
}: ComponentType) => {
    const [showModal, setShowModal] = useState(false)

    const closeModalHandler = () => {
        setShowModal(false)
    }

    const addToCartHandler = () => {
        setShowModal(true)
    }

    return (
        <div className={styles.buyContainer}>
            <CurrentPrice price={price} promotion={promotion} promotionPercent={promotionPercent} isBig={true} />

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
                    photo={photo}
                    productName={productName}
                    onClose={closeModalHandler}
                />
            )}
        </div>
    )
}

export default ProductBuyMenu
