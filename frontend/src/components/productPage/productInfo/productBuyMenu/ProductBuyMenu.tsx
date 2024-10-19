'use client'

import CurrentPrice from '../../../currentPrice/CurrentPrice'
import BuyMenuBenefits from './BuyMenuBenefits'

import styles from './ProductBuyMenu.module.css'

type ComponentType = {
    price: number
    stock: number
    productId: string
    promotion: boolean
    promotionPercent: number
    productName: string
}

const ProductBuyMenu = ({ price, stock, productId, promotion, promotionPercent, productName }: ComponentType) => {
    const addToCartHandler = () => {
        console.log(price, productId, productName)
    }

    return (
        <div className={styles.buyContainer}>
            <CurrentPrice price={price} promotion={promotion} promotionPercent={promotionPercent} isBig={true} />

            <button type="submit" className={styles.buyButton} onClick={addToCartHandler} disabled={stock === 0}>
                {stock === 0 ? 'No product in stock' : 'Add to cart'}
            </button>

            <BuyMenuBenefits stock={stock} />
        </div>
    )
}

export default ProductBuyMenu
